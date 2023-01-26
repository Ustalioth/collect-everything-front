import React from "react";
import { Navbar } from "components/Navbar/Navbar";
import { Logo } from "components/Logo/Logo";
import {MerchantForm} from "../../../components/Form/MerchantForm";
export const Subscription = (props) => {
    const {type, price} = props;

    console.log(props);

    return (<>
        <Logo/>
        <Navbar/>
        <MerchantForm/>
        <h1>{type}</h1>
    </>)
    ;
}
