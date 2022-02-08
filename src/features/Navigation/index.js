import { Item, List } from "./styled";

const Navigation = ({ languages, langId }) => (
  <nav>
    <List>
      <li>
        <Item to="/surface-speed">{languages[langId].form1Legend}</Item>
      </li>
      <li>
        <Item to="/spindle-speed">{languages[langId].form2Legend}</Item>
      </li>
      <li>
        <Item to="/feedrate">{languages[langId].form3Legend}</Item>
      </li>
      <li>
        <Item to="/tapping-feed">{languages[langId].form4Legend}</Item>
      </li>
    </List>
  </nav>
);

export default Navigation;