import languages from "../../assets/fixtures/languages";
import { HomeTitle } from "./styled";

const Home = ({ langId }) => (
  <HomeTitle>
    {languages[langId]?.welcomeTitle}
  </HomeTitle>
);

export default Home;