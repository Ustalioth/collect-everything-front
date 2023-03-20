import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "pages/Shop/Navbar/Navbar";
import { login } from "redux/authSlice";
import { Register } from "./Register";

export const ShopLogin = () => {

    const dispatch = useDispatch();
    
    const token = useSelector(state => state.token);

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        status: "",
        attempts: ""
    });

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {
        dispatch(login(credentials.email, credentials.password));
    }

    return(
        <>
            <Navbar />
            <h1>Login</h1>
            <div className="d-flex">
                <div className="container">
                    <input type={"text"} name={"email"} placeholder="Email" value={credentials.email} onChange={handleChange} />
                    <input type={"password"} name={"password"} placeholder="Password" value={credentials.password} onChange={handleChange} />
                    <input type={"submit"} value={"Connexion"} onClick={handleSubmit} />
                </div>
                <div className="container">
                    <Register />
                </div>
            </div>
        </>
    )
}