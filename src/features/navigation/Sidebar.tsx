import { useCallback, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Navigation } from 'features/navigation/Navigation';
import { ClipboardSwitcher } from 'features/clipboard/Switcher';
import NavigationContext from './context';

export const Sidebar = () => {
  const { open, setOpen } = useContext(NavigationContext);
  const { pathname } = useLocation();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 1_000);  
  };  

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);  

  useEffect(() => {
    handleClose();
  }, [pathname, handleClose]);  

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (open && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        handleClose();
      }  
    };  

    document.addEventListener('pointerdown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('pointerdown', checkIfClickedOutside);
    };  
  }, [open, handleClose]);  

  return (
    <>
      <SidebarActivationArea onPointerEnter={handleOpen} />
      <SidebarNavigation ref={sidebarRef} $visible={open && pathname !== '/'}>
        <Navigation variant={true} />
        <ClipboardSwitcher />
      </SidebarNavigation>
    </>    
  );
};  

const SidebarActivationArea = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 100%;
  background: transparent;
`;

const SidebarNavigation = styled.div<{ $visible?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  color: ${({ theme }) => theme.color.contrastText};
  background-color: ${({ theme }) => theme.color.primary};
  padding: 1rem;
  padding-top: 6rem;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: ${({ $visible }) => $visible && 'block'};
  }
`;
