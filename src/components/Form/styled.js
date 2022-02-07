import styled from "styled-components";

export const FormWrapper = styled.form`
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: 10px;
`;

export const Fieldset = styled.fieldset`
    border-radius: 20px;
`;

export const Legend = styled.legend`
    text-align: center;
`;

export const FieldsContainer = styled.div`
    display: grid;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
`;