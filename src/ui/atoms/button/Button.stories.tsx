import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'click' },
    disabled: { control: 'boolean' },
    variant: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Button>> = (args) => <Button { ...args } />;

export const Default = Template.bind({});
Default.args = {
  $variant: 'DEFAULT',
  children: 'Default',
};

export const Submit = Template.bind({});
Submit.args = {
  $variant: 'SUBMIT',
  children: 'Submit',
};

export const Reset = Template.bind({});
Reset.args = {
  $variant: 'RESET',
  children: 'Reset',
};
