import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Title } from './Title';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Atoms/Title',
  component: Title,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    url: { control: 'text' },
  },
} satisfies Meta<typeof Title>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Title>> = (args) => <Title { ...args } />;

export const Default = Template.bind({});
Default.args = {
 title: 'Title',
  url: '#',
};
