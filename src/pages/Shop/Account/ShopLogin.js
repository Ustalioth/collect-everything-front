import React, {useEffect, useState} from "react";
import {Navbar} from "../Navbar/Navbar";

export const ShopLogin = () => {

    return(
        <>
            <Navbar></Navbar>
            <h1>Login</h1>
            <input type={"text"} name={"email"}/>
            <input type={"password"} name={"password"}/>
            <input type={"submit"} name={"submit"}/>
        </>
    )
}