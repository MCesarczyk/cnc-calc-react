import { FormEvent, ReactNode, useContext } from 'react';
import styled from 'styled-components';

import LanguageContext from 'features/language/context';
import { createFormFooterButtons } from 'common/utils/createFormFooterButtons';
import { FormFooter } from './FormFooter';

interface FormProps {
  legend: string;
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onReset: (e: FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ legend, children, onSubmit, onReset }: FormProps) => {
  const { langId } = useContext(LanguageContext);
  const buttons = createFormFooterButtons(langId);

  return (
    <FormWrapper onSubmit={onSubmit} onReset={onReset}>
      <Fieldset>
        <Legend>{legend}</Legend>
        <FieldsContainer>{children}</FieldsContainer>
        <FormFooter buttons={buttons} />
      </Fieldset>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  color: ${({ theme }) => theme.color.primary};
`;

const Fieldset = styled.fieldset`
  border-radius: 2rem;
  padding: 1rem;
`;

const Legend = styled.legend`
  text-align: center;
  margin: 0.5rem;
`;

export const FieldsContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    gap: 0.5rem;
  }
`;
