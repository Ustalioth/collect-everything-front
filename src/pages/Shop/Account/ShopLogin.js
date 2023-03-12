import React, { useState } from "react";
import { Navbar } from "pages/Shop/Navbar/Navbar";
import { login } from "redux/authSlice";

export const ShopLogin = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        status: ""
    });

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {

    }

    return(
        <>
            <Navbar></Navbar>
            <h1>Login</h1>
            <input type={"text"} name={"email"} placeholder="Email" value={credentials.email} onChange={handleChange} />
            <input type={"password"} name={"password"} placeholder="Password" value={credentials.password} onChange={handleChange} />
            <input type={"submit"} name={"Connexion"} onClick={handleSubmit} />
        </>
    )
}