import React, { useState } from "react";
import { StyledLink } from "./styled";

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Link = ({ adress, text }) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <StyledLink
      status={status}
      href={adress || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </StyledLink>
  )
};

export default Link;