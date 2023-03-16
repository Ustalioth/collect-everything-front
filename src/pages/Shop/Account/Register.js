import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const Register = (props) => {

    const dispatch = useDispatch();
    const [customer, setCustomer] = useState({});

    const handleChange = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {

    }

    return(
        <form>
            <input name="firstName" type="text" placeholder="Prénom" onChange={handleChange} />
            <input name="lastName" type="text" placeholder="Nom" onChange={handleChange} />
            <input name="email" type="text" placeholder="E-mail" onChange={handleChange} />
            <input name="phoneNumber" type="text" placeholder="Téléphone" onChange={handleChange} />
            <input name="ethAddress" type="text" placeholder="Identifiant wallet" onChange={handleChange} />
            <input type="submit">S'inscrire</input>
        </form>
    );
}