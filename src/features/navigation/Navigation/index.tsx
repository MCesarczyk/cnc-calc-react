import { useContext } from "react";
import LanguageContext from "../../language/context";
import { createRoutesList } from "../../../assets/utils/createRoutesList";
import NavigationList from "./List";

interface NavigationProps {
  sidebar?: boolean;
  
}

const Navigation = ({ sidebar }: NavigationProps) => {
  const { langId } = useContext(LanguageContext);
  const routes = createRoutesList(langId);

  return <NavigationList sidebar={sidebar} routes={routes} />;
};

export default Navigation;
