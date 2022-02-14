import { createRoutesList } from "../../assets/utils/createRoutesList";
import { Item, List } from "./styled";

const Navigation = ({ langId, handleClose, base }) => {
  const routes = createRoutesList(langId);

  return (
    <List>
      {routes.map(route => (
        <li key={route.id}>
          <Item
            sidebar={base}
            to={`${base || ''}${route.path}`}
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