import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomer } from "redux/userSlice";
import { NavMenu } from "./NavMenu";

export const MyInformations = (props) => {

    const dispatch = useDispatch();
    const [customer, setCustomer] = useState(useSelector((state) => state.user));
    const [errMsg, setErrMsg] = useState("");

    const handleChange = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((customer?.firstName?.length > 0)
            && (customer?.lastName?.length > 0)
            && (customer?.phoneNumber?.length > 0)
            && (customer?.ethAddress?.length > 0)
            && (customer?.email?.length > 0)
        ) {
            const {firstName, lastName, phoneNumber, ethAddress, email} = customer;
            if ((customer?.newPassword?.length > 0) && (customer?.newPassword === customer?.newPasswordValidate)) {
                dispatch(updateCustomer({password: customer.newPassword, firstName, lastName, phoneNumber, ethAddress, email}));
            } else {
                dispatch(updateCustomer({firstName, lastName, phoneNumber, ethAddress, email}));
            }
            setErrMsg("");
        } else {
            setErrMsg("Veuillez compléter tous les champs obligatoires !");
        }
    }

    return (
        <>
            <div className="container">
                <h1>Mon compte</h1>
                <div className="mt-4 d-flex">
                    <NavMenu />
                </div>
                <h5>Mes informations</h5>
                <div className="d-flex flex-column">
                    <input name="firstName" type="text" placeholder="Prénom" value={customer?.firstName} disabled />
                    <input name="lastName" type="text" placeholder="Nom" value={customer?.lastName} disabled />
                    <input name="phoneNumber" type="text" placeholder="Téléphone" value={customer?.phoneNumber} onChange={handleChange} />
                    <input name="ethAddress" type="text" placeholder="Identifiant wallet" value={customer?.ethAddress} onChange={handleChange} />
                    <input name="email" type="text" placeholder="E-mail" value={customer?.email} onChange={handleChange} />
                    <input name="newPassword" type="password" placeholder="Nouveau mot de passe" value={customer?.newPassword} onChange={handleChange} />
                    <input name="newPasswordValidate" type="password" placeholder="Re-saississez votre nouveau mot de passe" value={customer?.newPasswordValidate} onChange={handleChange} />

                    <input type="submit" value="Enregistrer" onClick={handleSubmit} />
                    {(errMsg.length > 0) && <p>{ errMsg }</p>}
                </div>
            </div>
        </>
    );
}