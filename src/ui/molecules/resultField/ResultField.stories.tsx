import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { ResultField } from './ResultField';

const meta = {
  title: 'Molecules/ResultField',
  component: ResultField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    sub: { control: 'text' },
    unit: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof ResultField>;

export default meta;

const Template: StoryFn<ComponentProps<typeof ResultField>> = (args) => <ResultField { ...args } />;

export const Default = Template.bind({});
Default.args = {
  name: 'f',
  unit: '[mm/min]',
  value: '1001',
  placeholder: 'Feedrate',
  sub: 't',
};
