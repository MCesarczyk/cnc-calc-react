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

export const FormInnerText = styled.span`
    text-align: right;

    @media (max-width: 480px) {
        text-align: center;
    }
`;

export const FormTextSub = styled.span`
    vertical-align: sub;
    font-size: 0.7em;
    margin-right: 0.15em;
`;

export const FormInput = styled.input`
    min-width: 200px;
    border: solid 1px #1e3246;
    border-radius: 5px;
    padding: 5px;

    @media (max-width: 480px) {
        width: 100%;
    }

    &:invalid {
    background-color: beige;
    }

    &:disabled {
        background-color: #ddd;
    }
`;

export const RadioButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const Select = styled.select`
    min-width: 222px;
    border: solid 1px #1e3246;
    border-radius: 5px;
    padding: 5px;
`;