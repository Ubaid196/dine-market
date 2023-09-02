"use client"

import { contextVal } from "@/global/Context";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";

const Cartstate = () => {
  const [quantity,setQuantity]=useState(0)
  const isBrowser = ()=> typeof window !== undefined

  useEffect(() => {
    if(isBrowser()){
      let data = localStorage.getItem("cart") as string
      setQuantity(JSON.parse(data).length)
    }
  }, [])
  

  return (
    <Link href="/cart" className="flex-shrink-0 relative w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center">
      <div className="absolute top-1 right-2  bg-[#F02D34] text-xs text-white font-light rounded-full w-4 h-4 flex justify-center items-center">
        {quantity}
      </div>
      <CgShoppingCart size={24} />
    </Link>
  );
};

export default Cartstate;
