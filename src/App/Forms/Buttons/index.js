import { ButtonsContainer, Button } from "./styled";

const Buttons = () => (
    <ButtonsContainer>
        <Button type="submit">
            Oblicz
        </Button>
        <Button type="reset">
            Wyczyść
        </Button>
    </ButtonsContainer>
);

export default Buttons;