import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { FeedOptionSelector } from './FeedOptionSelector';

const meta = {
  title: 'Organisms/FeedOptionSelector',
  component: FeedOptionSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    feedOptions: { control: 'object' },
    feedFactor: { control: 'text' },
    setFeedFactor: { action: 'change' },
    feedType: { control: 'text' },
    setFeedType: { action: 'change' },
  },
} satisfies Meta<typeof FeedOptionSelector>;

export default meta;

const Template: StoryFn<ComponentProps<typeof FeedOptionSelector>> = (args) => <FeedOptionSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  feedOptions: [
    {
      id: 'FPR',
      name: 'f',
      sub: 'rev',
      unit: '[mm/min]',
      placeholder: 'feed per revolution',
      disabled: true,
    },
    {
      id: 'FPT',
      name: 'f',
      sub: 'tooth',
      unit: '[mm/t]',
      placeholder: 'feed per tooth',
      disabled: false,
    },
  ],
};
