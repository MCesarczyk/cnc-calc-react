import "./style.css";

const Header = ({ title }) => (
    <header id="start">
        <h1 className="header__headline">{title}</h1>
    </header>
);

export default Header;