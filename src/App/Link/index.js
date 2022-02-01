import React, { useState } from "react";
import "./style.css";

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
    <a
      className={status}
      href={adress || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </a>
  )
};

export default Link;