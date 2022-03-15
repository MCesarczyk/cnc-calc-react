import { useContext } from "react";
import LanguageContext from "../../language/context";
import { createRoutesList } from "../../../assets/utils/createRoutesList";
import NavigationList from "./List";

const Navigation = ({ sidebar }) => {
  const { langId } = useContext(LanguageContext);
  const routes = createRoutesList(langId);

  return (
    <NavigationList
      sidebar={sidebar}
      routes={routes}
    />
  )
};

export default Navigation;