import React, {useState} from "react";
import {useSelector} from 'react-redux';
import {Navbar} from "pages/Shop/Navbar/Navbar";
import Web3 from "web3";
import axios from "axios";

export const Cart = (props) => {
    const cart = useSelector((state) => state.cart);

    const [customer, setCustomer] = useState({
        customerId: 0,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        storeId: "",
    });

    const [payment, setPayment] = useState({});

    const [walletCurrentAccount, setWalletCurrentAccount] = useState(null);

    const handleConnectWallet = () => {
        window?.ethereum
            .request({method: 'eth_accounts'})
            .then(connectedAccounts => {
                if (connectedAccounts.length > 0) {
                    setWalletCurrentAccount(connectedAccounts[0]);
                } else {
                    window?.ethereum
                        .request({method: 'eth_requestAccounts'})
                        .then(availableAccounts => setWalletCurrentAccount(availableAccounts[0]))
                        .catch(err => setWalletCurrentAccount(null));
                }
            })
            .catch(err => setWalletCurrentAccount(null));
    }

    const handleCreateOrder = () => {
        // si transaction de paiement réussit, on crée la commande en back

        let web3 = new Web3();

        const ETHEREUM_SYMBOL = 'ETH';
        const CURRENCY = 'EUR';

        const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${ETHEREUM_SYMBOL}&tsyms=${CURRENCY}`;

        let ethPrice;

        axios.get(apiUrl)
            .then(response => {
                console.log(response);
                ethPrice = response.data[CURRENCY];
                createOrderAndPay();
            })
            .catch(error => {
                console.log(error);
            });

        function createOrderAndPay(){
            if (ethPrice !== undefined) {

                // call create order
                // ...

                // call update newly created order with purchase list
                // ...

                // call payment
                let priceInEur = 100; // @TODO Valeur FICTIVE à remplacer par la valeur réelle du panier
                let priceToPayInEth = String(priceInEur / ethPrice);
                console.log(priceToPayInEth);
                try {
                    const transactionHash = window?.ethereum.request({
                        method: 'eth_sendTransaction',
                        params: [
                            {
                                to: '0x41795E219A93d688bFd19d83403eAa852E291d73',
                                from: walletCurrentAccount,
                                value: web3.utils.toHex(web3.utils.toWei(priceToPayInEth, "ether")),
                            },
                        ],
                    });
                    // Handle the result
                    console.log(transactionHash);
                } catch (error) {
                    console.error(error);
                }
        }

            // call update OrderStatus (order paid or not paid)
            // ...
        }

    }

    return (
        <>
            <Navbar/>
            <div className="container">
                <h1>Paiement</h1>
                <div className="row">
                    <div className="col-9">
                        <h5>Votre panier</h5>
                        <table className="table">
                            <thead className="thead-dark">
                            <tr>
                                <th className="col-8">Article</th>
                                <th className="col-1">Prix</th>
                                <th className="col-1">Quantité</th>
                                <th className="col-1">Total</th>
                                <th className="col-1"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {cart && cart?.map(item =>
                                <tr key={item?.productId}>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}</td>
                                    <td><input type="number" value={item?.quantity}/></td>
                                    <td>{item?.quantity * item?.price}</td>
                                    <td></td>
                                </tr>
                            )}
                            </tbody>
                        </table>

                        <div className="row">
                            <div className="col-6">
                                <h5>Facturation</h5>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="Prénom"/>
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="Nom"/>
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="Addresse"/>
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="Code Postal"/>
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="Ville"/>
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="Téléphone"/>
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="E-mail"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <h5>Moyen de paiement</h5>
                                <br/>
                                <p>Le paiement privilégié est la crytomonnaie Ether</p>
                                {(!walletCurrentAccount &&
                                    <>
                                        <p>Vérifiez que vous êtes bien connecté à votre wallet :</p>
                                        <button onClick={handleConnectWallet}>Me connecter à mon wallet</button>
                                    </>
                                ) || (
                                    <span>Vous êtes connecté sur le compte: {walletCurrentAccount}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-3 border-left">
                        <h2>Résumé</h2>
                        <div className="d-flex justify-content-between">
                            <div>Total panier</div>
                            <div>{} €</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Réduction</div>
                            <div>{} €</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Livraison</div>
                            <div>{} €</div>
                        </div>
                        <div className="d-flex justify-content-between border-top">
                            <div>Sous-total</div>
                            <div>{} €</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Taxes</div>
                            <div>{} €</div>
                        </div>
                        <div className="d-flex justify-content-between border-top">
                            <div>Total</div>
                            <div>{} €</div>
                        </div>
                        <div>
                            <button
                                className="btn btn-primary"
                                disabled={(walletCurrentAccount === null)}
                                onClick={handleCreateOrder}
                            >
                                Commander
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}