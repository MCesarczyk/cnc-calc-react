import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { FieldWrapper } from './FieldWrapper';

const meta = {
  title: 'Atoms/FieldWrapper',
  component: FieldWrapper,
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
} satisfies Meta<typeof FieldWrapper>;

export default meta;

const Template: StoryFn<ComponentProps<typeof FieldWrapper>> = (args) => <FieldWrapper { ...args } />;

export const Default = Template.bind({});
Default.args = {
  $variant: 'DEFAULT',
};
