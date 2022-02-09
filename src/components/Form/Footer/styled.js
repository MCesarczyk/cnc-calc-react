import styled from "styled-components";

export const ButtonsContainer = styled.div`
    max-width: 30rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 0.75rem;

    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
        flex-direction: column;
        align-items: stretch;
    }
`;