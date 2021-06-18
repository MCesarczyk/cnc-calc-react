import "./style.css";

const Footer = ({ content, annotation, link }) => (
  <footer className="footer">
    <p className="footer__content">
      {content}
    </p>
    <p className="footer__annotation">
      {annotation}{link}
    </p>
  </footer>
);

export default Footer;