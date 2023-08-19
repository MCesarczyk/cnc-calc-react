import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'change' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    variant: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Input>> = (args) => <Input { ...args } />;

export const Default = Template.bind({});
Default.args = {
  $variant: 'DEFAULT',
  placeholder: 'Default',
};
