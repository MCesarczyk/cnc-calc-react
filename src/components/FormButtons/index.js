import languages from "../../assets/fixtures/languages";
import { ButtonsContainer } from "./styled";
import { Button } from "./Button";

const FormButtons = ({ langID: langId }) => (
    <ButtonsContainer>
        <Button type="submit">
            {languages[langId]?.buttonLabel.submit}
        </Button>
        <Button type="reset">
            {languages[langId]?.buttonLabel.reset}
        </Button>
    </ButtonsContainer>
);

export default FormButtons;