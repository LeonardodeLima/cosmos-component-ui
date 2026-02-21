import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/Input/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    message: { control: 'text' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Componente de entrada de texto com suporte a estados: padrão, sucesso, erro e desabilitado. Tokens do Cosmos aplicados em todos os estilos.',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ maxWidth: 360, padding: 24 }}>
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  id: 'input-default',
  label: 'E-mail',
  placeholder: 'exemplo@cosmos.dev',
};

export const Success = Template.bind({});
Success.storyName = 'Success';
Success.args = {
  id: 'input-success',
  label: 'E-mail',
  placeholder: 'exemplo@cosmos.dev',
  success: true,
  message: 'E-mail válido!',
};

export const Error = Template.bind({});
Error.storyName = 'Error';
Error.args = {
  id: 'input-error',
  label: 'E-mail',
  placeholder: 'exemplo@cosmos.dev',
  error: true,
  message: 'Insira um e-mail válido.',
};

export const Disabled = Template.bind({});
Disabled.storyName = 'Disabled';
Disabled.args = {
  id: 'input-disabled',
  label: 'E-mail',
  placeholder: 'exemplo@cosmos.dev',
  disabled: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.storyName = 'Without Label';
WithoutLabel.args = {
  id: 'input-no-label',
  placeholder: 'Digite algo...',
};

export const WithoutMessage = Template.bind({});
WithoutMessage.storyName = 'Without Message';
WithoutMessage.args = {
  id: 'input-no-message',
  label: 'Nome completo',
  placeholder: 'Leonardo Lima',
};

export const Playground: ComponentStory<typeof Input> = () => {
  const [value, setValue] = React.useState('');
  const [touched, setTouched] = React.useState(false);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const error = touched && value.length > 0 && !isValid;
  const success = touched && isValid;

  return (
    <div style={{ maxWidth: 360, padding: 24 }}>
      <Input
        id="input-playground"
        label="E-mail"
        placeholder="exemplo@cosmos.dev"
        value={value}
        error={error}
        success={success}
        message={
          error ? 'Insira um e-mail válido.' : success ? 'E-mail válido!' : ''
        }
        onChange={(e) => {
          setValue(e.target.value);
          setTouched(true);
        }}
      />
    </div>
  );
};
Playground.storyName = 'Playground';

export const AllStates: ComponentStory<typeof Input> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 360, padding: 24 }}>
    <Input
      id="all-default"
      label="Default"
      placeholder="exemplo@cosmos.dev"
    />
    <Input
      id="all-success"
      label="Success"
      placeholder="exemplo@cosmos.dev"
      success
      message="E-mail válido!"
    />
    <Input
      id="all-error"
      label="Error"
      placeholder="exemplo@cosmos.dev"
      error
      message="Insira um e-mail válido."
    />
    <Input
      id="all-disabled"
      label="Disabled"
      placeholder="exemplo@cosmos.dev"
      disabled
    />
  </div>
);
AllStates.storyName = 'All States';
AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Visão consolidada de todos os estados do componente Input.',
    },
  },
};