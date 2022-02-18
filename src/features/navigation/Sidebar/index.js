import { useCallback, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavigationContext from "../context";
import Navigation from "../Navigation";
import { SidebarActivationArea, SidebarNavigation } from "./styled";

const Sidebar = () => {
  const { open, setOpen } = useContext(NavigationContext);
  const { pathname } = useLocation();
  const sidebarRef = useRef();

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
    const checkIfClickedOutside = e => {
      if (open && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("pointerdown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("pointerdown", checkIfClickedOutside)
    }
  }, [open, handleClose]);

  return (
    <>
      <SidebarActivationArea
        onPointerEnter={handleOpen}
      />
      <SidebarNavigation
        ref={sidebarRef}
        visible={open && pathname !== "/"}
      >
        <Navigation
          sidebar="true"
          handleClose={handleClose}
        />
      </SidebarNavigation>
    </>
  )
};

export default Sidebar;