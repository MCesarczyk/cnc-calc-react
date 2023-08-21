import { CSSProperties } from 'react';
import styled from 'styled-components';

export type ButtonVariants = 'DEFAULT' | 'SUBMIT' | 'RESET';

type ButtonStyles = Required<
  Pick<CSSProperties, 'color' | 'backgroundColor' | 'borderColor'> & {
    disabledColor?: CSSProperties['color'];
    disabledBackgroundColor?: CSSProperties['backgroundColor'];
  }
>;

export type Palette<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles;
};

const styles: Palette<ButtonVariants, ButtonStyles> = {
  DEFAULT: {
    color: 'contrastText',
    backgroundColor: 'primary',
    borderColor: 'primary',
    disabledColor: 'disabledText',
    disabledBackgroundColor: 'disabledBackground',
  },
  SUBMIT: {
    color: 'submitButtonText',
    backgroundColor: 'primary',
    borderColor: 'primary',
    disabledColor: 'disabledText',
    disabledBackgroundColor: 'disabledBackground',
  },
  RESET: {
    color: 'resetButtonText',
    backgroundColor: 'primary',
    borderColor: 'primary',
    disabledColor: 'disabledText',
    disabledBackgroundColor: 'disabledBackground',
  },
};

interface ButtonProps {
  $variant?: ButtonVariants;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  min-width: 12rem;
  width: 100%;
  justify-content: center;
  color: ${(props) => props.theme.color[styles[props.$variant!].color]};
  background-color: ${(props) => props.theme.color[styles[props.$variant!].backgroundColor]};
  border: solid ${(props) => props.theme.color[styles[props.$variant!].borderColor]};
  padding: 0.25rem;
  border-radius: 1.5rem;

  &:hover {
    filter: brightness(150%);
  }

  &:active {
    filter: brightness(100%);
  }

  &:disabled {
    color: ${(props) => props.theme.color[styles[props.$variant!].disabledColor]};
    background-color: ${(props) => props.theme.color[styles[props.$variant!].disabledBackgroundColor]};
    border-color: ${(props) => props.theme.color[styles[props.$variant!].disabledBackgroundColor]};
    pointer-events: none;
    cursor: default;
  }
`;

Button.defaultProps = {
  $variant: 'DEFAULT',
};

Button.displayName = 'Button';
