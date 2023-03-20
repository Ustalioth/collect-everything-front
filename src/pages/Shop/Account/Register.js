import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerCustomer } from "redux/userSlice";

export const Register = (props) => {

    const dispatch = useDispatch();
    const storeId = useSelector((state) => state.shop.store.storeId);
    const [customer, setCustomer] = useState({});
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
            && (customer?.password?.length > 0)
            && (customer?.password === customer?.pwdvalidate)
        ) {
            const {pwdvalidate, ...rest} = customer;
            dispatch(registerCustomer({storeId: storeId, ...rest}));
            setCustomer({});
            setErrMsg("");
        } else {
            setErrMsg("Veuillez compléter tous les champs !");
        }
    }

    return(
        <>
            <div className="d-flex flex-column">
                <input name="firstName" type="text" placeholder="Prénom" value={customer?.firstName} onChange={handleChange} />
                <input name="lastName" type="text" placeholder="Nom" value={customer?.lastName} onChange={handleChange} />
                <input name="phoneNumber" type="text" placeholder="Téléphone" value={customer?.phoneNumber} onChange={handleChange} />
                <input name="ethAddress" type="text" placeholder="Identifiant wallet" value={customer?.ethAddress} onChange={handleChange} />
                <input name="email" type="text" placeholder="E-mail" value={customer?.email} onChange={handleChange} />
                <input name="password" type="password" placeholder="Mot de passe" value={customer?.password} onChange={handleChange} />
                <input name="pwdvalidate" type="password" placeholder="Valider mot de passe" value={customer?.pwdvalidate} onChange={handleChange} />
                
                <input type="submit" value="S'inscrire" onClick={handleSubmit} />
            </div>
            {(errMsg.length > 0) && <p>{ errMsg }</p>}
        </>
    );
}
