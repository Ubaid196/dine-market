"use client"

import { oneProductType } from "@/components/utils/ProductsDataArrayAndTypes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../../sanity/lib/client";




const builder:any = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}


const CartComp = ({allProductsOfStore}:{allProductsOfStore:Array<oneProductType>}) => {

  const [allProductsForCart, setAllProductsForCart] = useState<any>([])
  
  useEffect(()=>{
let stateStorage:any = localStorage.getItem("cart") as string
stateStorage = JSON.parse(stateStorage)
if(stateStorage){
  let data = allProductsOfStore.filter((item:oneProductType)=>{
    for (let index = 0; index < stateStorage.length; index++) {
      const element = stateStorage[index];
      if(element.productId === item._id){
        return true
      }
    }
  })
  setAllProductsForCart(data)
}
  },[allProductsOfStore])
  
 
  return (
    <div className="py-10 px-4 md:px-10">
      <div className="py-6">
        <h1 className="text-primaryText text-xl font-semibold">
          Shopping Cart
        </h1> 
      </div>



      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="flex flex-col gap-10 basis-[69%]">
        {allProductsForCart &&
        allProductsForCart.map((item:oneProductType,index:number)=>(
          <div key={index} className="flex flex-shrink-0 flex-col md:flex-row  gap-6">
          <div className="w-64">
            <Image 
            className="rounded-xl"
            height={1000}
          width={1000}
          src={urlFor(item.image[0])
            .width(1000)
            .height(1000)
            .url()}
          alt={item.image[0].alt}></Image>
          </div>
          <div className="space-y-3 w-full">
            <div className="flex justify-between">
              <h2 className="text-primaryText text-xl">
                {item.productName}
              </h2>
              <RiDeleteBinLine size={28} />
            </div>
            <p className="text-primaryText1 font-semibold">{item.productTypes[0]?item.productTypes[0]:""}</p>
            <h3 className="text-black font-semibold">Delivery Estimation</h3>
            <h4 className="font-semibold text-yellow-400">5 Working Days</h4>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">${item.price}</p>
              <div className="flex gap-2 items-center text-lg">
                <div className="select-none flex justify-center items-center w-9 h-9 rounded-full bg-gray-200 cursor-pointer">
                  -
                </div>
                <p> 5</p>
                <div className="select-none flex justify-center items-center w-9 h-9 rounded-full border border-gray-800 cursor-pointer">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
))}
</div>

        <div className="basis-1/4 bg-[#FBFCFF] p-6 space-y-5">
          <h5 className="text-black font-bold text-xl">Order Summary</h5>
          <div className="flex justify-between">
            <p>Quantity</p>
            <p>1 Product</p>
          </div>
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p>pr35</p>
          </div>
          <button className="w-full text-sm font-semibold flex justify-center py-2 items-center bg-primaryText text-white border-t-2 border-t-gray-600 border-l-2 border-l-gray-600 border-b-2 border-b-black border-r-2 border-r-black">
            Proceed to Checkout
          </button>
        </div>
      </div>



    </div>
  );
};

export default CartComp;
