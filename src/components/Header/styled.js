import styled from "styled-components";

export const Headline = styled.h1`
    color: ${({theme}) => theme.color.primaryContrast};
    background-color: ${({theme}) => theme.color.primary};
    border-radius: 25px;
    padding: 5px 25px;
    font-weight: 300;
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
    margin: 0 auto 10px auto;

    @media (max-width: 375px) {
        font-size: 28px;
    }
`;