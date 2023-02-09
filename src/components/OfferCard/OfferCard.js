import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/colors";
import { OfferCardStyle } from "./OfferCard.styles";

export const OfferCard = (props) => (
  <OfferCardStyle>
    <div className="mainOfferDiv" style={{ backgroundColor: props.color }}>
      <div className="firstOfferDiv">
        <span>{props.type} Membership</span>
        <span>{props.price}€</span>
        <span>{props.description}</span>
        <Link to="/checkout">
          <button>Select</button>
        </Link>
      </div>
      <div className="secondOfferDiv">
        <li>
          {props.benefits.map((benefit) => (
            <ul>{benefit}</ul>
          ))}
        </li>
      </div>
    </div>
  </OfferCardStyle>
);
