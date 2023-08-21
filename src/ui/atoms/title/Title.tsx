import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  url: string;
}

export const Title = ({ title, url }: TitleProps) => (
  <HomeLink to={url}>
    <Headline>{title}</Headline>
  </HomeLink>
);

const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;

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

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  color: inherit;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1.5rem;
  }
`;
