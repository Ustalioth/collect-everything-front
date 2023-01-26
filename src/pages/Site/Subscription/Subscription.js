import React from "react";
import { Navbar } from "components/Navbar/Navbar";
import { Logo } from "components/Logo/Logo";
import {MerchantForm} from "../../../components/Form/MerchantForm";
import {useLocation} from "react-router-dom";
import {OfferSumUp} from "../../../components/OfferSumUp/OfferSumUp";
export const Subscription = (props) => {
    const location = useLocation();

    const {state} = location;

    return (<>
        <Logo/>
        <Navbar/>
        <OfferSumUp type={state.type} price={state.price}/>
        <MerchantForm />
    </>)
    ;
}
