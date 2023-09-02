"use client";

import { FC, ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../Reducer";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const contextVal = createContext<any>(null);

const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<any>()
  const cartInitialize = {
    cart: [],
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
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  let user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth,(user:any)=>{
      
      if(user){
        setUserData({
          displayName: user.displayName,
          email: user.email,
          uuid: user.uid,
        })
      }else{
        setUserData(null)
      }
    })
  }, [])
  
  
function signUpUser(email:string,password:string){
  
return createUserWithEmailAndPassword(auth, email,password)
}



function signInUser(email:string,password:string){
return signInWithEmailAndPassword(auth,email,password)
}

function logOut(){
  signOut(auth)
}

  return (
    <contextVal.Provider value={{ state, dispatch, signUpUser }}>
      {children}
    </contextVal.Provider>
  );
};

export default ContextWrapper;
