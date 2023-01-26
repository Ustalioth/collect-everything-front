import {PaymentForm} from "../../../components/Checkout/PaymentForm";
import {Logo} from "../../../components/Logo/Logo";
import {Navbar} from "../../../components/Navbar/Navbar";

export const Checkout = (props) => (
    <>
        <Logo />
        <Navbar />
        <PaymentForm />
    </>
);