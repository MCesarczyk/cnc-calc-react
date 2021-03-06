import styled from "styled-components";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    width: 100%;
    min-height: 16rem;

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        grid-template-columns: 1fr;
    }
`;