/**
 * Smoke tests — every exported component must render without throwing.
 * These tests only verify that components mount cleanly given their minimum
 * required props. They do not test behaviour or visual output.
 */
import React from 'react';
import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';

// ─── Utility ──────────────────────────────────────────────────────────────────
import { cn } from '../lib/cn';

// ─── Theme provider ────────────────────────────────────────────────────────────
import { Providers } from '../components/ui/Providers';

// ─── Forms ────────────────────────────────────────────────────────────────────
import { Button } from '../components/ui/forms/Button';
import { Checkbox } from '../components/ui/forms/Checkbox';
import { ErrorText } from '../components/ui/forms/ErrorText';
import { Form } from '../components/ui/forms/Form';
import { FormField } from '../components/ui/forms/FormField';
import { HelperText } from '../components/ui/forms/HelperText';
import { IconButton } from '../components/ui/forms/IconButton';
import { Input } from '../components/ui/forms/Input';
import { Label } from '../components/ui/forms/Label';
import { RadioGroup } from '../components/ui/forms/RadioGroup';
import { Select } from '../components/ui/forms/Select';
import { Switch } from '../components/ui/forms/Switch';
import { Textarea } from '../components/ui/forms/Textarea';

// ─── Layout ───────────────────────────────────────────────────────────────────
import { AspectRatio } from '../components/ui/layout/AspectRatio';
import { Cluster } from '../components/ui/layout/Cluster';
import { Container } from '../components/ui/layout/Container';
import { Divider } from '../components/ui/layout/Divider';
import { Flex } from '../components/ui/layout/Flex';
import { Grid } from '../components/ui/layout/Grid';
import { GridItem } from '../components/ui/layout/GridItem';
import { Section } from '../components/ui/layout/Section';
import { Spacer } from '../components/ui/layout/Spacer';
import { Stack } from '../components/ui/layout/Stack';
import { Surface } from '../components/ui/layout/Surface';

// ─── Navigation ───────────────────────────────────────────────────────────────
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Breadcrumbs } from '../components/ui/navigation/Breadcrumbs';
import { MobileMenu } from '../components/ui/navigation/MobileMenu';
import { MobileMenuContent } from '../components/ui/navigation/MobileMenuContent';
import { Navbar } from '../components/ui/navigation/Navbar';
import { NavLink } from '../components/ui/navigation/NavLink';
import { Pagination } from '../components/ui/navigation/Pagination';
import { Tabs } from '../components/ui/navigation/Tabs';

// ─── Data display ─────────────────────────────────────────────────────────────
import { Accordion } from '../components/ui/data/Accordion';
import { Avatar } from '../components/ui/data/Avatar';
import { Badge } from '../components/ui/data/Badge';
import { EmptyState } from '../components/ui/data/EmptyState';
import { Skeleton } from '../components/ui/data/Skeleton';
import { StatCard } from '../components/ui/data/StatCard';
import { Table } from '../components/ui/data/Table';

// ─── Overlays ─────────────────────────────────────────────────────────────────
import { Dialog } from '../components/ui/overlays/Dialog';
import { Popover } from '../components/ui/overlays/Popover';
import { ToastProvider } from '../components/ui/overlays/Toast';
import { Tooltip } from '../components/ui/overlays/Tooltip';

// ─── Typography ───────────────────────────────────────────────────────────────
import { Code } from '../components/ui/typography/Code';
import { Heading } from '../components/ui/typography/Heading';
import { Kbd } from '../components/ui/typography/Kbd';
import { Link } from '../components/ui/typography/Link';
import { Text } from '../components/ui/typography/Text';

// ─── Marketing ────────────────────────────────────────────────────────────────
import { CTA } from '../components/ui/marketing/CTA';
import { FeatureGrid } from '../components/ui/marketing/FeatureGrid';
import { Footer } from '../components/ui/marketing/Footer';
import { Hero } from '../components/ui/marketing/Hero';
import { LogoCloud } from '../components/ui/marketing/LogoCloud';
import { PricingCard } from '../components/ui/marketing/PricingCard';
import { Testimonial } from '../components/ui/marketing/Testimonial';
import { ThemeImage } from '../components/ui/marketing/ThemeImage';

// ─── Chatbox ──────────────────────────────────────────────────────────────────
import { ChatPage } from '../components/ui/chatbox/ChatPage';
import { ChatProvider } from '../components/ui/chatbox/ChatContext';

