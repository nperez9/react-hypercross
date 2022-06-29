import React from 'react';
import { ComponentStory } from '@storybook/react';

import BSButton from './BSButton';
import { BSButtonProps } from './BSButton.types';

export default {
  title: 'Bootstrap/Button',
  component: BSButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const baseArgs: BSButtonProps = {
  children: 'Button',
  onClick: () => {
    alert('Button clicked!')
  }
}

const Template: ComponentStory<typeof BSButton> = (args) => <BSButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...baseArgs
};
