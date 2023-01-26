import React from "react";
import { Navbar } from "components/Navbar/Navbar";
import { ContactUsStyle } from "./ContactUs.style";
import { Logo } from "components/Logo/Logo";

export const ContactUs = (props) => (
  <ContactUsStyle>
    <Logo />
    <Navbar />
    <form>
      <label for="message">Votre message :</label>
      <textarea type="text" name="message" />
      <label for="email">Votre addresse email :</label>
      <input type="text" name="email" />
      <input type="submit" value="Send" />
    </form>
  </ContactUsStyle>
);
