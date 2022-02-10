import styled from "styled-components";

export const AppBar = styled.div`
    color: ${({ theme }) => theme.color.primaryContrast};
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 1.5rem;
    padding: 0.5rem 1.5rem;
    margin: 0 auto 10px auto;
    display: flex;
    align-items: center;
`;

export const Headline = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
    margin: 0;
`;