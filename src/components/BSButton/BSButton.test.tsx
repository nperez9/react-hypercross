import React from 'react';
import { render } from '@testing-library/react';
import BSButton from './BSButton';
import { BSButtonProps } from './BSButton.types';

const defaultProps: BSButtonProps = {
  children: 'Button',
  onClick: jest.fn(),
}

describe('Boostrap Button Comoponent', () => {
  it('Should render with only mandatory props', () => {
    
    const { getByText, getByRole } = render(<BSButton {...defaultProps} />);
    const component = getByText('Button');
    
    expect(component).toBeTruthy();
  })
});