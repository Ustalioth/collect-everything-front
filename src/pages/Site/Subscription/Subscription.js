import React from "react";
import { Navbar } from "components/Navbar/Navbar";
import { Logo } from "components/Logo/Logo";
import {MerchantForm} from "../../../components/Form/MerchantForm";
import {useLocation} from "react-router-dom";
export const Subscription = (props) => {
    const location = useLocation();

    const {state} = location;

    return (<>
        <Logo/>
        <Navbar/>
        <MerchantForm type={state.type} price={state.price}/>
    </>)
    ;
}
