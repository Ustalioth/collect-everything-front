import React from "react";
import {MerchantFormStyle} from "./MerchantFormStyle";
import {Link} from "react-router-dom";

export const MerchantForm = (props) => (
    <MerchantFormStyle>
        <form>
            <h1>Vous</h1>
            <label htmlFor="firstname">
                Prénom
                <input type="text" name="firstname" placeholder="Prénom"/>
            </label>
            <label htmlFor="lastname">
                Nom
                <input type="text" name="lastname" placeholder="Nom"/>
            </label>
            <label htmlFor="email">
                Email
                <input type="text" name="email" placeholder="Email"/>
            </label>
            <label htmlFor="phone_number">
                Numéro de téléphone
                <input type="text" name="phone_number" placeholder="Numéro de téléphone"/>
            </label>
            <h1>Boutique</h1>
            <label htmlFor="shop_name">
                Nom de la boutique
                <input type="text" name="shop_name" placeholder="Nom de la boutique"/>
            </label>
            <label htmlFor="shop_logo">
                Logo de la boutique
                <input type="file" name="shop_logo"/>
            </label>
            <label htmlFor="shop_category">
                Secteur d'activité :
                <select>
                    <option>Vêtements</option>
                    <option>Electronique</option>
                    <option>Ammeublement</option>
                    <option>Automobile</option>
                </select>
            </label>

            <label htmlFor="streetNumber">
                Numéro
                <input type="text" name="streetNumber"/>
            </label>


            <label htmlFor="streetName">
                Rue
                <input type="text" name="streetName"/>
            </label>

            <label htmlFor="complement">
                Complément d'adresse
                <input type="text" name="complement"/>
            </label>


            <label htmlFor="postalCode">
                Code postal
                <input type="text" name="postalCode"/>
            </label>

            <label htmlFor="city">
                Ville
                <input type="text" name="city"/>
            </label>

            <label htmlFor="siret">
                SIRET
                <input type="text" name="siret"/>
            </label>
            <Link to="/checkout">
                <button>Envoyer</button>
            </Link>
        </form>
    </MerchantFormStyle>
);