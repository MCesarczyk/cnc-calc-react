import languages from "../../assets/fixtures/languages";
import Navigation from "../../features/Navigation";
import { MobileNavWrapper } from "../../features/Navigation/styled";
import { HomeTitle } from "./styled";

const Home = ({ langId }) => (
  <>
    <HomeTitle>
      {languages[langId]?.welcomeTitle}
    </HomeTitle>
    <MobileNavWrapper>
      <Navigation langId={langId} />
    </MobileNavWrapper>
  </>
);

export default Home;