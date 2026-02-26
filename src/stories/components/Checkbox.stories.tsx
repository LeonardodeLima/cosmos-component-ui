import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme, themeDark } from '../../tokens';
import Checkbox from '../../components/Checkbox/Checkbox';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label:    { control: 'text' },
    checked:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    variant:  { control: { type: 'select' }, options: ['default', 'glitch'] },
    onChange: { control: 'none' },
  },
  parameters: { layout: 'padded' },
  render: (args) => (
    <ThemeProvider theme={theme}><Checkbox {...args} /></ThemeProvider>
  ),
};

export default meta;


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
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
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

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <ThemeProvider theme={theme}>
        <Section title="Light Theme">
          <Row label="Default · Unchecked">
            <Checkbox label="Option A" />
            <Checkbox label="Option B" />
            <Checkbox label="Option C" />
          </Row>
          <Row label="Default · Checked">
            <Checkbox label="Accept terms"   defaultChecked />
            <Checkbox label="Subscribe news" defaultChecked />
          </Row>
          <Row label="Default · Disabled">
            <Checkbox label="Unavailable"       disabled />
            <Checkbox label="Already selected"  disabled defaultChecked />
          </Row>
          <Row label="Default · No label">
            <Checkbox />
            <Checkbox defaultChecked />
          </Row>
          <Row label="Glitch · Unchecked">
            <Checkbox label="ENABLE MODULE"   variant="glitch" />
            <Checkbox label="SYNC DATA"       variant="glitch" />
          </Row>
          <Row label="Glitch · Checked">
            <Checkbox label="SYSTEM ACTIVE"   variant="glitch" defaultChecked />
            <Checkbox label="FIREWALL ON"     variant="glitch" defaultChecked />
          </Row>
          <Row label="Glitch · Disabled">
            <Checkbox label="OFFLINE"         variant="glitch" disabled />
            <Checkbox label="LOCKED"          variant="glitch" disabled defaultChecked />
          </Row>
        </Section>
      </ThemeProvider>

      <ThemeProvider theme={themeDark}>
        <Section title="Dark Theme" dark>
          <Row label="Default · Unchecked" dark>
            <Checkbox label="Option A" />
            <Checkbox label="Option B" />
          </Row>
          <Row label="Default · Checked" dark>
            <Checkbox label="Accept terms"   defaultChecked />
            <Checkbox label="Subscribe news" defaultChecked />
          </Row>
          <Row label="Default · Disabled" dark>
            <Checkbox label="Unavailable"       disabled />
            <Checkbox label="Already selected"  disabled defaultChecked />
          </Row>
          <Row label="Default · No label" dark>
            <Checkbox />
            <Checkbox defaultChecked />
          </Row>
          <Row label="Glitch · Unchecked" dark>
            <Checkbox label="ENABLE MODULE" variant="glitch" />
            <Checkbox label="SYNC DATA"     variant="glitch" />
          </Row>
          <Row label="Glitch · Checked" dark>
            <Checkbox label="SYSTEM ACTIVE" variant="glitch" defaultChecked />
            <Checkbox label="FIREWALL ON"   variant="glitch" defaultChecked />
          </Row>
          <Row label="Glitch · Disabled" dark>
            <Checkbox label="OFFLINE" variant="glitch" disabled />
            <Checkbox label="LOCKED"  variant="glitch" disabled defaultChecked />
          </Row>
        </Section>
      </ThemeProvider>
    </div>
  ),
};

export const Default:  Story = { args: { label: 'Accept terms and conditions' } };
export const Checked:  Story = { args: { label: 'Already accepted', defaultChecked: true } };
export const Disabled: Story = { args: { label: 'Unavailable option', disabled: true } };
export const NoLabel:  Story = { name: 'No Label', args: {} };

export const GlitchDefault:  Story = { name: 'Glitch / Default',  args: { label: 'ENABLE MODULE',  variant: 'glitch' } };
export const GlitchChecked:  Story = { name: 'Glitch / Checked',  args: { label: 'SYSTEM ACTIVE',  variant: 'glitch', defaultChecked: true } };
export const GlitchDisabled: Story = { name: 'Glitch / Disabled', args: { label: 'OFFLINE',        variant: 'glitch', disabled: true } };
