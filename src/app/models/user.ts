import { Basket } from "../api/basket";

export interface User {
  email: string;
  token: string;
  basket?: Basket;
}
