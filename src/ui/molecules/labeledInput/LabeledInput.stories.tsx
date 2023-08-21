import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { LabeledInput } from './LabeledInput';

const meta = {
  title: 'Molecules/LabeledInput',
  component: LabeledInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputName : { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'change' },
    sub: { control: 'text' },
    unit: { control: 'text' },
    inputRef: { control: 'text' },
    min: { control: 'number' },
    step: { control: 'number' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
  },
} satisfies Meta<typeof LabeledInput>;

export default meta;

const Template: StoryFn<ComponentProps<typeof LabeledInput>> = (args) => <LabeledInput { ...args } />;

export const Default = Template.bind({});
Default.args = {
  inputName: 'labeledInput',
  name: 'V',
  sub: 'max',
  unit: '[m/min]',
  inputRef: null,
  min: 0,
  step: 1,
  placeholder: 'velocity',
  disabled: false,
  autoFocus: false,
};
