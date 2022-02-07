import { Headline } from "./styled";

const Header = ({ title }) => (
    <header id="start">
        <Headline>
            {title}
        </Headline>
    </header>
);

export default Header;