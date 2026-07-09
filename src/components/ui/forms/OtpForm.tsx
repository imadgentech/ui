'use client';

import React, { useRef, useState } from 'react';
import { Button } from './Button';
import { ErrorText } from './ErrorText';
import { Stack } from '../layout/Stack';
import { Text } from '../typography/Text';
import styles from './OtpForm.module.css';

export interface OtpFormProps {
  onSubmit: (otp: string) => Promise<void> | void;
  onResend: () => Promise<void> | void;
  loading?: boolean;
  error?: string | null;
  length?: number;
}

export function OtpForm({
  onSubmit,
  onResend,
  loading = false,
  error,
  length = 6,
}: OtpFormProps) {
  const [digits, setDigits] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const isFilled = digits.every(d => d !== '');

  const focusAt = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    if (digit && index < length - 1) {
      focusAt(index + 1);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (digits[index]) {
        const next = [...digits];
        next[index] = '';
        setDigits(next);
      } else if (index > 0) {
        focusAt(index - 1);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      focusAt(index - 1);
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      focusAt(index + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    if (!pasted) return;
    const next = Array(length).fill('');
    pasted.split('').forEach((char, i) => { next[i] = char; });
    setDigits(next);
    focusAt(Math.min(pasted.length, length - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFilled || loading) return;
    await onSubmit(digits.join(''));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="24">
        <div className={styles.boxes} onPaste={handlePaste}>
          {digits.map((digit, i) => (
            <input
              key={i}
              ref={el => { inputRefs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              className={`${styles.box}${digit ? ` ${styles.filled}` : ''}`}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              disabled={loading}
              aria-label={`Digit ${i + 1} of ${length}`}
            />
          ))}
        </div>

        {error && <ErrorText>{error}</ErrorText>}

        <Button
          type="submit"
          variant="brand"
          fullWidth
          loading={loading}
          disabled={!isFilled}
        >
          Verify
        </Button>

        <div className={styles.resendRow}>
          <Text size="sm" tone="muted" as="span">
            Didn&apos;t receive a code?{' '}
          </Text>
          <button
            type="button"
            className={styles.resendButton}
            onClick={onResend}
            disabled={loading}
          >
            Resend code
          </button>
        </div>
      </Stack>
    </form>
  );
}
