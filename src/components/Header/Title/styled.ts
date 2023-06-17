import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
