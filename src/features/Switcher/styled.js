import styled from "styled-components";

export const SwitcherWrapper = styled.div`
    text-align: end;
    margin: 0px 20px 10px 10px;
`;

export const SwitcherButton = styled.button`
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.primaryContrast};
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: 5px;
    
    &:hover {
        filter: brightness(125%);
    }

    &:active {
        filter: brightness(150%);
    }
`;