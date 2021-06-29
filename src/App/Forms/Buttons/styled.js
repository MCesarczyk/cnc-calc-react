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
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};
    border: solid ${({ theme }) => theme.color.primary};
    padding: 5px;
    border-radius: 20px;

    &:hover {
        background-color: #4b5a69;
    }

    &:active {
        background-color: #788291;
        border-color: currentColor;
    }

    ${({ type }) => type === "submit" && css`
        color: #19aa6e;
    `}
    
    ${({ type }) => type === "reset" && css`
        color: #dc3223;
    `}
`;