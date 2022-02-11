import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppBar = styled.div`
    color: ${({ theme }) => theme.color.primaryContrast};
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 1.5rem;
    padding: 0.5rem 1.5rem;
    margin: 0 auto 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        border-radius: 0;
        margin: 0 0 10px 0;
        padding: 0.5rem;
    }
`;

export const HomeLink = styled(Link)`
    &:hover {
        filter: brightness(0.8);
    }

    &:active {
        filter: unset;
    }

    &:focus {
        outline: none;
    }
`;

export const Headline = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        font-size: 1.5rem;
    }
`;