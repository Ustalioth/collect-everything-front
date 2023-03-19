import React from "react";
import { Navbar } from "components/Navbar/Navbar";
import { Logo } from "components/Logo/Logo";
import {MerchantForm} from "../../../components/Form/MerchantForm";
export const Subscription = (props) => (
  <>
    <Logo />
    <Navbar />
    <MerchantForm />
  </>
);
