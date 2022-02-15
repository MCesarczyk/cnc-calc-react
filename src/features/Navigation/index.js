import { createRoutesList } from "../../assets/utils/createRoutesList";
import { Item, List } from "./styled";

const Navigation = ({ langId, handleClose, sidebar, baseUrl }) => {
  const routes = createRoutesList(langId);

  return (
    <List>
      {routes.map(route => (
        <li key={route.id}>
          <Item
            sidebar={sidebar}
            to={`${baseUrl || ''}${route.path}`}
            onClick={handleClose}
          >
            {route.label}
          </Item>
        </li>
      ))}
    </List>
  )
};

export default Navigation;