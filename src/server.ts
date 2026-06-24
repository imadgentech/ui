// Server-safe entry point — no "use client" directive.
// Import from "@imadgentech/ui/server" in React Server Components to avoid
// pulling client-only code (forms, overlays, chat, effects) into the server bundle.

// Utility
export { cn } from './lib/cn';

// Navigation (server-safe subset)
export { Breadcrumbs } from './components/ui/navigation/Breadcrumbs';
export type { BreadcrumbItem, BreadcrumbsProps } from './components/ui/navigation/Breadcrumbs';

// Layout
export { AspectRatio } from './components/ui/layout/AspectRatio';
export { Cluster } from './components/ui/layout/Cluster';
export { Container } from './components/ui/layout/Container';
export { Divider } from './components/ui/layout/Divider';
export { Flex } from './components/ui/layout/Flex';
export { Grid } from './components/ui/layout/Grid';
export { GridItem } from './components/ui/layout/GridItem';
export { Section } from './components/ui/layout/Section';
export { Spacer } from './components/ui/layout/Spacer';
export { Stack } from './components/ui/layout/Stack';
export { Surface } from './components/ui/layout/Surface';

// Typography
export { Code } from './components/ui/typography/Code';
export { Heading } from './components/ui/typography/Heading';
export type { HeadingProps } from './components/ui/typography/Heading';
export { Kbd } from './components/ui/typography/Kbd';
export { Link } from './components/ui/typography/Link';
export { Text } from './components/ui/typography/Text';
export type { TextProps } from './components/ui/typography/Text';

// Marketing
export { CTA } from './components/ui/marketing/CTA';
export { FeatureGrid } from './components/ui/marketing/FeatureGrid';
export { Footer } from './components/ui/marketing/Footer';
export type { FooterProps, FooterSocial } from './components/ui/marketing/Footer';
export { Hero } from './components/ui/marketing/Hero';
export type { HeroProps } from './components/ui/marketing/Hero';
export { LogoCloud } from './components/ui/marketing/LogoCloud';
export { PricingCard } from './components/ui/marketing/PricingCard';
export { Testimonial } from './components/ui/marketing/Testimonial';
export { ThemeImage } from './components/ui/marketing/ThemeImage';
