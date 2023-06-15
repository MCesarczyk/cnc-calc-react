import styled from "styled-components";

export const SwitcherWrapper = styled.div`
    display: flex;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        flex-direction: column;
    }
`;