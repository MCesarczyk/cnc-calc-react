import styled from 'styled-components';
import { Button } from 'ui/atoms/button';

interface FormFooterProps {
  buttons: {
    id: number;
    label: string;
    type: 'SUBMIT' | 'RESET';
    testId: string;
  }[];
}

export const FormFooter = ({ buttons }: FormFooterProps) => (
  <ButtonsContainer>
    {buttons.map((button) => (
      <Button key={button.id} $variant={button.type} type={button.type === 'RESET' ? 'reset' : 'submit'} data-testid={button.testId} >
        {button.label}
      </Button>
    ))}
  </ButtonsContainer>
);

export const ButtonsContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    flex-direction: column;
    align-items: stretch;
  }
`;
