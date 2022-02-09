import styled from "styled-components";

export const FormWrapper = styled.form`
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: 2rem;
`;

export const Fieldset = styled.fieldset`
    border-radius: 2rem;
    padding: 1rem;
`;

export const Legend = styled.legend`
    text-align: center;
    margin: 0.5rem
`;

export const FieldsContainer = styled.div`
    display: grid;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    @media (max-width: 480px) {
        gap: 0.5rem;
    }
`;