import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationWrapper = styled.div`
  align-self: flex-start;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
`;

export const Item = styled(Link)`
    color: ${({ theme }) => theme.color.primaryContrast};
    background-color: ${({ theme }) => theme.color.primary};
    display: block;
    font-size: 1.25rem;
    border-radius: 1.5rem;
    padding: 0.5rem 1.5rem;
    margin: 1rem;
    font-weight: 400;
    font-family: 'Ubuntu', sans-serif;
    margin: 0 auto 0.75rem auto;
    transition: all 0.3s ease-in-out;
    transition: transform 0.1s ease-in-out;

    &:hover {
      filter: brightness(1.5);
    }

    &:active {
      filter: brightness(1);
      transform: scale(0.98);
    }
`;