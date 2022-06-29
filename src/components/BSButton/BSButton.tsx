import React from 'react';
import { BSButtonProps } from './BSButton.types';

const BSButton: React.FC<BSButtonProps> = ({
  className = '',
  onClick,
  styleType = 'primary',
  isOutline = false,
  disabled = false,
  children,
  size,
  role = 'button',
}) => {
  let button = null;
  let buttonStyle = isOutline ? `btn-outline-${styleType}` : `btn-${styleType}`;
  if (size) {
    buttonStyle += ` btn-${size}`;
  }

  button = (
    <button
      onClick={onClick}
      className={`btn ${buttonStyle} ${className}`}
      disabled={disabled}
      type={role}>
      {children}
    </button>
  );

  return button;
};

export default BSButton;
