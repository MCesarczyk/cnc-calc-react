import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const Button = styled.button`
    display: flex;
    flex-basis: 200px;
    justify-content: center;
    color: ${({ theme }) => theme.color.primaryContrast};
    background-color: ${({ theme }) => theme.color.primary};
    border: solid ${({ theme }) => theme.color.primary};
    padding: 5px;
    border-radius: 20px;

    &:hover {
        filter: brightness(150%);
    }

    &:active {
        filter: brightness(200%);
        border-color: currentColor;
    }

    ${({ type }) => type === "submit" && css`
        color: ${({ theme }) => theme.color.submitButtonFont};
    `}
    
    ${({ type }) => type === "reset" && css`
        color: ${({ theme }) => theme.color.resetButtonFont};
    `}
`;