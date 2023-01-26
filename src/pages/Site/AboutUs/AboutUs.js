import React from "react";
import { Navbar } from "components/Navbar/Navbar";
import { Logo } from "components/Logo/Logo";
export const AboutUs = (props) => (
  <>
    <Logo />
    <Navbar />
      <h1>Ce que nous proposons</h1><br/>
    <p>
      Nous proposons aux marchands qui le souhaitent une offre clé en main permettant de générer et gérer facilement son site marchand
        en échange d'un paiement mensualisé.<br /><br />

        Plusieurs offres sont disponibles selon vos besoins en terme de nombre de clients, de nombre d'articles et de performances serveur.
    </p>
  </>
);
