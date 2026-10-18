
type CheckoutStepsProps = {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
};

function CheckoutSteps({
  step1 = false,
  step2 = false,
  step3 = false,
  step4 = false,
}: CheckoutStepsProps) {
  return (
    <div className="checkout-steps">
      <div className={step1 ? "active" : ""}>
        Sign In
      </div>
      <div className={step2 ? "active" : ""}>
        Shipping
      </div>
      <div className={step3 ? "active" : ""}>
        Payment
      </div>
      <div className={step4 ? "active" : ""}>
        Place Order
      </div>
    </div>
  );
}

export default CheckoutSteps;
