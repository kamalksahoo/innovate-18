import React , {useState , useEffect} from "react";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "./backend";
const axios = require("axios");

const StripeCheckout = (props) => {
  
  const [bill,setBill] = useState(3000);
  
  const calculateBill = () => {
    // console.log(props.total);
    setBill(props.total);
    // console.log(bill);
  }
  useEffect(()=>{
    calculateBill();
  })

  const makePayment = () => {
    return axios
      .post(
        `${API}/api/stripepayment`,
        {
          "token" : props.token
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert("payment success")
        // console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const showStripeButton = () => {
    return (
      <StripeCheckoutButton
        stripeKey="pk_test_51HZtvCE9V1Mh9c702tFX3tNMcB3JvjxSvxWOHwrDMlvu7GxqBXbuniwOBiwl1DhIqpZ042zfV56GnRpjo940Y1Q800XLMWcoPz"
        token={makePayment}
        amount={bill}
        name="Buy Vegetables"
      >
        <button disabled={props.disabled} className="btn btn-success">Pay with stripe</button>
      </StripeCheckoutButton>
    );
  }; 

  return (
    <div>
      <h3 className="text-black">Stripe Checkout</h3>
      {showStripeButton()}
    </div>
  );
};

export default StripeCheckout;
