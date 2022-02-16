import { useContext } from "react";
import LanguageContext from "../../language/context";
import { createRoutesList } from "../../../assets/utils/createRoutesList";
import { Item, List } from "./styled";

const Navigation = ({ sidebar, baseUrl }) => {
  const { langId } = useContext(LanguageContext);
  const routes = createRoutesList(langId);

  return (
    <List>
      {routes.map(route => (
        <li key={route.id}>
          <Item
            sidebar={sidebar}
            to={`${baseUrl || ''}${route.path}`}
          >
            {route.label}
          </Item>
        </li>
      ))}
    </List>
  )
};

export default Navigation;