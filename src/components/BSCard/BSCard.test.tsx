import React from 'react';
import { render } from '@testing-library/react';

import BSCard from './BSCard';
import { CardProps, ImagePosition } from './BSCard.types';

const defaultProps: CardProps = {
  title: 'Test card',
  paragraph: 'this is a parragraph',
};

describe('Bootstrap Card Component', () => {
  it('Should render with default props', () => {
    const { getByText } = render(<BSCard {...defaultProps} />);

    const component = getByText('Test card');
    expect(component).toBeTruthy();
  });

  it('Should render with all props', () => {
    const props = {
      ...defaultProps,
      imageSrc:
        'https://www.semana.com/resizer/DWerBFY8O0Tc0ZsQnFpA1LJXOR0=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/V3EVP6ZUEZFY7AIGESM76I43GE.jpg',
      links: [
        { url: 'https://www.google.com/', title: 'Google', target: '_blank' },
        { url: 'https://www.youtube.com/', title: 'Youtube', target: '_blank' },
      ],
      subtitle: 'This is the subtitle prop',
      imagePosition: 'top' as ImagePosition,
    };

    const { getByText, getByAltText } = render(<BSCard {...props} />);

    const component = getByText('This is the subtitle prop');
    const image = getByAltText('Test card');

    expect(component).toBeTruthy();
    expect(image).toBeTruthy();
  });

  it('Should render with the image in bottom', () => {
    const props = {
      ...defaultProps,
      imageSrc:
        'https://www.semana.com/resizer/DWerBFY8O0Tc0ZsQnFpA1LJXOR0=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/V3EVP6ZUEZFY7AIGESM76I43GE.jpg',
      imagePosition: 'bottom' as ImagePosition,
    };

    const { getByAltText } = render(<BSCard {...props} />);
    const image = getByAltText('Test card');

    expect(image).toBeTruthy();
  });
});
