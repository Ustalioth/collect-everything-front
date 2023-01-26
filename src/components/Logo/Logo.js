import React from "react";
import logo from "../../ressources/logo.png";
import { LogoStyle } from "./Logo.styles";

export const Logo = (props) => (
  <LogoStyle>
    <div>
      <img src={logo} />
    </div>
  </LogoStyle>
);
