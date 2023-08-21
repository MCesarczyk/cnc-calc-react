import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'change' },
    disabled: { control: 'boolean' },
    variant: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Select>> = (args) => <Select { ...args } />;

export const Default = Template.bind({});
Default.args = {
  $variant: 'DEFAULT',
};
