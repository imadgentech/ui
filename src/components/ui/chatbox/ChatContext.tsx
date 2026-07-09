'use client';

import React, { createContext, useContext, useState, useRef, useCallback, useMemo } from 'react';
import { useChat, UIMessage } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

interface ChatContextType {
    messages: UIMessage[];
    input: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e?: React.FormEvent) => void;
    append: (message: { role: 'user' | 'assistant' | 'system'; content: string }) => Promise<void>;
    status: string;
    isLoading: boolean;
    setMessages: (messages: UIMessage[]) => void;
    setInput: (input: string) => void;
    isChatActive: boolean;
    setIsChatActive: (active: boolean) => void;
    isDisabled: boolean;
    failureCount: number;
    reportFailure: () => void;
    resetChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export interface ChatProviderProps {
    children: React.ReactNode;
    /**
     * Number of consecutive failures before the chat is disabled.
     * @default 3
     */
    maxFailures?: number;
    /**
     * API endpoint `useChat` sends messages to.
     * @default '/api/chat'
     */
    api?: string;
}

export function ChatProvider({ children, maxFailures = 3, api }: ChatProviderProps) {
    const [isChatActive, setIsChatActive] = useState(false);
    const [input, setInput] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [failureCount, setFailureCount] = useState(0);
    const failureRef = useRef(0);

    const reportFailure = useCallback(() => {
        failureRef.current += 1;
        setFailureCount(failureRef.current);
        if (failureRef.current >= maxFailures) {
            setIsDisabled(true);
        }
    }, [maxFailures]);

    const resetChat = useCallback(() => {
        failureRef.current = 0;
        setFailureCount(0);
        setIsDisabled(false);
    }, []);

    const transport = useMemo(
        () => (api ? new DefaultChatTransport({ api }) : undefined),
        [api]
    );

    const {
        messages,
        sendMessage: sdkSendMessage,
        status,
        setMessages
    } = useChat({
        transport,
        onError: () => {
            reportFailure();
        },
    });

    const isLoading = status === 'submitted' || status === 'streaming';

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }, []);

    const handleSubmit = useCallback(async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const messageText = input.trim();
        if (!messageText || isLoading || isDisabled) return;

        setInput('');

        try {
            await sdkSendMessage({ text: messageText });
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    }, [input, isLoading, isDisabled, sdkSendMessage]);

    const append = useCallback(async (message: { role: 'user' | 'assistant' | 'system'; content: string }) => {
        await sdkSendMessage({ text: message.content });
    }, [sdkSendMessage]);

    const value = useMemo(() => ({
        messages,
        input,
        handleInputChange,
        handleSubmit,
        append,
        status,
        isLoading,
        setMessages,
        setInput,
        isChatActive,
        setIsChatActive,
        isDisabled,
        failureCount,
        reportFailure,
        resetChat,
    }), [
        messages,
        input,
        handleInputChange,
        handleSubmit,
        append,
        status,
        isLoading,
        setMessages,
        setInput,
        isChatActive,
        setIsChatActive,
        isDisabled,
        failureCount,
        reportFailure,
        resetChat,
    ]);

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChatContext() {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    return context;
}
