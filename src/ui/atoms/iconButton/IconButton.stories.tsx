import { ComponentProps } from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';

import type { Meta, StoryFn } from '@storybook/react';

import { ReactComponent as MenuThumbnail } from 'assets/images/hamburger-menu.svg';
import { IconButton } from './IconButton';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'click' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

const Template: StoryFn<ComponentProps<typeof IconButton>> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <MenuThumbnail />,
};
