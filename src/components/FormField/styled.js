import styled from "styled-components";

export const FieldWrapper = styled.label`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const InputLabelText = styled.span`
    text-align: right;

    @media (max-width: 480px) {
        text-align: center;
    }
`;

export const FormInput = styled.input`
    min-width: 200px;
    border: solid 1px ${({ theme }) => theme.color.primary};
    border-radius: 5px;
    padding: 5px;

    @media (max-width: 480px) {
        width: 100%;
    }

    &:invalid {
        background-color: ${({ theme }) => theme.color.invalid};
    }

    &:disabled {
        background-color: ${({theme})=>theme.color.disabled};
    }
`;