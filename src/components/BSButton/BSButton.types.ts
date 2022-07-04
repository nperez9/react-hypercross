import React from 'react';
import { ButtonHTMLAttributes} from 'react';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export type ButtonSize = 'sm' | 'lg';

export type ButtonRole = 'button' | 'submit' | 'reset';

export interface BSButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  styleType?: ButtonType;
  isOutline?: boolean;
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  role?: ButtonRole;
}
