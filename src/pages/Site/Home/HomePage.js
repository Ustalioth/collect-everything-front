import React from "react";
import { OfferCard } from "../../../components/OfferCard/OfferCard";
import { HomePageStyles } from "./HomePage.styles";
export const HomePage = (props) => (
  <HomePageStyles>
    <div>
      <div className="row offersRow">
        <div className="col-sm-4">
          <OfferCard
            className="col-md-4"
            color={"silver"}
            type={"Silver"}
            price={"20"}
            description={"Basique mais efficace"}
            benefits={["Jusqu'à 1000 clients", "Jusqu'à 100 produits", "Performances limitées"]}
          />
        </div>
        <div className="col-sm-4">
          <OfferCard
            className="col-md-4"
            color={"gold"}
            type={"Gold"}
            price={"50"}
            description={"Notre best-seller"}
            benefits={["Jusqu'à 10000 clients", "Jusqu'à 500 produits", "Bonnes performances"]}
          />
        </div>
        <div className="col-sm-4">
          <OfferCard
            className="col-md-4"
            color={"#E5E4E2"}
            type={"Platinum"}
            price={"100"}
            description={"Le top du top"}
            benefits={["Aucune limite de clients", "Aucune limite de produits", "Performances exceptionnelles"]}
          />
        </div>
      </div>
    </div>
  </HomePageStyles>
);
