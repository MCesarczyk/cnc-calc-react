import { createRoutesList } from "../../assets/utils/createRoutesList";
import { Item, List } from "./styled";

const Navigation = ({ langId }) => {

  const routes = createRoutesList(langId);

  return (
    <List>
      {routes.map(route => (
        <li key={route.id}>
          <Item
            to={route.path}
            onClick={()=>console.log('jedziemy')}
          >
            {route.label}
          </Item>
        </li>
      ))}
    </List>
  )
};

export default Navigation;