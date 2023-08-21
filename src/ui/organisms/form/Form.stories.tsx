import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { Form } from './Form';

const meta = {
  title: 'Organisms/Form',
  component: Form,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    legend: { control: 'text' },
    onSubmit: { action: 'submit' },
    onReset: { action: 'reset' },
  },
} satisfies Meta<typeof Form>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Form>> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  legend: 'Form title',
  onSubmit: () => {},
  onReset: () => {},
  children: 'FORM CONTENT',
};
