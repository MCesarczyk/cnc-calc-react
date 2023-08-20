import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Link } from './Link';

const meta = {
  title: 'Atoms/Link',
  component: Link,
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
} satisfies Meta<typeof Link>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Link>> = (args) => <Link { ...args } />;

export const Default = Template.bind({});
Default.args = {
  $variant: 'DEFAULT',
  href: '#',
  children: 'Link',
};
