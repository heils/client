import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../app/util/configureStore";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { setBasket } from "../basket/basketSlice";
import Loading from "../../app/layout/Loading";

const stripePromise = loadStripe(
  "pk_test_51NUVpvKAwKRO8gQzo34IcW7a0vZ2BMK5WdwH4n3pqP5BzFL5fQtnIMoUhpNY0IesJhYw3lLyrrsAtW6jMHReqhh8000kuG8Abf"
);
export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Payments.createPaymentIntent()
      .then((basket) => dispatch(setBasket(basket)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });
  
  if (loading) return <Loading message="Loading checkout" />;
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
