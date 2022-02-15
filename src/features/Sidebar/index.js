import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import { SidebarActivationArea, SidebarNavigation } from "./styled";

const Sidebar = ({ langId, open, setOpen }) => {
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
          langId={langId}
          sidebar="true"
          baseUrl="cnc-calc-react/"
          handleClose={handleClose}
        />
      </SidebarNavigation>
    </>
  )
};

export default Sidebar;