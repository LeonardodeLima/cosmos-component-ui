import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme, themeDark } from '../../tokens';
import Button from '../../components/Button/Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text:     { control: 'text' },
    primary:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    size:     { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    variant:  { control: { type: 'select' }, options: ['default', 'glitch'] },
    onClick:  { control: 'none' },
  },
  parameters: { layout: 'padded' },
  render: (args) => (
    <ThemeProvider theme={theme}><Button {...args} /></ThemeProvider>
  ),
};

export default meta;

// ─── Helpers ──────────────────────────────────────────────────────────────────
const Row: React.FC<{ label: string; dark?: boolean; children: React.ReactNode }> = ({ label, dark = false, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <span style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: '11px', fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: '0.1em',
      color: dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)',
    }}>
      {label}
    </span>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
      {children}
    </div>
  </div>
);

const Section: React.FC<{ title: string; dark?: boolean; children: React.ReactNode }> = ({ title, dark = false, children }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', gap: '28px',
    padding: '32px', borderRadius: '8px',
    background: dark ? '#131820' : '#f7f8fa',
    border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
  }}>
    <div style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: '12px', fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '0.12em',
      color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
      paddingBottom: '16px',
      borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
    }}>
      {title}
    </div>
    {children}
  </div>
);

// ─── Stories ──────────────────────────────────────────────────────────────────
export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <ThemeProvider theme={theme}>
        <Section title="Light Theme">
          <Row label="Default · Primary">
            <Button text="Small"  primary size="small"  />
            <Button text="Medium" primary size="medium" />
            <Button text="Large"  primary size="large"  />
          </Row>
          <Row label="Default · Secondary">
            <Button text="Small"  size="small"  />
            <Button text="Medium" size="medium" />
            <Button text="Large"  size="large"  />
          </Row>
          <Row label="Default · Disabled">
            <Button text="Primary disabled"   primary disabled />
            <Button text="Secondary disabled" disabled />
          </Row>
          <Row label="Glitch · Default size">
            <Button text="INITIATE CONNECTION" variant="glitch" />
          </Row>
          <Row label="Glitch · Sizes">
            <Button text="CONNECT"       variant="glitch" size="small"  />
            <Button text="LAUNCH"        variant="glitch" size="medium" />
            <Button text="LAUNCH SYSTEM" variant="glitch" size="large"  />
          </Row>
          <Row label="Glitch · Disabled">
            <Button text="OFFLINE" variant="glitch" disabled />
          </Row>
        </Section>
      </ThemeProvider>

      <ThemeProvider theme={themeDark}>
        <Section title="Dark Theme" dark>
          <Row label="Default · Primary" dark>
            <Button text="Small"  primary size="small"  />
            <Button text="Medium" primary size="medium" />
            <Button text="Large"  primary size="large"  />
          </Row>
          <Row label="Default · Secondary" dark>
            <Button text="Small"  size="small"  />
            <Button text="Medium" size="medium" />
            <Button text="Large"  size="large"  />
          </Row>
          <Row label="Default · Disabled" dark>
            <Button text="Primary disabled"   primary disabled />
            <Button text="Secondary disabled" disabled />
          </Row>
          <Row label="Glitch · Default size" dark>
            <Button text="INITIATE CONNECTION" variant="glitch" />
          </Row>
          <Row label="Glitch · Sizes" dark>
            <Button text="CONNECT"       variant="glitch" size="small"  />
            <Button text="LAUNCH"        variant="glitch" size="medium" />
            <Button text="LAUNCH SYSTEM" variant="glitch" size="large"  />
          </Row>
          <Row label="Glitch · Disabled" dark>
            <Button text="OFFLINE" variant="glitch" disabled />
          </Row>
        </Section>
      </ThemeProvider>
    </div>
  ),
};

export const Primary:   Story = { args: { text: 'Primary',   primary: true } };
export const Secondary: Story = { args: { text: 'Secondary' } };
export const Disabled:  Story = { args: { text: 'Disabled',  disabled: true } };

export const SizeSmall:  Story = { name: 'Size / Small',  args: { text: 'Small',  primary: true, size: 'small'  } };
export const SizeMedium: Story = { name: 'Size / Medium', args: { text: 'Medium', primary: true, size: 'medium' } };
export const SizeLarge:  Story = { name: 'Size / Large',  args: { text: 'Large',  primary: true, size: 'large'  } };

export const GlitchDefault:  Story = { name: 'Glitch / Default',  args: { text: 'INITIATE CONNECTION', variant: 'glitch'                } };
export const GlitchSmall:    Story = { name: 'Glitch / Small',    args: { text: 'CONNECT',             variant: 'glitch', size: 'small' } };
export const GlitchLarge:    Story = { name: 'Glitch / Large',    args: { text: 'LAUNCH SYSTEM',       variant: 'glitch', size: 'large' } };
export const GlitchDisabled: Story = { name: 'Glitch / Disabled', args: { text: 'OFFLINE',             variant: 'glitch', disabled: true } };
