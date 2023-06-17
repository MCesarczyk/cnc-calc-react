import styled from 'styled-components';

export const SidebarActivationArea = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 100%;
  background: transparent;
`;

export const SidebarNavigation = styled.div<{ $visible?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  color: ${({ theme }) => theme.color.primaryContrast};
  background-color: ${({ theme }) => theme.color.primary};
  padding: 1rem;
  padding-top: 6rem;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: ${({ $visible }) => $visible && 'block'};
  }
`;
