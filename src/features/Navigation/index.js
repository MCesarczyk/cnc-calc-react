import { createRoutesList } from "../../assets/utils/createRoutesList";
import { Item, List, NavigationWrapper } from "./styled";

const Navigation = ({ langId }) => {

  const routes = createRoutesList(langId);

  return (
    <NavigationWrapper>
      <List>
        {routes.map(route => (
          <li key={route.id}>
            <Item to={route.path} >{route.label}</Item>
          </li>
        ))}
      </List>
    </NavigationWrapper>
  )
};

export default Navigation;