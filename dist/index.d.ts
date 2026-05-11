import * as React$1 from 'react';
import React__default, { FormEvent, CSSProperties } from 'react';
import { LinkProps as LinkProps$1 } from 'next/link';
import { ImageProps } from 'next/image';
import { UIMessage } from 'ai';
import { UIMessage as UIMessage$1 } from '@ai-sdk/react';

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

declare function Providers({ children }: {
    children: React.ReactNode;
}): React$1.JSX.Element;

interface ButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button variant
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'brand' | 'subtle';
    /**
     * Button size
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Loading state
     * @default false
     */
    loading?: boolean;
    /**
     * Icon to display on the left
     */
    leftIcon?: React__default.ReactNode;
    /**
     * Icon to display on the right
     */
    rightIcon?: React__default.ReactNode;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Full width
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Pill / fully rounded shape
     * @default false
     */
    rounded?: boolean;
    /**
     * Content
     */
    children: React__default.ReactNode;
    /**
     * HTML element to render or React component
     * @default 'button'
     */
    as?: React__default.ElementType;
    /**
     * Allow any other props (e.g. href for Link)
     */
    [key: string]: any;
}
/**
 * Button component with variants, sizes, and loading state.
 * Supports polymorphic rendering via the 'as' prop.
 *
 * @example
 * <Button variant="primary" size="lg" leftIcon={<Icon />}>
 *   Click me
 * </Button>
 *
 * <Button as="a" href="/target" variant="brand">
 *   Link Button
 * </Button>
 */
declare const Button: React__default.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React__default.RefAttributes<HTMLElement>>;

interface CheckboxProps {
    /**
     * Checkbox ID
     */
    id: string;
    /**
     * Label content
     */
    label?: string;
    /**
     * Checked state (controlled)
     */
    checked?: boolean;
    /**
     * Default checked state
     */
    defaultChecked?: boolean;
    /**
     * Callback when state changes
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Disabled state
     */
    disabled?: boolean;
}
/**
 * Checkbox component using Radix Primitives for accessibility.
 */
declare function Checkbox({ id, label, checked, defaultChecked, onCheckedChange, className, disabled, }: CheckboxProps): React__default.JSX.Element;

interface ErrorTextProps {
    /**
     * Additional CSS classes
     */
    className?: string;
    style?: React__default.CSSProperties;
    /**
     * Error message content
     */
    children: React__default.ReactNode;
}
/**
 * ErrorText component for validation feedback.
 */
declare function ErrorText({ className, style, children }: ErrorTextProps): React__default.JSX.Element;

interface FormField$1 {
    /**
     * Field type
     */
    type: 'text' | 'email' | 'password' | 'number' | 'textarea';
    /**
     * Field name (for form submission)
     */
    name: string;
    /**
     * Placeholder text
     */
    placeholder: string;
    /**
     * Whether field is required
     * @default false
     */
    required?: boolean;
    /**
     * Number of rows (textarea only)
     * @default 4
     */
    rows?: number;
}
interface FormProps extends Omit<React__default.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    /**
     * Form fields configuration
     */
    fields: FormField$1[];
    /**
     * Submit handler
     */
    onSubmit: (e: FormEvent<HTMLFormElement>, data: Record<string, FormDataEntryValue>) => void;
    /**
     * Submit button label
     * @default 'Submit'
     */
    submitLabel?: string;
    /**
     * Submit button variant
     * @default 'primary'
     */
    submitVariant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
    /**
     * Show submit button
     * @default true
     */
    showSubmit?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Form content
     */
    children?: React__default.ReactNode;
}
/**
 * Reusable Form component with automatic field rendering.
 *
 * @example
 * <Form
 *   fields={[
 *     { type: 'textarea', name: 'message', placeholder: 'Your message', required: true, rows: 4 },
 *     { type: 'text', name: 'name', placeholder: 'Your name', required: true },
 *     { type: 'email', name: 'email', placeholder: 'Your email', required: true }
 *   ]}
 *   onSubmit={(e, data) => console.log(data)}
 *   submitLabel="Send"
 * />
 */
declare const Form: React__default.ForwardRefExoticComponent<FormProps & React__default.RefAttributes<HTMLFormElement>>;

