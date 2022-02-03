import React from "react";
import Link from "../../Link";

const FooterLink = ({ adress, text, prefix }) => (
  <>
    {prefix}
    {' '}
    <Link
      adress={adress}
      text={text}
    />
  </>
);

export default FooterLink;