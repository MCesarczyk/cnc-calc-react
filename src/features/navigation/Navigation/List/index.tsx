import { Item, List } from "./styled";

interface NavigationListProps {
  sidebar?: boolean;
  routes?: {
    id: number;
    path: string;
    label: string;
  }[];
}

const NavigationList = ({ sidebar, routes }: NavigationListProps) => (
  <List>
    {routes?.map((route) => (
      <li key={route.id}>
        <Item sidebar={sidebar} to={route.path}>
          {route.label}
        </Item>
      </li>
    ))}
  </List>
);

export default NavigationList;
