import React, { useState } from 'react';
import Cards from 'react-credit-cards';

export const Payment = () => {
    const [state, setState] = useState({
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    });
   
    const handleInputFocus = (e) => {
      this.setState({ focus: e.target.name });
    }
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      
      this.setState({ [name]: value });
    }
    
    return (
    <div id="PaymentForm">
        <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
        />
        <form>
            <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
        />
        ...
        </form>
    </div>
    );
  }