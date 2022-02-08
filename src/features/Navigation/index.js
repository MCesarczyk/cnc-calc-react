import { createRoutesList } from "../../assets/utils/createRoutesList";
import { Item, List } from "./styled";

const Navigation = ({ langId }) => {

  const routes = createRoutesList(langId);

  return (
    <nav>
      <List>
        {routes.map(route => (
          <li key={route.id}>
            <Item to={route.path} >{route.label}</Item>
          </li>
        ))}
      </List>
    </nav>
  )
};

export default Navigation;