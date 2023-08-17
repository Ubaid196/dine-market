"use client";

import { FC, ReactNode, createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducer";

export const contextVal = createContext<any>(null);

const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const cartInitialize = {
    cart: [
      {
        productId: "",
        quantity: 2,
      },
    ],
  };
  const [state, dispatch] = useReducer(cartReducer, cartInitialize);
  useEffect(() => {
    let cart = localStorage.getItem("cart") as string;

    if (cart === null) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    } else {
      cartInitialize.cart = JSON.parse(cart);
    }
  });
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state.cart))
  },[state.cart])

  return (
    <contextVal.Provider value={{ state, dispatch }}>
      {children}
    </contextVal.Provider>
  );
};

export default ContextWrapper;
