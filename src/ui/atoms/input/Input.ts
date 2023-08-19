import { CSSProperties } from 'react';
import styled from 'styled-components';

export type InputVariants = 'DEFAULT';

type InputStyles = Required<
  Pick<CSSProperties, 'color' | 'backgroundColor' | 'borderColor'> & {
    invalidBackgroundColor?: CSSProperties['backgroundColor'];
    disabledBackgroundColor?: CSSProperties['backgroundColor'];
  }
>;

export type Palette<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles;
};

const styles: Palette<InputVariants, InputStyles> = {
  DEFAULT: {
    color: 'primaryText',
    backgroundColor: 'elementBackground',
    borderColor: 'primary',
    invalidBackgroundColor: 'invalid',
    disabledBackgroundColor: 'disabledBackground',
  },
};

interface InputProps {
  $variant?: InputVariants;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const Input = styled.input<InputProps>`
  border: solid 1px ${(props) => props.theme.color[styles[props.$variant!].borderColor]};
  border-radius: 5px;
  padding: 5px;

  @media (max-width: ${(props) => props.theme.breakpoint.xs}) {
    width: 100%;
  }

  &:invalid {
    background-color: ${(props) => props.theme.color[styles[props.$variant!].invalidBackgroundColor]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.color[styles[props.$variant!].disabledBackgroundColor]};
  }
`;

Input.defaultProps = {
  $variant: 'DEFAULT',
};

Input.displayName = 'Input';
