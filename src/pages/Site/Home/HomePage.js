import React from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { OfferCard } from "../../../components/OfferCard/OfferCard";
import { HomePageStyles } from "./HomePage.styles";
import { Logo } from "components/Logo/Logo";
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
            description={"Basic but efficient"}
            benefits={["benefit 1", "benefit 2", "benefit 3"]}
          />
        </div>
        <div className="col-sm-4">
          <OfferCard
            className="col-md-4"
            color={"gold"}
            type={"Gold"}
            price={"30"}
            description={"Old but gold"}
            benefits={["benefit 1", "benefit 2", "benefit 3"]}
          />
        </div>
        <div className="col-sm-4">
          <OfferCard
            className="col-md-4"
            color={"#E5E4E2"}
            type={"Platinum"}
            price={"40"}
            description={"pkmn"}
            benefits={["benefit 1", "benefit 2", "benefit 3"]}
          />
        </div>
      </div>
    </div>
  </HomePageStyles>
);
