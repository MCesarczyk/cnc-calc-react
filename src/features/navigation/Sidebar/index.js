import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavigationContext from "../context";
import Navigation from "../Navigation";
import { SidebarActivationArea, SidebarNavigation } from "./styled";

const Sidebar = ({ open, setOpen }) => {
  const context = useContext(NavigationContext);
  
  useEffect(() => {
    console.log(context.open, context.setOpen);
  }, [context]);

  const { pathname } = useLocation();

  const handleOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 1_000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SidebarActivationArea
        onPointerEnter={handleOpen}
      />
      <SidebarNavigation
        visible={open && pathname !== "/"}
        onPointerLeave={handleClose}
      >
        <Navigation
          sidebar="true"
          baseUrl="cnc-calc-react/"
          handleClose={handleClose}
        />
      </SidebarNavigation>
    </>
  )
};

export default Sidebar;