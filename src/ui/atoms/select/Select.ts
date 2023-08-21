import { CSSProperties } from 'react';
import styled from 'styled-components';

export type SelectVariants = 'DEFAULT';

type SelectStyles = Required<
  Pick<CSSProperties, 'color' | 'backgroundColor' | 'borderColor'> & {
    disabledText?: CSSProperties['color'];
    disabledBackgroundColor?: CSSProperties['backgroundColor'];
  }
>;

export type Palette<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles;
};

const styles: Palette<SelectVariants, SelectStyles> = {
  DEFAULT: {
    color: 'primaryText',
    backgroundColor: 'elementBackground',
    borderColor: 'primary',
    disabledText: 'disabledText',
    disabledBackgroundColor: 'disabledBackground',
  },
};

interface SelectProps {
  $variant?: SelectVariants;
  disabled?: boolean;
}

export const Select = styled.select<SelectProps>`
  min-width: 16rem;
  border: solid 1px ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 100%;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color[styles.DEFAULT.disabledBackgroundColor]};
    color: ${({ theme }) => theme.color[styles.DEFAULT.disabledText]};
    border-color: ${({ theme }) => theme.color[styles.DEFAULT.disabledText]};
  }
`;

Select.defaultProps = {
  $variant: 'DEFAULT',
};

Select.displayName = 'Select';
