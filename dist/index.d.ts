export { AspectRatio, CTA, Cluster, Code, Container, Divider, FeatureGrid, Flex, Footer, Grid, GridItem, Heading, Hero, Kbd, Link, LogoCloud, PricingCard, Section, Spacer, Stack, Surface, Testimonial, Text, ThemeImage, cn } from './server.js';
import * as React from 'react';
import React__default, { FormEvent } from 'react';
import { LinkProps } from 'next/link';
import { UIMessage } from 'ai';
import { UIMessage as UIMessage$1 } from '@ai-sdk/react';
import 'next/image';

declare function Providers({ children }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;

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

interface NavLinkProps extends LinkProps {
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

interface Message extends UIMessage {
    timestamp?: string;
}
interface ConversationMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}
interface ChatPageProps {
    initialMessages?: Message[];
    className?: string;
    onSendMessage?: (content: string) => void;
    onClose?: () => void;
    isFullPage?: boolean;
    variant?: 'full' | 'compact' | 'minimal';
    placeholder?: string;
    /**
     * Called once on mount with the generated session ID.
     * Use this to persist the session in your backend.
     * If omitted, no session is created.
     */
    onSessionCreate?: (sessionId: string, metadata: {
        started_at: string;
    }) => Promise<void>;
    /**
     * Called when the user ends the chat session.
     * Use this to persist the conversation in your backend.
     * If omitted, messages are not saved.
     * Note: for beforeunload persistence, add your own window event listener
     * using navigator.sendBeacon with your own endpoint.
     */
    onSaveConversation?: (data: {
        session_id: string;
        messages: ConversationMessage[];
    }) => Promise<void>;
}
declare function ChatPage({ initialMessages, className, onSendMessage, onClose, isFullPage, variant, placeholder, onSessionCreate, onSaveConversation, }: ChatPageProps): React__default.JSX.Element;

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

declare function EmbersBGE(): React.JSX.Element;

declare function ImBgAurora(): React.JSX.Element;

declare function LightTheme(): React.JSX.Element;

declare function NetBGE(): React.JSX.Element;

declare function SwarmsBGE(): React.JSX.Element;

/**
 * Animated waveform background effect for hero sections.
 * Creates subtle pulsing orbs that animate continuously.
 */
declare function WaveformBackground(): React__default.JSX.Element;

export { Accordion, Avatar, Badge, Breadcrumbs, Button, type ButtonProps, type Message as ChatMessage, ChatPage, type ChatPageProps, ChatProvider, Checkbox, type ConversationMessage, CursorGlow, Dialog, EmbersBGE, EmptyState, ErrorText, Form, FormField, HelperText, IconButton, ImBgAurora, Input, Label, LightTheme, MobileMenu, MobileMenuContent, NavLink, Navbar, NetBGE, Pagination, Popover, Providers, RadioGroup, Select, Skeleton, StatCard, SwarmsBGE, Switch, Table, Tabs, Textarea, ToastProvider, Tooltip, WaveformBackground, useChatContext, useToast };
