import { useContext } from 'react';
import styled from 'styled-components';

import LanguageContext from 'features/language/context';
import { createRoutesList } from 'utils/createRoutesList';
import { NavigationList } from './NavigationList';

export type NavigationVariant = 'DEFAULT' | 'SIDEBAR' | 'MOBILE';

interface NavigationProps {
  variant: NavigationVariant;
}  

export const Navigation = ({ variant }: NavigationProps) => {
  const { langId } = useContext(LanguageContext);
  const routes = createRoutesList(langId);

  return <NavigationList variant={variant} routes={routes} />;
};  

export const NavigationWrapper = styled.div`
  align-self: flex-start;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const MobileNavWrapper = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
  }
`;
