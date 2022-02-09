import styled from "styled-components";

export const InputLabelText = styled.span`
    text-align: right;

    @media (max-width: 480px) {
        text-align: center;
    }
`;

export const Select = styled.select`
    min-width: 222px;
    border: solid 1px ${({ theme }) => theme.color.primary};
    border-radius: 5px;
    padding: 5px;
`;