interface FormFieldProps {
    /**
     * Control ID (links label to control)
     */
    id: string;
    /**
     * Label content
     */
    label?: string;
    /**
     * Hint content
     */
    hint?: string;
    /**
     * Error message content
     */
    error?: string;
    /**
     * Required indicator
     */
    required?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * The form control (Input, Select, etc.)
     */
    children: React__default.ReactNode;
}
/**
 * FormField wrapper that composes Label, Control, and feedback text.
 */
declare function FormField({ id, label, hint, error, required, className, children, }: FormFieldProps): React__default.JSX.Element;

interface HelperTextProps {
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Helper text content
     */
    children: React__default.ReactNode;
}
/**
 * HelperText component for provided hints or information.
 */
declare function HelperText({ className, children }: HelperTextProps): React__default.JSX.Element;

interface IconButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Accessible label for screen readers
     */
    'aria-label': string;
    /**
     * Button variant
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'ghost';
    /**
     * Button size
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Shape of the button
     * @default 'square'
     */
    shape?: 'square' | 'circle';
    /**
     * Loading state
     */
    loading?: boolean;
    /**
     * Content (usually an icon)
     */
    children: React__default.ReactNode;
}
/**
 * IconButton component for icon-only actions.
 */
declare const IconButton: React__default.ForwardRefExoticComponent<IconButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Input size
     * @default 'md'
     */
    inputSize?: 'sm' | 'md' | 'lg';
    /**
     * Invalid state
     * @default false
     */
    invalid?: boolean;
    /**
     * Element to display at the start of the input
     */
    startAdornment?: React__default.ReactNode;
    /**
     * Element to display at the end of the input
     */
    endAdornment?: React__default.ReactNode;
}
/**
 * Input component with sizes, states, and adornments.
 *
 * @example
 * <Input inputSize="md" placeholder="Enter text" />
 * <Input startAdornment={<SearchIcon />} placeholder="Search..." />
 */
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

interface LabelProps extends React__default.LabelHTMLAttributes<HTMLLabelElement> {
    /**
     * Required indicator
     */
    required?: boolean;
}
/**
 * Label component for form field identifiers.
 */
declare function Label({ required, className, children, ...props }: LabelProps): React__default.JSX.Element;

interface RadioGroupProps {
    /**
     * Value of the selected radio (controlled)
     */
    value?: string;
    /**
     * Default selected value
     */
    defaultValue?: string;
    /**
     * Callback when value changes
     */
    onValueChange?: (value: string) => void;
    /**
     * Radio options
     */
    items: Array<{
        value: string;
        label: string;
        id: string;
        disabled?: boolean;
    }>;
    /**
     * Orientation
     * @default 'vertical'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * RadioGroup component using Radix Primitives for accessibility.
 */
declare function RadioGroup({ value, defaultValue, onValueChange, items, orientation, className, }: RadioGroupProps): React__default.JSX.Element;

interface SelectProps extends React__default.SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Select size
     * @default 'md'
     */
    selectSize?: 'sm' | 'md' | 'lg';
    /**
     * Invalid state
     */
    invalid?: boolean;
    /**
     * Select options
     */
    options?: Array<{
        label: string;
        value: string | number;
    }>;
}
/**
 * Native Select component with design system styling.
 */
declare const Select: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLSelectElement>>;

interface SwitchProps {
    /**
     * Switch ID
     */
    id?: string;
    /**
     * Accessibility label
     */
    'aria-label'?: string;
    /**
     * Checked state (controlled)
     */
    checked?: boolean;
    /**
     * Default checked state
     */
    defaultChecked?: boolean;
    /**
     * Callback when state changes
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Disabled state
     */
    disabled?: boolean;
}
/**
 * Switch component for binary toggles.
 */
declare function Switch({ id, 'aria-label': ariaLabel, checked, defaultChecked, onCheckedChange, className, disabled, }: SwitchProps): React__default.JSX.Element;

interface TextareaProps extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Textarea size
     * @default 'md'
     */
    textareaSize?: 'sm' | 'md' | 'lg';
    /**
     * Invalid state
     */
    invalid?: boolean;
    /**
     * Resize behavior
     * @default 'vertical'
     */
    resize?: 'none' | 'vertical' | 'both';
}
/**
 * Textarea component for multi-line text input.
 */
