import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { RadioButton } from './RadioButton';

const meta = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'change' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

const Template: StoryFn<ComponentProps<typeof RadioButton>> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
