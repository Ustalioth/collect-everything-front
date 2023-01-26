import {useState} from "react";
import {PaymentFormStyles} from "./PaymentForm.styles";

export const PaymentForm = (props) => {

    const [type, setType] = useState("credit_card");

    const handleChangeType = (event) => setType(event.target.value);

    console.log(type);

    return (
        <PaymentFormStyles>
            <h1>
                Méthode de paiement
            </h1>
            <label htmlFor="check">
                Chèque
            </label>
            <input type="radio" id="check" name="payment_method" value="check" onChange={handleChangeType} checked={type === "check"} />
            <label htmlFor="credit_card">
                Carte de crédit
            </label>
            <input type="radio" id="credit_card" name="payment_method" value="credit_card" onChange={handleChangeType} checked={type === "credit_card"}/>

            { (type === "check" &&
                <div>
                Je m'engage à faire parvenir mon paiement par chèque à l'adresse suivante :
                13 rue des guignols
                57000 Metz
                France
                </div>)
            ||
                (<div>
                <h2>Informations carte de crédit</h2>
                <form>
                    <label htmlFor="numbers">
                        Numéro carte de crédit
                    </label>
                    <input name="numbers" type="text" placeholder="Numéro carte crédit"/>
                    <label htmlFor="expiry_date">
                        Date d'expiration
                    </label>
                    <input name="expiry_date" type="text" placeholder="Date d'expiration"/>
                    <label htmlFor="CVC">
                        CVC
                    </label>
                    <input name="CVC" type="text" placeholder="CVC"/>
                </form>
                </div>)
            }

            <button>
                Valider
            </button>
        </PaymentFormStyles>
    )
}
