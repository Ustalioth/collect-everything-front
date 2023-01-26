import React from "react";
import {OfferSumUpStyle} from "./OfferSumUp.style";

export const OfferSumUp = ({type, price}) => {
    return (<OfferSumUpStyle>
        <div>
            <h1>
                Votre offre :
            </h1>
            <p>
                Abonnement : {type} <br/>
                Tarif : {price}€
            </p>
        </div>
    </ OfferSumUpStyle>)
}