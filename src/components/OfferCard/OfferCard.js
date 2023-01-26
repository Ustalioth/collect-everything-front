import React from "react";
import { Link } from "react-router-dom";
import { OfferCardStyle } from "./OfferCard.styles";

export const OfferCard = (props) => (
  <OfferCardStyle>
    <div className="mainOfferDiv" style={{ backgroundColor: props.color }}>
      <div className="firstOfferDiv">
        <span>Abonnement {props.type}</span>
        <span>{props.price}€</span>
        <span>{props.description}</span>
        <Link to="/subscription" state={{type: props.type, price: props.price}}>
          <button>Select</button>
        </Link>
      </div>
      <div className="secondOfferDiv">
        <ul>
          {props.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  </OfferCardStyle>
);
