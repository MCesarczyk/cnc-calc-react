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