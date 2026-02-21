import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme, themeDark } from '@tokens';
import Button from '../components/Button/Button';

export default {
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
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Button>;

const Row: React.FC<{ label: string; dark?: boolean; children: React.ReactNode }> = ({ label, dark = false, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <span style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: '11px',
      fontWeight: 600,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.1em',
      color: dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)',
    }}>
      {label}
    </span>
    <div style={{ display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', gap: '12px' }}>
      {children}
    </div>
  </div>
);

const Section: React.FC<{ title: string; dark?: boolean; children: React.ReactNode }> = ({ title, dark = false, children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    padding: '32px',
    borderRadius: '8px',
    background: dark ? '#131820' : '#f7f8fa',
    border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
  }}>
    <div style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: '12px',
      fontWeight: 700,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.12em',
      color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
      paddingBottom: '16px',
      borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
    }}>
      {title}
    </div>
    {children}
  </div>
);

export const AllVariants: ComponentStory<typeof Button> = () => (
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
          <Button text="Primary disabled" primary disabled />
          <Button text="Secondary disabled" disabled />
        </Row>
        <Row label="Glitch · Default size">
          <Button text="INITIATE CONNECTION" variant="glitch" />
        </Row>
        <Row label="Glitch · Sizes">
          <Button text="CONNECT" variant="glitch" size="small" />
          <Button text="LAUNCH" variant="glitch" size="medium" />
          <Button text="LAUNCH SYSTEM" variant="glitch" size="large" />
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
          <Button text="Primary disabled" primary disabled />
          <Button text="Secondary disabled" disabled />
        </Row>
        <Row label="Glitch · Default size" dark>
          <Button text="INITIATE_CONNECTION" variant="glitch" />
        </Row>
        <Row label="Glitch · Sizes" dark>
          <Button text="CONNECT"       variant="glitch" size="small"  />
          <Button text="LAUNCH"        variant="glitch" size="medium" />
          <Button text="LAUNCH_SYSTEM" variant="glitch" size="large"  />
        </Row>
        <Row label="Glitch · Disabled" dark>
          <Button text="OFFLINE" variant="glitch" disabled />
        </Row>
      </Section>
    </ThemeProvider>

  </div>
);

AllVariants.storyName = 'All Variants';
AllVariants.parameters = { controls: { disable: true } };

const T: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}><Button {...args} /></ThemeProvider>
);

export const Primary   = T.bind({});  Primary.args   = { text: 'Primary',   primary: true };
export const Secondary = T.bind({});  Secondary.args = { text: 'Secondary' };
export const Disabled  = T.bind({});  Disabled.args  = { text: 'Disabled',  disabled: true };

export const SizeSmall  = T.bind({});  SizeSmall.args  = { text: 'Small',  primary: true, size: 'small'  };  SizeSmall.storyName  = 'Size / Small';
export const SizeMedium = T.bind({});  SizeMedium.args = { text: 'Medium', primary: true, size: 'medium' };  SizeMedium.storyName = 'Size / Medium';
export const SizeLarge  = T.bind({});  SizeLarge.args  = { text: 'Large',  primary: true, size: 'large'  };  SizeLarge.storyName  = 'Size / Large';

export const GlitchDefault  = T.bind({});  GlitchDefault.args  = { text: 'INITIATE_CONNECTION', variant: 'glitch'                 };  GlitchDefault.storyName  = 'Glitch / Default';
export const GlitchSmall    = T.bind({});  GlitchSmall.args    = { text: 'CONNECT',             variant: 'glitch', size: 'small'  };  GlitchSmall.storyName    = 'Glitch / Small';
export const GlitchLarge    = T.bind({});  GlitchLarge.args    = { text: 'LAUNCH_SYSTEM',       variant: 'glitch', size: 'large'  };  GlitchLarge.storyName    = 'Glitch / Large';
export const GlitchDisabled = T.bind({});  GlitchDisabled.args = { text: 'OFFLINE',             variant: 'glitch', disabled: true };  GlitchDisabled.storyName = 'Glitch / Disabled';
