import styled from "styled-components";

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

export const RadioButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;