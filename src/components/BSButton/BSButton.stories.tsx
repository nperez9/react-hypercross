import React from 'react';
import { ComponentStory } from '@storybook/react';

import BSButton from './BSButton';
import { BSButtonProps } from './BSButton.types';

export default {
  title: 'Bootstrap/Button',
  component: BSButton,
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

export const SuccessLargeOutline = Template.bind({});
SuccessLargeOutline.args = {
  ...baseArgs,
  styleType: 'success',
  size: 'lg',
  isOutline: true,
};


export const DarkSmall = Template.bind({});
DarkSmall.args = {
  ...baseArgs,
  styleType: 'dark',
  size: 'sm'
};