declare const Textarea: React__default.ForwardRefExoticComponent<TextareaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

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
    /**
     * Content to maintain aspect ratio
     */
    children: React__default.ReactNode;
}
/**
 * AspectRatio component for maintaining consistent proportions for media or containers.
 */
declare function AspectRatio({ ratio, className, children, }: AspectRatioProps): React__default.JSX.Element;

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
declare function Cluster({ gap, justify, align, as: Component, className, children, }: ClusterProps): React__default.JSX.Element;

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
declare function Container({ maxWidth, className, children, }: ContainerProps): React__default.JSX.Element;

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
declare const Divider: ({ orientation, scale, className, style, opacity, color, length, }: DividerProps) => React$1.JSX.Element;

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
declare function GridItem({ span, start, className, children, }: GridItemProps): React__default.JSX.Element;

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
}
/**
 * Spacer component for fixed spacing between elements.
 */
declare function Spacer({ axis, size, className, }: SpacerProps): React__default.JSX.Element;

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

interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbsProps {
    /**
     * Breadcrumb items
     */
    items: BreadcrumbItem[];
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Separator element
     * @default '/'
     */
    separator?: React__default.ReactNode;
}
/**
 * Breadcrumbs component for secondary navigation and user path orientation.
 */
declare function Breadcrumbs({ items, className, separator, }: BreadcrumbsProps): React__default.JSX.Element;

interface MobileMenuProps {
    /**
     * Trigger element (usually a hamburger button)
     */
    trigger: React__default.ReactNode;
    /**
     * Menu content
     */
    children: React__default.ReactNode;
    /**
     * Menu title for accessibility
     */
    title?: string;
}
/**
 * MobileMenu component that slides in from the right.
 * Uses Radix Dialog for focus management and accessibility.
 */
declare function MobileMenu({ trigger, children, title, }: MobileMenuProps): React__default.JSX.Element;

interface MobileMenuContentProps {
    links: Array<{
        label: string;
        href: string;
    }>;
    actions?: React__default.ReactNode;
}
declare function MobileMenuContent({ links, actions }: MobileMenuContentProps): React__default.JSX.Element;

interface NavbarProps {
    brand: React__default.ReactNode;
    links: Array<{
        label: string;
        href: string;
    }>;
    actions?: React__default.ReactNode;
    className?: string;
    sticky?: boolean;
}
declare function Navbar({ brand, links, actions, className, sticky, }: NavbarProps): React__default.JSX.Element;

interface NavLinkProps extends LinkProps$1 {
    /**
     * Link label
     */
    children: React__default.ReactNode;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Active state override
     */
    isActive?: boolean;
}
/**
 * NavLink component that automatically sets active state based on current pathname.
 */
declare function NavLink({ href, children, className, isActive: isActiveProp, ...props }: NavLinkProps): React__default.JSX.Element;

