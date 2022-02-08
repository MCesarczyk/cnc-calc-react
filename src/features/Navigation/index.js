import languages from "../../assets/fixtures/languages";
import { Item, List } from "./styled";


const Navigation = ({ langId }) => {
  const routes = [
    { id: 1, path: '/surface-speed', label: languages[langId].form1Legend },
    { id: 2, path: '/spindle-speed', label: languages[langId].form2Legend },
    { id: 3, path: '/feedrate', label: languages[langId].form3Legend },
    { id: 4, path: '/tapping-feed', label: languages[langId].form4Legend },
  ];

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