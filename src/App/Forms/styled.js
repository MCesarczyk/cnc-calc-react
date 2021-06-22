import styled from "styled-components";

export const Form = styled.form`
    color: #1e3246;
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

export const FormLabel = styled.label`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
    }
`;