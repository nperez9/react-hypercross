import React from 'react';
import { render } from '@testing-library/react';

import BSCard from './BSCard';
import { CardProps } from './BSCard.types';

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
});