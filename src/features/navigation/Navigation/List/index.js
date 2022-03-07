import { Item, List } from "./styled";

const NavigationList = ({ sidebar, routes }) => (
  <List>
    {routes?.map(route => (
      <li key={route.id}>
        <Item
          sidebar={sidebar}
          to={route.path}
        >
          {route.label}
        </Item>
      </li>
    ))}
  </List>
);

export default NavigationList;