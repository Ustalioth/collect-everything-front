import React from "react";
import { NavMenu } from "./NavMenu";

export const MyAccount = (props) => {

    return (
        <>
            <div className="container">
                <h1>Mon compte</h1>
                <div className="mt-4 d-flex">
                    <NavMenu />
                </div>
                <div className="border mt-4">
                    <h5>Demandes de rectification et de suppression</h5>
                    <p>Vous avez le droit de modifier toutes les informations personnelles sur la page "Mon compte".</p>
                    <p>Pour toute autre demande de modification ou de suppression de vos données personnelles, veuillez nous contacter via votre page de contact.</p>
                    <p>Nous examinerons votre demande et nous vous répondrons dès que possible.</p>
                </div>
            </div>
        </>
    );
}