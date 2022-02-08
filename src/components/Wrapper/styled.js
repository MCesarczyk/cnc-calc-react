import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    padding: 1rem;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;