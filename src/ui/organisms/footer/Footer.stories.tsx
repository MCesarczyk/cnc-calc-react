import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'number' },
    url: { control: 'text' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Footer>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Footer>> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: 2091,
  url: 'https://www.chucknorris.com',
  label: 'Chuck Norris',
};
