import * as React from 'react';
import React__default, { CSSProperties } from 'react';
import { ImageProps } from 'next/image';

/**
 * Class name merge utility
 *
 * Combines multiple class names, filtering out falsy values.
 * Useful for conditional class application in React components.
 *
 * @example
 * cn('base', isActive && 'active', className)
 * // => 'base active custom-class'
 */
declare function cn(...classes: (string | undefined | null | false)[]): string;

interface AspectRatioProps {
    /**
     * Aspect ratio (e.g., "16/9" or 1.777)
     * @default '1/1'
     */
    ratio?: string | number;
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content to maintain aspect ratio
     */
    children: React__default.ReactNode;
}
/**
 * AspectRatio component for maintaining consistent proportions for media or containers.
 */
declare function AspectRatio({ ratio, className, style, children, }: AspectRatioProps): React__default.JSX.Element;

interface ClusterProps {
    /**
     * Gap between items
     * @default '8'
     */
    gap?: '2' | '4' | '8' | '12' | '16' | '24';
    /**
     * Horizontal alignment
     * @default 'start'
     */
    justify?: 'start' | 'center' | 'end' | 'between';
    /**
     * Vertical alignment
     * @default 'center'
     */
    align?: 'start' | 'center' | 'end';
    /**
     * HTML element to render
     * @default 'div'
     */
    as?: keyof JSX.IntrinsicElements;
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Cluster component for inline wrapping layouts (badges, buttons, tags).
 * Uses CSS flexbox with wrap and gap.
 *
 * @example
 * <Cluster gap="12" justify="center">
 *   <button>Button 1</button>
 *   <button>Button 2</button>
 * </Cluster>
 */
declare function Cluster({ gap, justify, align, as: Component, className, style, children, }: ClusterProps): React__default.JSX.Element;

interface ContainerProps {
    /**
     * Maximum width preset
     * @default 'lg'
     */
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'layout';
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Container component for constraining content width with responsive padding.
 *
 * @example
 * <Container maxWidth="md">
 *   <Heading>Contained Content</Heading>
 * </Container>
 */
declare function Container({ maxWidth, className, style, children, }: ContainerProps): React__default.JSX.Element;

interface DividerProps {
    /** Orientation of the divider */
    orientation?: 'horizontal' | 'vertical';
    /** Scale/thickness multiplier */
    scale?: number;
    /** Custom CSS classes */
    className?: string;
    /** Custom inline styles */
    style?: CSSProperties;
    /** Opacity/fading effect */
    opacity?: number;
    /** Color of the divider */
    color?: string;
    /** Length of the divider */
    length?: string | number;
}
declare const Divider: ({ orientation, scale, className, style, opacity, color, length, }: DividerProps) => React.JSX.Element;

interface FlexProps {
    /**
     * Layout direction
     * @default 'row'
     */
    direction?: 'row' | 'column';
    /**
     * Flex wrap
     * @default 'nowrap'
     */
    wrap?: 'nowrap' | 'wrap';
    /**
     * Align items
     * @default 'stretch'
     */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    /**
     * Justify content
     * @default 'start'
     */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    /**
     * Gap between items
     * @default '0'
     */
    gap?: '0' | '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48' | '64';
    /**
     * HTML element to render
     * @default 'div'
     */
    as?: keyof JSX.IntrinsicElements;
    /**
     * Full width
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Children content
     */
    children?: React__default.ReactNode;
}
/**
 * Flex component for flexible layouts.
 */
declare function Flex({ direction, wrap, align, justify, gap, as: Component, fullWidth, className, style, children, }: FlexProps): React__default.JSX.Element;

type ResponsiveValue$1<T> = T | {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
};
interface GridProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * Number of columns (1-12)
     * @default 12
     */
    columns?: ResponsiveValue$1<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    /**
     * Gap between items
     * @default '16'
     */
    gap?: '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48' | '64';
    /**
     * Vertical alignment of items
     */
    align?: 'start' | 'center' | 'end' | 'stretch';
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Grid container with 12-column system and responsive behavior.
 *
 * @example
 * <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="24" align="center">
 *   <GridItem>Content</GridItem>
 * </Grid>
 */
declare function Grid({ columns, gap, align, className, children, ...props }: GridProps): React__default.JSX.Element;

type ResponsiveValue<T> = T | {
    base?: T;
    md?: T;
    lg?: T;
};
interface GridItemProps {
    /**
     * Column span (1-12)
     * @default 1
     */
    span?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    /**
     * Column start position (1-12)
     */
    start?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Grid item with responsive span and start position.
 *
 * @example
 * <GridItem span={{ base: 12, md: 6, lg: 4 }}>
 *   Content
 * </GridItem>
 */
declare function GridItem({ span, start, className, style, children, }: GridItemProps): React__default.JSX.Element;

interface SectionProps extends React__default.HTMLAttributes<HTMLElement> {
    /**
     * Vertical padding size
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * HTML element to render
     * @default 'section'
     */
    as?: React__default.ElementType;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Section component for consistent vertical spacing.
 *
 * @example
 * <Section size="lg" id="features">
 *   <Heading>Section Title</Heading>
 * </Section>
 */
declare function Section({ size, as: Component, className, children, ...props }: SectionProps): React__default.JSX.Element;

interface SpacerProps {
    /**
     * Spacing axis
     * @default 'vertical'
     */
    axis?: 'horizontal' | 'vertical';
    /**
     * Spacing size from tokens
     * @default '16'
     */
    size?: '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48' | '64';
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
}
/**
 * Spacer component for fixed spacing between elements.
 */
declare function Spacer({ axis, size, className, style, }: SpacerProps): React__default.JSX.Element;

interface StackProps {
    /**
     * Gap between children (maps to spacing tokens)
     * @default '16'
     */
    gap?: '0' | '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48' | '64';
    /**
     * Cross-axis alignment
     * @default 'stretch'
     */
    align?: 'start' | 'center' | 'end' | 'stretch';
    /**
     * HTML element to render
     * @default 'div'
     */
    as?: keyof JSX.IntrinsicElements;
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Stack component for vertical layouts with gap-based spacing.
 * Uses CSS flexbox gap property - no wrapper elements per child.
 *
 * @example
 * <Stack gap="24">
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 * </Stack>
 */
declare function Stack({ gap, align, as: Component, className, style, children, }: StackProps): React__default.JSX.Element;

interface SurfaceProps extends React__default.HTMLAttributes<HTMLElement> {
    /**
     * Padding size
     * @default 'md'
     */
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Elevation/shadow level
     * @default 'sm'
     */
    elevation?: 'none' | 'sm' | 'md' | 'lg';
    /**
     * Border radius
     * @default 'md'
     */
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * HTML element to render or React component
     * @default 'div'
     */
    as?: React__default.ElementType;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Content
     */
    children: React__default.ReactNode;
    /**
     * Allow any other props (e.g. href for Link)
     */
    [key: string]: any;
}
/**
 * Surface component for cards and elevated content areas.
 * Optimized for dark background (#050505).
 *
 * @example
 * <Surface padding="lg" elevation="md">
 *   <Heading size="lg">Card Title</Heading>
 *   <Text>Card content</Text>
 * </Surface>
 */
declare function Surface({ padding, elevation, radius, as: Component, className, children, ...props }: SurfaceProps): React__default.JSX.Element;

interface CodeProps {
    /**
     * Variant: inline or block
     * @default 'inline'
     */
    variant?: 'inline' | 'block';
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Code component for displaying code inline or in blocks.
 *
 * @example
 * <Code>const foo = 'bar';</Code>
 * <Code variant="block">{`function hello() {\n  return 'world';\n}`}</Code>
 */
declare function Code({ variant, className, style, children, }: CodeProps): React__default.JSX.Element;

interface HeadingProps {
    /**
     * HTML heading element to render
     * @default 'h2'
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * Visual size (independent of semantic level)
     * @default matches the 'as' prop level
     */
    size?: 'display' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm';
    /**
     * Text alignment
     * @default 'left'
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Font weight
     * @default 'semibold'
     */
    weight?: 'light' | 'medium' | 'semibold' | 'bold';
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Heading component for headings h1-h6 with configurable visual size.
 * Maintains semantic HTML hierarchy while allowing visual flexibility.
 *
 * @example
 * <Heading as="h1" size="display">Hero Heading</Heading>
 * <Heading as="h2" size="xl">Section Title</Heading>
 * <Heading as="h3" align="center">Centered Title</Heading>
 */
declare function Heading({ as: Component, size, weight, align, className, style, children, }: HeadingProps): React__default.JSX.Element;

interface KbdProps {
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content (keyboard key)
     */
    children: React__default.ReactNode;
}
/**
 * Kbd component for displaying keyboard shortcuts and keys.
 *
 * @example
 * <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
 * <Kbd>âŒ˜</Kbd><Kbd>K</Kbd>
 */
declare function Kbd({ className, style, children }: KbdProps): React__default.JSX.Element;

interface LinkProps {
    /**
     * Link destination
     */
    href: string;
    /**
     * Underline behavior
     * @default 'hover'
     */
    underline?: 'always' | 'hover' | 'never';
    /**
     * Link color tone
     * @default 'default'
     */
    tone?: 'default' | 'brand' | 'muted';
    /**
     * Whether this is an external link
     * Auto-detected if href starts with http/https
     */
    external?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Link component that wraps Next.js Link for internal navigation
 * and <a> for external links. Includes focus-visible styling.
 *
 * @example
 * <Link href="/about">About Us</Link>
 * <Link href="https://example.com" external>External Site</Link>
 * <Link href="/contact" tone="brand" underline="always">Contact</Link>
 */
declare function Link({ href, underline, tone, external: externalProp, className, style, children, }: LinkProps): React__default.JSX.Element;

interface TextProps {
    /**
     * HTML element to render
     * @default 'p'
     */
    as?: 'p' | 'span';
    /**
     * Text size
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     * Text tone/color
     * @default 'default'
     */
    tone?: 'default' | 'muted' | 'brand' | 'danger';
    /**
     * Font weight
     * @default 'normal'
     */
    weight?: 'normal' | 'medium' | 'semibold';
    /**
     * Text alignment
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Text component for body text and inline text elements.
 *
 * @example
 * <Text size="lg" tone="brand">This is brand text</Text>
 * <Text as="span" size="sm" tone="muted">Small muted text</Text>
 */
declare function Text({ as: Component, size, tone, weight, align, className, style, children, }: TextProps): React__default.JSX.Element;

interface CTAProps {
    /**
     * Section title
     */
    title: string;
    /**
     * Description text
     */
    description?: string;
    /**
     * Action elements
     */
    actions: React__default.ReactNode;
    /**
     * Variant
     * @default 'brand'
     */
    variant?: 'brand' | 'surface';
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
}
/**
 * CTA (Call to Action) component for conversion sections.
 */
declare function CTA({ title, description, actions, variant, className, style, }: CTAProps): React__default.JSX.Element;

interface Feature {
    icon?: React__default.ReactNode;
    title: string;
    description: string;
}
interface FeatureGridProps {
    /**
     * Feature items
     */
    features: Feature[];
    /**
     * Columns for desktop
     * @default 3
     */
    columns?: 1 | 2 | 3 | 4;
}
/**
 * FeatureGrid component for showcasing product benefits or features.
 */
declare function FeatureGrid({ features, columns, }: FeatureGridProps): React__default.JSX.Element;

interface FooterSocial {
    label: string;
    href: string;
    icon: React__default.ReactNode;
}
interface FooterProps {
    /**
     * Site identifier (logo/name)
     */
    brand: React__default.ReactNode;
    /**
     * Brand name text
     */
    brandName?: string;
    /**
     * Primary copyright text
     */
    copyright: string;
    /**
     * Secondary message (e.g. "Built in India")
     */
    message?: string;
    /**
     * Social links
     */
    socials?: FooterSocial[];
}
/**
 * Footer component refactored to match production "finebar" style.
 */
declare function Footer({ brand, brandName, copyright, message, socials, }: FooterProps): React__default.JSX.Element;

interface HeroProps {
    /**
     * Overline text/badge
     */
    badge?: React__default.ReactNode;
    /**
     * Main heading
     */
    title: React__default.ReactNode;
    /**
     * Font weight for the title
     */
    titleWeight?: HeadingProps['weight'];
    /**
     * Subtitle text
     */
    description: React__default.ReactNode;
    /**
     * Primary and secondary actions
     */
    actions?: React__default.ReactNode;
    /**
     * Visual element (image/video/canvas)
     */
    visual?: React__default.ReactNode;
    /**
     * Alignment
     * @default 'center'
     */
    align?: 'left' | 'center';
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
}
/**
 * Hero component for high-impact landing sections.
 */
declare function Hero({ badge, title, titleWeight, description, actions, visual, align, className, style, }: HeroProps): React__default.JSX.Element;

interface LogoCloudProps {
    /**
     * Section title
     */
    title?: string;
    /**
     * Array of logo elements or image props
     */
    logos: readonly {
        src: string;
        alt: string;
    }[];
}
/**
 * LogoCloud component for social proof and brand trust.
 */
declare function LogoCloud({ title, logos }: LogoCloudProps): React__default.JSX.Element;

interface PricingCardProps {
    /**
     * Plan name
     */
    name: string;
    /**
     * Price string
     */
    price: string;
    /**
     * Frequency
     * @default '/mo'
     */
    frequency?: string;
    /**
     * Description
     */
    description?: string;
    /**
     * List of features
     */
    features: string[];
    /**
     * Action button
     */
    action: React__default.ReactNode;
    /**
     * Highlight this plan
     * @default false
     */
    featured?: boolean;
}
/**
 * PricingCard component for subscription plans comparison.
 */
declare function PricingCard({ name, price, frequency, description, features, action, featured, }: PricingCardProps): React__default.JSX.Element;

interface TestimonialProps {
    /**
     * Quote text
     */
    quote: string;
    /**
     * Author name
     */
    author: string;
    /**
     * Author role/title
     */
    role?: string;
    /**
     * Author avatar source
     */
    avatarSrc?: string;
}
/**
 * Testimonial component for customer reviews and testimonials.
 */
declare function Testimonial({ quote, author, role, avatarSrc, }: TestimonialProps): React__default.JSX.Element;

interface ThemeImageProps extends Omit<ImageProps, 'src' | 'alt'> {
    /**
     * Source for light theme
     */
    lightSrc: string;
    /**
     * Source for dark theme
     */
    darkSrc: string;
    /**
     * Alternate text
     */
    alt: string;
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * ThemeImage component that switches between two images based on the current theme.
 * Uses CSS to ensure no flash of un-themed content and zero layout shift.
 */
declare function ThemeImage({ lightSrc, darkSrc, alt, className, ...props }: ThemeImageProps): React__default.JSX.Element;

export { AspectRatio, CTA, Cluster, Code, Container, Divider, FeatureGrid, Flex, Footer, type FooterProps, type FooterSocial, Grid, GridItem, Heading, type HeadingProps, Hero, type HeroProps, Kbd, Link, LogoCloud, PricingCard, Section, Spacer, Stack, Surface, Testimonial, Text, type TextProps, ThemeImage, cn };
