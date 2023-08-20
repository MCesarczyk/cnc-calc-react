import { CSSProperties } from 'react';
import styled from 'styled-components';

export type FieldWrapperVariants = 'DEFAULT';

type FieldWrapperStyles = Required<
  Pick<CSSProperties, 'color' | 'backgroundColor' | 'borderColor'> & {}
>;

export type Palette<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles;
};

const styles: Palette<FieldWrapperVariants, FieldWrapperStyles> = {
  DEFAULT: {
    color: 'primaryText',
    backgroundColor: 'elementBackground',
    borderColor: 'primary',
  },
};

interface FieldWrapperProps {
  $variant?: FieldWrapperVariants;
}

export const FieldWrapper = styled.div<FieldWrapperProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
  }
`;

FieldWrapper.defaultProps = {
  $variant: 'DEFAULT',
  children: 'Sample content',
};

FieldWrapper.displayName = 'FieldWrapper';
