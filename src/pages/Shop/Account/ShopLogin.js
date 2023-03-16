import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "pages/Shop/Navbar/Navbar";
import { login } from "redux/authSlice";

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

    useEffect(() => {

    }, [token]);

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