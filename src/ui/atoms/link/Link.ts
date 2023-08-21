import styled from 'styled-components';

interface LinkProps {
  href: string;
}

export const Link = styled.a<LinkProps>`
  color: inherit;
  transition: 0.5s ease-out;

  &:hover {
    color: crimson;
  }
`;
