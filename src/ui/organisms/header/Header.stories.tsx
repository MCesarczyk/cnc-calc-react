import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { Header } from './Header';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    homeUrl: { control: 'text' },
  },
} satisfies Meta<typeof Header>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Header>> = (args) => <Header homeUrl='/' />;

export const Default = Template.bind({});
Default.args = {
  homeUrl: '/',
};
