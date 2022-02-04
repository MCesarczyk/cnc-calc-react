import { StyledLink } from "./styled";

const Link = ({ adress, text }) => (
  <StyledLink
    href={adress || '#'}
  >
    {text}
  </StyledLink>
);

export default Link;