import { HomeLink, Headline } from "./styled";

const Title = ({ title }) => (
  <HomeLink to="/">
    <Headline>
      {title}
    </Headline>
  </HomeLink>
);

export default Title;