import React from 'react';
import { render } from '@testing-library/react';
import BSButton from './BSButton';
import { BSButtonProps } from './BSButton.types';

const defaultProps: BSButtonProps = {
  children: 'Button',
  onClick: jest.fn(),
};

describe('Boostrap Button Comoponent', () => {
  it('Should render with only mandatory props', () => {
    const { getByText } = render(<BSButton {...defaultProps} />);
    const component = getByText('Button');

    expect(component).toBeTruthy();
    component.click();
    expect(defaultProps.onClick).toBeCalled();
  });

  it('Should not be called onClick on disabled button', () => {
    const clickFunction = jest.fn();
    const props: BSButtonProps = { ...defaultProps, onClick: clickFunction, disabled: true };

    const { getByText } = render(<BSButton {...props} />);
    const component = getByText('Button');
    component.click();

    expect(clickFunction).toBeCalledTimes(0);
  });

  it('Should be render with correct classnames & role', () => {
    const props: BSButtonProps = {
      ...defaultProps,
      styleType: 'success',
      className: 'test',
      size: 'lg',
      isOutline: true,
      role: 'reset',
    };

    const { getByText } = render(<BSButton {...props} />);
    const component = getByText('Button'); 

    expect(component).toHaveClass('btn-lg btn btn-outline-success test');
  });
});
