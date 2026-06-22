'use client';

import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { ErrorText } from './ErrorText';
import { FormField } from './FormField';
import { Stack } from '../layout/Stack';
import { Grid } from '../layout/Grid';
import { Text } from '../typography/Text';
import styles from './LoginForm.module.css';

export interface LoginFormProps {
  onLogin: (data: { email: string; password: string }) => Promise<void> | void;
  onSignup: (data: {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    password: string;
  }) => Promise<void> | void;
  onForgotPassword: (email: string) => void;
  loading?: boolean;
  error?: string | null;
  defaultMode?: 'login' | 'signup';
}

export function LoginForm({
  onLogin,
  onSignup,
  onForgotPassword,
  loading = false,
  error,
  defaultMode = 'login',
}: LoginFormProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const switchToSignup = () => {
    setMode('signup');
    setEmail('');
    setPassword('');
    setPasswordMismatch(false);
  };

  const switchToLogin = () => {
    setMode('login');
    setFirstName('');
    setLastName('');
    setCompanyName('');
    setSignupEmail('');
    setSignupPassword('');
    setConfirmPassword('');
    setPasswordMismatch(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin({ email, password });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    setPasswordMismatch(false);
    await onSignup({
      firstName,
      lastName,
      companyName,
      email: signupEmail,
      password: signupPassword,
    });
  };

  if (mode === 'login') {
    return (
      <form onSubmit={handleLogin} className={styles.form}>
        <Stack gap="24">
          <FormField id="lf-email" label="Email" required>
            <Input
              id="lf-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </FormField>

          <FormField id="lf-password" label="Password" required>
            <Input
              id="lf-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </FormField>

          <div className={styles.forgotRow}>
            <button
              type="button"
              className={styles.textLink}
              onClick={() => onForgotPassword(email)}
              disabled={loading}
            >
              Forgot password?
            </button>
          </div>

          {error && <ErrorText>{error}</ErrorText>}

          <Button type="submit" variant="brand" fullWidth loading={loading}>
            Sign In
          </Button>

          <div className={styles.footer}>
            <Text size="sm" tone="muted" as="span">
              Don&apos;t have an account?{' '}
            </Text>
            <button
              type="button"
              className={styles.textLink}
              onClick={switchToSignup}
              disabled={loading}
            >
              Sign up
            </button>
          </div>
        </Stack>
      </form>
    );
  }

  return (
    <form onSubmit={handleSignup} className={styles.form}>
      <Stack gap="24">
        <Grid columns={{ base: 1, md: 2 }} gap="16">
          <FormField id="lf-firstName" label="First Name" required>
            <Input
              id="lf-firstName"
              type="text"
              placeholder="Jane"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
              disabled={loading}
            />
          </FormField>

          <FormField id="lf-lastName" label="Last Name" required>
            <Input
              id="lf-lastName"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
              disabled={loading}
            />
          </FormField>
        </Grid>

        <FormField id="lf-company" label="Company Name" required>
          <Input
            id="lf-company"
            type="text"
            placeholder="Acme Inc."
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
            required
            disabled={loading}
          />
        </FormField>

        <FormField id="lf-signupEmail" label="Email" required>
          <Input
            id="lf-signupEmail"
            type="email"
            placeholder="you@example.com"
            value={signupEmail}
            onChange={e => setSignupEmail(e.target.value)}
            required
            disabled={loading}
          />
        </FormField>

        <FormField id="lf-signupPassword" label="Password" required>
          <Input
            id="lf-signupPassword"
            type="password"
            placeholder="••••••••"
            value={signupPassword}
            onChange={e => {
              setSignupPassword(e.target.value);
              if (passwordMismatch) setPasswordMismatch(false);
            }}
            required
            disabled={loading}
          />
        </FormField>

        <FormField
          id="lf-confirmPassword"
          label="Confirm Password"
          required
          error={passwordMismatch ? 'Passwords do not match' : undefined}
        >
          <Input
            id="lf-confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={e => {
              setConfirmPassword(e.target.value);
              if (passwordMismatch) setPasswordMismatch(false);
            }}
            invalid={passwordMismatch}
            required
            disabled={loading}
          />
        </FormField>

        {error && <ErrorText>{error}</ErrorText>}

        <Button
          type="submit"
          variant="brand"
          fullWidth
          loading={loading}
          disabled={passwordMismatch}
        >
          Create Account
        </Button>

        <div className={styles.footer}>
          <Text size="sm" tone="muted" as="span">
            Already have an account?{' '}
          </Text>
          <button
            type="button"
            className={styles.textLink}
            onClick={switchToLogin}
            disabled={loading}
          >
            Sign in
          </button>
        </div>
      </Stack>
    </form>
  );
}