// ─── Effects ──────────────────────────────────────────────────────────────────
import { CursorGlow } from '../components/effects/CursorGlow';
import EmbersBGE from '../components/effects/EmbersBGE';
import { ImBgAurora } from '../components/effects/ImBgAurora';
import LightTheme from '../components/effects/LightTheme';
import NetBGE from '../components/effects/NetBGE';
import SwarmsBGE from '../components/effects/SwarmsBGE';
import WaveformBackground from '../components/effects/WaveformBackground';

// ─────────────────────────────────────────────────────────────────────────────

describe('Utility', () => {
  it('cn merges class names', () => {
    const result = cn('a', false && 'b', 'c');
    expect(result).toBe('a c');
  });
});

describe('Theme provider', () => {
  it('Providers renders children', () => {
    render(<Providers><span>ok</span></Providers>);
  });
});

describe('Forms', () => {
  it('Button renders', () => { render(<Button>Click</Button>); });
  it('Button loading', () => { render(<Button loading>Loading</Button>); });

  it('Checkbox renders', () => { render(<Checkbox id="agree" label="I agree" />); });

  it('ErrorText renders', () => { render(<ErrorText>Error message</ErrorText>); });

  it('Form renders', () => {
    render(
      <Form
        fields={[{ type: 'text', name: 'name', placeholder: 'Name' }]}
        onSubmit={vi.fn()}
      />
    );
  });

  it('FormField renders', () => {
    render(
      <FormField id="email" label="Email" hint="We never share it.">
        <Input id="email" type="email" />
      </FormField>
    );
  });

  it('HelperText renders', () => { render(<HelperText>Hint</HelperText>); });

  it('IconButton renders', () => {
    render(<IconButton aria-label="Close"><span>×</span></IconButton>);
  });

  it('Input renders', () => { render(<Input placeholder="Type here" />); });

  it('Label renders', () => { render(<Label>Email</Label>); });

  it('RadioGroup renders', () => {
    render(
      <RadioGroup
        items={[
          { value: 'a', label: 'Option A', id: 'opt-a' },
          { value: 'b', label: 'Option B', id: 'opt-b' },
        ]}
      />
    );
  });

  it('Select renders with options', () => {
    render(
      <Select options={[{ label: 'One', value: '1' }, { label: 'Two', value: '2' }]} />
    );
  });

  it('Switch renders', () => { render(<Switch />); });

  it('Textarea renders', () => { render(<Textarea placeholder="Write here" />); });
});

describe('Layout', () => {
  it('AspectRatio renders', () => {
    render(<AspectRatio ratio={16 / 9}><div /></AspectRatio>);
  });
  it('Cluster renders', () => { render(<Cluster><span>a</span><span>b</span></Cluster>); });
  it('Container renders', () => { render(<Container><p>content</p></Container>); });
  it('Divider renders', () => { render(<Divider />); });
  it('Flex renders', () => { render(<Flex><span>child</span></Flex>); });
  it('Grid renders', () => {
    render(<Grid columns={{ base: 1, md: 2 }}><GridItem><p>item</p></GridItem></Grid>);
  });
  it('GridItem renders', () => { render(<GridItem><p>cell</p></GridItem>); });
  it('Section renders', () => { render(<Section><p>section</p></Section>); });
  it('Spacer renders', () => { render(<Spacer size="24" />); });
  it('Stack renders', () => { render(<Stack><p>one</p><p>two</p></Stack>); });
  it('Surface renders', () => { render(<Surface><p>card</p></Surface>); });
});

describe('Navigation', () => {
  it('Breadcrumbs renders', () => {
    render(
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Docs' }]} />
    );
  });

  it('MobileMenu renders', () => {
    render(
      <MobileMenu trigger={<button>Menu</button>}>
        <p>nav items</p>
      </MobileMenu>
    );
  });

  it('MobileMenuContent renders', () => {
    // MobileMenuContent uses DialogPrimitive.Close internally — needs a Root context
    render(
      <DialogPrimitive.Root>
        <MobileMenuContent links={[{ label: 'Home', href: '/' }]} />
      </DialogPrimitive.Root>
    );
  });

  it('Navbar renders', () => {
    render(
      <Navbar
        brand={<span>Logo</span>}
        links={[{ label: 'About', href: '/about' }]}
      />
    );
  });

  it('NavLink renders', () => { render(<NavLink href="/home">Home</NavLink>); });

  it('Pagination renders', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} />
    );
  });

  it('Tabs renders', () => {
    render(
      <Tabs
        defaultValue="tab1"
        items={[
          { value: 'tab1', label: 'Tab 1', content: <p>Content 1</p> },
          { value: 'tab2', label: 'Tab 2', content: <p>Content 2</p> },
        ]}
      />
    );
  });
});