interface PaginationProps {
    /**
     * Current active page
     */
    currentPage: number;
    /**
     * Total number of pages
     */
    totalPages: number;
    /**
     * Callback when page changes
     */
    onPageChange: (page: number) => void;
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * Pagination component for navigating through paged data.
 */
declare function Pagination({ currentPage, totalPages, onPageChange, className, }: PaginationProps): React__default.JSX.Element;

interface TabsProps {
    /**
     * Default active tab value
     */
    defaultValue?: string;
    /**
     * Controlled active tab value
     */
    value?: string;
    /**
     * Callback when value changes
     */
    onValueChange?: (value: string) => void;
    /**
     * Tab items
     */
    items: Array<{
        value: string;
        label: string;
        content?: React__default.ReactNode;
    }>;
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * Tabs component using Radix primitives for keyboard navigation.
 *
 * @example
 * <Tabs
 *   defaultValue="tab1"
 *   items={[
 *     { value: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
 *     { value: 'tab2', label: 'Tab 2', content: <div>Content 2</div> }
 *   ]}
 * />
 */
declare function Tabs({ defaultValue, value, onValueChange, items, className, }: TabsProps): React__default.JSX.Element;

interface AccordionItem {
    value: string;
    title: string;
    content: React__default.ReactNode;
    disabled?: boolean;
}
interface AccordionProps {
    /**
     * Accordion items
     */
    items: readonly AccordionItem[];
    /**
     * Type of interaction
     * @default 'single'
     */
    type?: 'single' | 'multiple';
    /**
     * Allow closing all items in single mode
     * @default true
     */
    collapsible?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * Accordion component for organized collapsible content.
 */
declare function Accordion({ items, type, collapsible, className, }: AccordionProps): React__default.JSX.Element;

interface AvatarProps {
    /**
     * Image source URL
     */
    src?: string;
    /**
     * Accessibility alternative text
     */
    alt?: string;
    /**
     * Initials fallback
     */
    fallback: string;
    /**
     * Avatar size
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Shape
     * @default 'circle'
     */
    shape?: 'circle' | 'square';
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * Avatar component for user profiles and identifiers.
 */
declare function Avatar({ src, alt, fallback, size, shape, className, }: AvatarProps): React__default.JSX.Element;

interface BadgeProps {
    /**
     * Badge variant
     * @default 'neutral'
     */
    variant?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
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
 * Badge component for status indicators and labels.
 *
 * @example
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Pending</Badge>
 */
declare function Badge({ variant, className, children, }: BadgeProps): React__default.JSX.Element;

interface EmptyStateProps {
    /**
     * Icon or image element
     */
    icon?: React__default.ReactNode;
    /**
     * Main title
     */
    title: string;
    /**
     * Description text
     */
    description?: string;
    /**
     * Action element (button/link)
     */
    action?: React__default.ReactNode;
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * EmptyState component for cases with no data or results.
 */
declare function EmptyState({ icon, title, description, action, className, }: EmptyStateProps): React__default.JSX.Element;

interface SkeletonProps {
    /**
     * Responsive width
     */
    width?: string | number;
    /**
     * Responsive height
     */
    height?: string | number;
    /**
     * Rounded or circle
     * @default 'md'
     */
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Shimmer animation
     * @default true
     */
    shimmer?: boolean;
}
/**
 * Skeleton component for loading state placeholders.
 */
declare function Skeleton({ width, height, radius, shimmer, className, }: SkeletonProps): React__default.JSX.Element;

interface StatCardProps {
    /**
     * Label for the stat
     */
    label: string;
    /**
     * Main value to display
     */
    value: string | React__default.ReactNode;
    /**
     * Additional note or context
     */
    note?: string;
    /**
     * Color variant for status indication
     * @default 'neutral'
     */
    variant?: 'neutral' | 'success' | 'warning' | 'danger';
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * StatCard component for displaying key metrics and statistics.
 *
 * @example
 * <StatCard
 *   label="Answered by AI"
 *   value="80-90%"
 *   note="of routine calls"
 *   variant="success"
 * />
 */
declare function StatCard({ label, value, note, variant, className, }: StatCardProps): React__default.JSX.Element;

interface TableProps {
    /**
     * Column headers
     */
    headers: readonly string[];
    rows: readonly (readonly React__default.ReactNode[])[];
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Zebra striping
     * @default false
     */
    striped?: boolean;
}
/**
 * Table component for displaying structured tabular data.
 */
declare function Table({ headers, rows, className, striped, }: TableProps): React__default.JSX.Element;

interface DialogProps {
    /**
     * Open state (controlled)
     */
    open?: boolean;
    /**
     * Callback when open state changes
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Trigger element (optional)
     */
    trigger?: React__default.ReactNode;
    /**
     * Dialog title
     */
    title: string;
    /**
     * Dialog description
     */
    description?: string;
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Dialog component using Radix primitives.
 * Includes overlay, focus trap, and ESC to close.
 *
 * @example
 * <Dialog title="Confirm Action" description="Are you sure?">
 *   <Button>Confirm</Button>
 * </Dialog>
 */
declare function Dialog({ open, onOpenChange, trigger, title, description, children, }: DialogProps): React__default.JSX.Element;

interface PopoverProps {
    /**
     * Trigger element
     */
    trigger: React__default.ReactNode;
    /**
     * Content to display in the popover
     */
    children: React__default.ReactNode;
    /**
     * Open state (controlled)
     */
    open?: boolean;
    /**
     * Callback when open state changes
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Additional CSS classes for the content
     */
    className?: string;
}
/**
 * Popover component for floating content anchored to a trigger.
 */
declare function Popover({ trigger, children, open, onOpenChange, className, }: PopoverProps): React__default.JSX.Element;

type ToastType = 'success' | 'error' | 'info' | 'warning';
interface ToastContextType {
    addToast: (message: string, type?: ToastType) => void;
    removeToast: (id: string) => void;
}
/**
 * Hook to use the toast system.
 */
declare const useToast: () => ToastContextType;
/**
 * ToastProvider component to manage and display toast messages.
 */
declare function ToastProvider({ children }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;

interface TooltipProps {
    /**
     * Trigger element
     */
    children: React__default.ReactNode;
    /**
     * Content to display in the tooltip
     */
    content: React__default.ReactNode;
    /**
     * Side to display the tooltip
     * @default 'top'
     */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * Tooltip component for informative hover text.
 */
declare function Tooltip({ children, content, side, className, }: TooltipProps): React__default.JSX.Element;

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
declare function Code({ variant, className, children, }: CodeProps): React__default.JSX.Element;

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
declare function Kbd({ className, children }: KbdProps): React__default.JSX.Element;

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
declare function Link({ href, underline, tone, external: externalProp, className, children, }: LinkProps): React__default.JSX.Element;

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
}
/**
 * CTA (Call to Action) component for conversion sections.
 */
declare function CTA({ title, description, actions, variant, className, }: CTAProps): React__default.JSX.Element;

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
}
/**
 * Hero component for high-impact landing sections.
 */
declare function Hero({ badge, title, titleWeight, description, actions, visual, align, className, }: HeroProps): React__default.JSX.Element;

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

interface Message extends UIMessage {
    timestamp?: string;
}
interface ChatPageProps {
    initialMessages?: Message[];
    className?: string;
    onSendMessage?: (content: string) => void;
    onClose?: () => void;
    isFullPage?: boolean;
    variant?: 'full' | 'compact' | 'minimal';
    placeholder?: string;
}
/**
 * ChatPage component with Vercel AI SDK v6 and Supabase integration.
 * Supports multiple variants for embedding across the application.
 */
declare function ChatPage({ initialMessages, className, onSendMessage, onClose, isFullPage, variant, placeholder, }: ChatPageProps): React__default.JSX.Element;

interface ChatContextType {
    messages: UIMessage$1[];
    input: string;
    handleInputChange: (e: React__default.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e?: React__default.FormEvent) => void;
    append: (message: {
        role: 'user' | 'assistant' | 'system';
        content: string;
    }) => Promise<void>;
    status: string;
    isLoading: boolean;
    setMessages: (messages: UIMessage$1[]) => void;
    setInput: (input: string) => void;
    isChatActive: boolean;
    setIsChatActive: (active: boolean) => void;
    isDisabled: boolean;
    failureCount: number;
    reportFailure: () => void;
    resetChat: () => void;
}
declare function ChatProvider({ children }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;
declare function useChatContext(): ChatContextType;

/**
 * Attach once near the root (e.g. in layout or top-level page)
 * so CSS variables --mx, --my, --mxpx, --mypx are kept updated.
 */
declare function CursorGlow(): null;

declare function EmbersBGE(): React$1.JSX.Element;

declare function ImBgAurora(): React$1.JSX.Element;

declare function LightTheme(): React$1.JSX.Element;

declare function NetBGE(): React$1.JSX.Element;

declare function SwarmsBGE(): React$1.JSX.Element;

/**
 * Animated waveform background effect for hero sections.
 * Creates subtle pulsing orbs that animate continuously.
 */
declare function WaveformBackground(): React__default.JSX.Element;

export { Accordion, AspectRatio, Avatar, Badge, Breadcrumbs, Button, type ButtonProps, CTA, ChatPage, ChatProvider, Checkbox, Cluster, Code, Container, CursorGlow, Dialog, Divider, EmbersBGE, EmptyState, ErrorText, FeatureGrid, Flex, Footer, Form, FormField, Grid, GridItem, Heading, HelperText, Hero, IconButton, ImBgAurora, Input, Kbd, Label, LightTheme, Link, LogoCloud, MobileMenu, MobileMenuContent, NavLink, Navbar, NetBGE, Pagination, Popover, PricingCard, Providers, RadioGroup, Section, Select, Skeleton, Spacer, Stack, StatCard, Surface, SwarmsBGE, Switch, Table, Tabs, Testimonial, Text, Textarea, ThemeImage, ToastProvider, Tooltip, WaveformBackground, cn, useChatContext, useToast };
