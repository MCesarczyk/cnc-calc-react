import styled from "styled-components";

export const SwitcherWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SwitcherButton = styled.button`
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.primaryContrast};
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: 2px;
    
    &:hover {
        filter: brightness(125%);
    }

    &:active {
        filter: brightness(150%);
    }
`;