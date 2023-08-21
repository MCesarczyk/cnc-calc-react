import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Label } from './Label';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Label>> = (args) => <Label { ...args } />;

export const Default = Template.bind({});
Default.args = {
  $variant: 'DEFAULT',
  children: 'Label',
};
