
import { useState, type FormEvent } from "react";
import CheckoutSteps from "./CheckoutSteps";

function Payment() {
  const [paymentMethod, setPaymentMethod] =
    useState("paypal");

  const submitHandler = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    alert("Payment processing...");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />

      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>

            <li>
              <label>Payment Method</label>

              <div>
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() =>
                    setPaymentMethod("paypal")
                  }
                />
                <label htmlFor="paypal">
                  PayPal
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="bitcoin"
                  name="paymentMethod"
                  value="bitcoin"
                  checked={paymentMethod === "bitcoin"}
                  onChange={() =>
                    setPaymentMethod("bitcoin")
                  }
                />
                <label htmlFor="bitcoin">
                  Bitcoin
                </label>
              </div>
            </li>

            <li>
              <button
                type="submit"
                className="button primary"
              >
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Payment;
