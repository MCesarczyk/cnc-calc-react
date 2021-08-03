import styled from "styled-components";

export const SectionHeadline = styled.h2`
    color: ${({ theme }) => theme.color.primaryContrast};
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 20px;
    padding: 2px 20px;
    font-weight: 400;
    font-family: 'Ubuntu', sans-serif;
    margin: 0 auto 10px auto;

    @media (max-width: 375px) {
        font-size: 20px;
    }
`;