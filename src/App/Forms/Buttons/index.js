import languages from "../../../assets/fixtures/languages";
import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ langID: langId }) => (
    <ButtonsContainer>
        <Button type="submit">
            {languages[langId].buttonLabel.submit}
        </Button>
        <Button type="reset">
            {languages[langId].buttonLabel.reset}
        </Button>
    </ButtonsContainer>
);

export default Buttons;