describe('Data display', () => {
  it('Accordion renders', () => {
    render(
      <Accordion
        items={[{ value: 'item1', title: 'Question', content: <p>Answer</p> }]}
      />
    );
  });

  it('Avatar renders with fallback', () => {
    render(<Avatar fallback="JD" />);
  });

  it('Avatar renders with src', () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="Jane" fallback="J" />);
  });

  it('Badge renders', () => { render(<Badge>Active</Badge>); });

  it('EmptyState renders', () => {
    render(<EmptyState title="No results" description="Try a different search." />);
  });

  it('Skeleton renders', () => { render(<Skeleton />); });

  it('StatCard renders', () => {
    render(<StatCard label="Users" value="1,234" />);
  });

  it('Table renders', () => {
    render(
      <Table
        headers={['Name', 'Role']}
        rows={[['Alice', 'Admin'], ['Bob', 'Member']]}
      />
    );
  });
});

describe('Overlays', () => {
  it('Dialog renders (uncontrolled)', () => {
    render(
      <Dialog title="Confirm" open={false} onOpenChange={vi.fn()}>
        <p>Are you sure?</p>
      </Dialog>
    );
  });

  it('Popover renders', () => {
    render(
      <Popover trigger={<button>Open</button>}>
        <p>Popover content</p>
      </Popover>
    );
  });

  it('ToastProvider renders children', () => {
    render(<ToastProvider><p>app</p></ToastProvider>);
  });

  it('Tooltip renders', () => {
    render(
      <Tooltip content="Helpful tip">
        <button>Hover me</button>
      </Tooltip>
    );
  });
});

describe('Typography', () => {
  it('Code renders', () => { render(<Code>const x = 1;</Code>); });
  it('Heading renders', () => { render(<Heading as="h1">Title</Heading>); });
  it('Kbd renders', () => { render(<Kbd>⌘K</Kbd>); });
  it('Link renders', () => { render(<Link href="/page">Click</Link>); });
  it('Text renders', () => { render(<Text>Body copy</Text>); });
});

describe('Marketing', () => {
  it('CTA renders', () => {
    render(
      <CTA title="Get started" actions={<button>Sign up</button>} />
    );
  });

  it('FeatureGrid renders', () => {
    render(
      <FeatureGrid
        features={[{ title: 'Fast', description: 'Really fast' }]}
      />
    );
  });

  it('Footer renders', () => {
    render(
      <Footer brand={<span>Logo</span>} copyright="© 2026 imadgen" />
    );
  });

  it('Hero renders', () => {
    render(
      <Hero
        title="Welcome"
        description="The best platform."
        actions={<button>Start</button>}
      />
    );
  });

  it('LogoCloud renders', () => {
    render(
      <LogoCloud
        logos={[{ src: '/logo.png', alt: 'Acme' }]}
      />
    );
  });

  it('PricingCard renders', () => {
    render(
      <PricingCard
        name="Pro"
        price="$49"
        features={['Unlimited users', 'Priority support']}
        action={<button>Get Pro</button>}
      />
    );
  });

  it('Testimonial renders', () => {
    render(
      <Testimonial
        quote="Best tool I've used."
        author="Jane Doe"
        role="CTO at Acme"
      />
    );
  });

  it('ThemeImage renders', () => {
    render(
      <ThemeImage
        lightSrc="/light.png"
        darkSrc="/dark.png"
        alt="Screenshot"
        width={800}
        height={600}
      />
    );
  });
});

describe('Chatbox', () => {
  it('ChatProvider renders children', () => {
    render(<ChatProvider><p>app</p></ChatProvider>);
  });

  it('ChatPage renders inside ChatProvider', () => {
    render(
      <ChatProvider>
        <ChatPage />
      </ChatProvider>
    );
  });

  it('ChatPage renders with session/save callbacks', () => {
    render(
      <ChatProvider>
        <ChatPage
          onSessionCreate={vi.fn().mockResolvedValue(undefined)}
          onSaveConversation={vi.fn().mockResolvedValue(undefined)}
        />
      </ChatProvider>
    );
  });
});

describe('Effects / Backgrounds', () => {
  it('CursorGlow renders (returns null)', () => { render(<CursorGlow />); });
  it('EmbersBGE renders', () => { render(<EmbersBGE />); });
  it('ImBgAurora renders', () => { render(<ImBgAurora />); });
  it('LightTheme renders', () => { render(<LightTheme />); });
  it('NetBGE renders', () => { render(<NetBGE />); });
  it('SwarmsBGE renders', () => { render(<SwarmsBGE />); });
  it('WaveformBackground renders', () => { render(<WaveformBackground />); });
});
