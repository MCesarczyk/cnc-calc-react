import React from "react";
import Link from "../../../components/Link";

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