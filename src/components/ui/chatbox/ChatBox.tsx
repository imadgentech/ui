'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChatContext } from './ChatContext';
import { UIMessage } from 'ai';
import { cn } from '../../../lib/cn';
import { Surface } from '../layout/Surface';
import { Stack } from '../layout/Stack';
import { Flex } from '../layout/Flex';
import { Text } from '../typography/Text';
import { IconButton } from '../forms/IconButton';
import styles from './ChatBox.module.css';

export interface Message extends UIMessage {
  timestamp?: string;
}

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

// Module scope, not a closure — pure function of its argument, so it's
// stable across renders and safe to call from the memo comparator below.
function getMessageContent(msg: UIMessage): string {
  if (msg.parts && Array.isArray(msg.parts)) {
    return (msg.parts as Array<{ type: string; text?: string }>)
      .filter((part) => part.type === 'text')
      .map((part) => part.text ?? '')
      .join('');
  }
  return (msg as unknown as { content?: string }).content ?? '';
}

// `messages` gets a new array reference on every streamed token while the
// assistant's reply is growing. Without this, every prior message in the
// conversation re-renders (re-running getMessageContent + rebuilding JSX)
// on every single streamed chunk, not just the one actually changing.
// Comparator is content-based rather than relying on object identity, so
// this holds regardless of whether the upstream array preserves reference
// equality for untouched messages.
const ChatMessageBubble = React.memo(
  function ChatMessageBubble({ message }: { message: Message }) {
    return (
      <div
        className={cn(
          styles.messageWrapper,
          message.role === 'user' ? styles.userWrapper : styles.assistantWrapper
        )}
      >
        <div className={cn(
          styles.bubble,
          message.role === 'user' ? styles.userBubble : styles.assistantBubble
        )}>
          <Text size="sm">
            {getMessageContent(message)}
          </Text>
        </div>
        <Text size="xs" tone="muted" className={styles.timestamp}>
          {message.timestamp
            ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        </Text>
      </div>
    );
  },
  (prev, next) =>
    prev.message.id === next.message.id &&
    prev.message.timestamp === next.message.timestamp &&
    getMessageContent(prev.message) === getMessageContent(next.message)
);

export interface ChatBoxProps {
  initialMessages?: Message[];
  className?: string;
  onSendMessage?: (content: string) => void;
  onClose?: () => void;
  isFullPage?: boolean;
  variant?: 'full' | 'compact' | 'minimal';
  placeholder?: string;
  /**
   * Header title text.
   * @default 'Imadgen AI'
   */
  title?: string;
  /**
   * Header subtitle text.
   * @default 'Quantum-V2 Core'
   */
  subtitle?: string;
  /**
   * Called once on mount with the generated session ID.
   * Use this to persist the session in your backend.
   * If omitted, no session is created.
   */
  onSessionCreate?: (sessionId: string, metadata: { started_at: string }) => Promise<void>;
  /**
   * Called when the user ends the chat session.
   * Use this to persist the conversation in your backend.
   * If omitted, messages are not saved.
   * Note: for beforeunload persistence, add your own window event listener
   * using navigator.sendBeacon with your own endpoint.
   */
  onSaveConversation?: (data: { session_id: string; messages: ConversationMessage[] }) => Promise<void>;
}

export function ChatBox({
  className,
  onSendMessage,
  onClose,
  isFullPage,
  variant = 'full',
  placeholder = "Ask anything...",
  title = 'Imadgen AI',
  subtitle = 'Quantum-V2 Core',
  onSessionCreate,
  onSaveConversation,
}: ChatBoxProps) {
  const [sessionId] = useState(() => crypto.randomUUID());
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasCreatedSession = useRef(false);

  // Consume shared chat state from context
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: submitContext,
    status,
    isLoading: isChatLoading,
    setMessages,
    setIsChatActive,
    isDisabled,
    reportFailure,
    resetChat,
  } = useChatContext();

  const isStreaming = isChatLoading || status === 'submitted' || status === 'streaming';
  const canSend = status === 'ready' || !status;

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  // Notify the consumer about the new session on mount
  useEffect(() => {
    if (!onSessionCreate || hasCreatedSession.current) return;
    hasCreatedSession.current = true;

    onSessionCreate(sessionId, { started_at: new Date().toISOString() }).catch((err: unknown) => {
      console.error('[ChatBox] Session creation error:', err);
      setError(`Session creation failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
      reportFailure();
    });
  }, [sessionId, onSessionCreate, reportFailure]);

  const buildConversationPayload = () => ({
    session_id: sessionId,
    messages: messages.map((msg) => ({
      role: (msg.role === 'assistant' ? 'assistant' : 'user') as 'user' | 'assistant',
      content: getMessageContent(msg),
      timestamp: (msg as Message).timestamp || new Date().toISOString(),
    })),
  });

  const saveConversation = async () => {
    if (messages.length === 0 || !onSaveConversation) return;

    setIsSaving(true);
    setError(null);

    try {
      await onSaveConversation(buildConversationPayload());
    } catch (err: unknown) {
      console.error('[ChatBox] Failed to save conversation:', err);
      setError(`Failed to save: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsSaving(false);
    }
  };


  const handleEndChat = async () => {
    await saveConversation();
    setMessages([]);
    if (onClose) {
      onClose();
    }
  };

  const handleChatSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (input.trim() && canSend && !isDisabled) {
      if (variant === 'minimal') {
        setIsChatActive(true);
      }

      const messageText = input.trim();

      // Trigger context's handleSubmit
      submitContext();

      if (onSendMessage) {
        onSendMessage(messageText);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  };

  return (
    <Surface
      elevation={variant === 'minimal' ? 'none' : 'md'}
      radius={isFullPage ? "none" : "lg"}
      className={cn(
        styles.container,
        isFullPage && styles.fullPage,
        variant === 'compact' && styles.compact,
        variant === 'minimal' && styles.minimal,
        className
      )}
      padding="none"
    >
      {/* Header */}
      <div className={styles.header}>
        <Flex align="center" justify="between" gap="12">
          <Flex align="center" gap="12">
            <div className={styles.statusDot} />
            <Stack gap="0">
              <Text weight="semibold" size="sm">{title}</Text>
              <Text size="xs" tone="muted">{subtitle}</Text>
            </Stack>
          </Flex>

          <Flex align="center" gap="8">
            {onClose && (
              <IconButton
                variant="ghost"
                size="sm"
                onClick={handleEndChat}
                aria-label="Close chat"
                className={styles.closeButton}
                disabled={isSaving}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </IconButton>
            )}
          </Flex>
        </Flex>
      </div>

      {/* Service unavailable banner */}
      {isDisabled && (
        <div style={{ padding: '12px 16px', backgroundColor: 'rgba(var(--color-error-rgb), 0.12)', borderBottom: '1px solid rgba(var(--color-error-rgb), 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <Text size="sm" tone="danger">Chat unavailable - service failed to connect. Please try again later.</Text>
          <button
            onClick={resetChat}
            style={{ flexShrink: 0, fontSize: '12px', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(var(--color-error-rgb), 0.4)', background: 'transparent', color: 'inherit', cursor: 'pointer' }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && !isDisabled && (
        <div style={{ padding: '12px 16px', backgroundColor: 'rgba(var(--color-error-rgb), 0.1)' }}>
          <Text size="sm" tone="danger">{error}</Text>
        </div>
      )}

      {/* Messages Area */}
      <div className={styles.messagesArea} ref={scrollRef}>
        <Stack gap="16">
          {messages.map((message) => (
            <ChatMessageBubble key={message.id} message={message as Message} />
          ))}
          {isStreaming && (
            <div className={styles.assistantWrapper}>
              <div className={cn(styles.bubble, styles.assistantBubble, styles.typing)}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
            </div>
          )}
        </Stack>
      </div>

      {/* Input Area */}
      <div className={styles.inputArea}>
        <div className={styles.premiumWrapper}>
          <div className={styles.premiumContainer}>
            <input
              type="text"
              className={styles.premiumInput}
              placeholder={isDisabled ? 'Chat unavailable' : placeholder}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={isDisabled || (!canSend && variant !== 'minimal')}
            />
            <button
              className={cn(styles.premiumSendButton, !input.trim() && variant !== 'minimal' && styles.sendButtonHidden)}
              onClick={() => handleChatSubmit()}
              disabled={isDisabled || ((!input.trim() || !canSend) && variant !== 'minimal')}
              tabIndex={!input.trim() && variant !== 'minimal' ? -1 : undefined}
              aria-label="Send message"
            >
              <svg
                className={styles.premiumIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Surface>
  );
}
