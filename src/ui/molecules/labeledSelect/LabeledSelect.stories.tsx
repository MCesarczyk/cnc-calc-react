import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { LabeledSelect } from './LabeledSelect';
import { data } from './fixtures';

const meta = {
  title: 'Molecules/LabeledSelect',
  component: LabeledSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    sub: { control: 'text' },
    unit: { control: 'text' },
    value: { control: 'text' },
    data: { control: 'object' },
    onChange: { action: 'change' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof LabeledSelect>;

export default meta;

const Template: StoryFn<ComponentProps<typeof LabeledSelect>> = (args) => <LabeledSelect { ...args } />;

export const Default = Template.bind({});
Default.args = {
  name: 'V',
  sub: 'max',
  unit: '[m/min]',
  disabled: false,
  data: data,
};
