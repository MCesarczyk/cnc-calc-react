import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavigationListProps {
  sidebar?: boolean;
  routes?: {
    id: number;
    path: string;
    label: string;
  }[];
}

export const NavigationList = ({ sidebar, routes }: NavigationListProps) => (
  <List>
    {routes?.map((route) => (
      <li key={route.id}>
        <Item $sidebar={sidebar} to={route.path}>
          {route.label}
        </Item>
      </li>
    ))}
  </List>
);

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const Item = styled(NavLink)<{ $sidebar?: boolean }>`
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

  &.active {
    color: ${({ theme }) => theme.color.activeNavlinkText};
  }

  ${({ $sidebar }) =>
    $sidebar &&
    css`
      border-radius: 0;
      border-bottom: 1px solid currentColor;
      background-color: transparent;
      transition: transform 0.1s ease-in-out;

      &:hover {
        filter: brightness(0.8);
        transform: scale(1.02);
      }

      &:active {
        filter: brightness(1);
        transform: scale(0.98);
      }
    `}
`;
