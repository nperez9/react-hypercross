import React from 'react';
import { ComponentStory } from '@storybook/react';

import BSCard from './BSCard';
import { CardProps } from './BSCard.types';

export default {
  title: 'Bootstrap/Card',
  component: BSCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const baseArgs: CardProps = {
  title: 'Test card',
  paragraph: 'this is a parragraph',
};

const Template: ComponentStory<typeof BSCard> = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <BSCard {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...baseArgs,
};

export const Complete = Template.bind({});
Complete.args = {
  ...baseArgs,
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit ligula at turpis elementum, id pulvinar lacus gravida. Nulla maximus euismod leo, at mattis urna convallis nec. Sed aliquet consequat dapibus. Quisque at urna non sapien lobortis commodo suscipit sit amet neque. Quisque nec ante erat. Suspendisse vehicula eget augue quis consequat. Nunc accumsan mollis mi vel porta. Nullam nec posuere libero, quis imperdiet nisl. Curabitur rutrum pellentesque dictum. Etiam molestie fringilla urna, sed bibendum sem. Vestibulum tincidunt eros aliquet eros molestie, volutpat suscipit turpis imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae quam malesuada, aliquet orci nec, pulvinar magna.',
  imageSrc:
    'https://www.semana.com/resizer/DWerBFY8O0Tc0ZsQnFpA1LJXOR0=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/V3EVP6ZUEZFY7AIGESM76I43GE.jpg',
  links: [
    { url: 'https://www.google.com/', title: 'Google', target: '_blank' },
    { url: 'https://www.youtube.com/', title: 'Youtube', target: '_blank' },
  ],
  subtitle: 'This is the subtitle prop',
};
