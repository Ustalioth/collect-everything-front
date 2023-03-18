import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { changeQuantity, removeItem } from "redux/cartSlice";
import {Navbar} from "pages/Shop/Navbar/Navbar";
import Web3 from "web3";
import axios from "axios";
import tokenAbi from 'ressources/CollectEverythingABI.json';
import {useTranslation} from 'react-i18next';
import {API_BASE_URI} from "../../../api/config";
import instance from "../../../services/Axios/AxiosInstance";


const TAX_RATE = 0.05;

export const Cart = (props) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const store = useSelector((state) => state.shop.store);
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user) || {};
    const token = useSelector((state) => state.token);

    const [walletCurrentAccount, setWalletCurrentAccount] = useState(null);

    const [customerInfo, setCustomerInfo] = useState({...user, ethAddress: "0x000000"});

    const handleChangeCustomerInfo = (e) => {
        setCustomerInfo({...customerInfo, [e.target.name]: e.target.value});
    }

    const [orderSummary, setOrderSummary] = useState({
        basePrice: 0,
        discount: 0,
        deliveryFee: 0,
        subTotal: 0,
        taxes: 0,
        totalPrice: 0,
        totalQuantity: 0
    });

    const getCartTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
    }

    const handleConnectWallet = () => {
        let {ethAddress, ...rest} = customerInfo;

        window?.ethereum
            .request({method: 'eth_accounts'})
            .then(connectedAccounts => {
                if (connectedAccounts.length > 0) {
                    setWalletCurrentAccount(connectedAccounts[0]);
                    setCustomerInfo({...rest, ethAddress: connectedAccounts[0]});
                } else {
                    window?.ethereum
                        .request({method: 'eth_requestAccounts'})
                        .then(availableAccounts => {
                            setWalletCurrentAccount(availableAccounts[0]);
                            setCustomerInfo({...rest, ethAddress: availableAccounts[0]});
                        })
                        .catch(err => {
                            setWalletCurrentAccount(null);
                            setCustomerInfo({...rest, ethAddress: "0x000000"});
                        });
                }
            })
            .catch(err => {
                setWalletCurrentAccount(null);
                setCustomerInfo({...rest, ethAddress: "0x000000"});
            });
    }

    const handleCreateOrder = () => {
        // si transaction de paiement réussit, on crée la commande en back

        const web3 = new Web3(Web3.givenProvider);

        const ETHEREUM_SYMBOL = 'ETH';
        const CURRENCY = 'EUR';

        const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${ETHEREUM_SYMBOL}&tsyms=${CURRENCY}`;

        let ethPrice;
        let merchantAddress;

        axios.get(API_BASE_URI + "/store/" + store.storeId)
            .then(response => {
                merchantAddress = response.data['ethAddress'];

                axios.get(apiUrl)
                    .then(response => {
                        ethPrice = response.data[CURRENCY];

                        createOrderAndPay();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });

        function createOrderAndPay(){
            if (
                ethPrice !== undefined
                && merchantAddress !== undefined
                && store?.storeId !== undefined
                && token !== undefined
                ) {

                let params = '[';

                cart.forEach(item => {
                    for (let index = 0; index < item.quantity; index++) {
                        params += `{"price" : ${item.price}, "productId" : ${item.productId}}`
                        if(index !== item.quantity - 1){
                            params += ',';
                        }
                    }
                });

                params += ']';

                let orderId;

                //Create order
                instance.put(API_BASE_URI + "/order/save/" + store.storeId + "/" + user.customerId, JSON.parse(params))
                    .then(response => {
                        orderId = response.data?.orderId;

                        if(orderId !== undefined){
                            // call payment
                            let priceInEur = 0;
                            cart.map((item) => {
                                priceInEur += item.price * item.quantity
                            })

                            let priceToPayInEth = String(priceInEur / ethPrice);

                            // create an instance of the ERC20 token contract
                            const tokenContract = new web3.eth.Contract(tokenAbi, "0x4f0d7ade7c2806deaf1dc7499c9edbd2f558b282");

                            // call the myMethod function on the smart contract and send the tokens
                            tokenContract.methods.pay(merchantAddress, orderId, token).send({
                                from: walletCurrentAccount,
                                value: web3.utils.toHex(web3.utils.toWei(priceToPayInEth, "ether"))
                            }).on('receipt', (receipt) => {
                                console.log('Transaction receipt:', receipt);
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });


        }

            // call update OrderStatus (order paid or not paid)
            // ...
        }

    }

    const handleChangeItemQuantity = (productId, quantity) => {
        dispatch(changeQuantity({productId: productId, quantity: quantity}))
    }

    const computeDeliveryFee = (amount) => {
        return ((amount === 0) || (amount >= 100)) ? 0 : 10;
    }

    useEffect(() => {
        let basePrice = 0;
        let discount = 0;
        let deliveryFee = 0;
        let subTotal = 0;
        let taxes = 0;
        let totalPrice = 0;
        let totalQuantity = 0;
        cart.forEach(item => {
            totalQuantity += item.quantity;
            basePrice += Math.round((item.price * item.quantity) * 100) / 100;
        });
        deliveryFee = computeDeliveryFee(basePrice);
        subTotal = Math.round((basePrice - discount + deliveryFee) * 100) / 100;
        taxes = Math.round((subTotal * TAX_RATE) * 100) / 100;
        totalPrice = Math.round((subTotal + taxes) * 100) / 100;
        setOrderSummary({
            basePrice: basePrice,
            discount: discount,
            deliveryFee: deliveryFee,
            subTotal: subTotal,
            taxes: taxes,
            totalPrice: totalPrice,
            totalQuantity: totalQuantity
        })
    }, [cart]);

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
                                <th className="col-1">Supprimer</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cart && cart?.map(item =>
                                <tr key={item?.productId}>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}</td>
                                    <td><input type="number" defaultValue={item?.quantity} onChange={(e) => handleChangeItemQuantity(item.productId, e.target.value)} /></td>
                                    <td>{item?.quantity * item?.price}</td>
                                    <td><span onClick={() => dispatch(removeItem(item.productId))}>Del</span></td>
                                </tr>
                            )}
                            </tbody>
                        </table>

                        <div className="row">
                            <div className="col-6">
                                <h5>Facturation</h5>
                                <div className="input-group input-group-sm mb-3">
                                    <input name={"firstname"} type="text" placeholder="Prénom" onChange={handleChangeCustomerInfo} />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input name={"lastname"} type="text" placeholder="Nom" onChange={handleChangeCustomerInfo} />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input name={"address"} type="text" placeholder="Addresse" onChange={handleChangeCustomerInfo} />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input name={"zipcode"}  type="text" placeholder="Code Postal" onChange={handleChangeCustomerInfo} />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input name={"city"} type="text" placeholder="Ville" onChange={handleChangeCustomerInfo} />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input name={"phoneNumber"} type="text" placeholder="Téléphone" onChange={handleChangeCustomerInfo} />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input name={"email"} type="text" placeholder="E-mail" onChange={handleChangeCustomerInfo} />
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
                            <div>{orderSummary.basePrice} €</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Réduction</div>
                            <div>{orderSummary.discount} €</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Livraison</div>
                            <div>{orderSummary.deliveryFee} €</div>
                        </div>
                        <div className="d-flex justify-content-between border-top">
                            <div>Sous-total</div>
                            <div>{orderSummary.subTotal} €</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Taxes</div>
                            <div>{orderSummary.taxes} €</div>
                        </div>
                        <div className="d-flex justify-content-between border-top">
                            <div>Total</div>
                            <div>{orderSummary.totalPrice} €</div>
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