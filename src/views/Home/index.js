import languages from "../../assets/fixtures/languages";
import Navigation from "../../features/navigation/Navigation";
import { MobileNavWrapper } from "../../features/navigation/Navigation/styled";
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