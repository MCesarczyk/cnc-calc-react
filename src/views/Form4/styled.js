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

export const Select = styled.select`
    min-width: 222px;
    border: solid 1px ${({ theme }) => theme.color.primary};
    border-radius: 5px;
    padding: 5px;
`;