"use client";

import toast, { Toaster } from "react-hot-toast";
import {
  imagesType,
  oneProductType,
} from "@/components/utils/ProductsDataArrayAndTypes";
import { FC, useContext, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { CgShoppingCart } from "react-icons/cg";
import { contextVal } from "@/global/Context";
import PortableText from "react-portable-text";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  let { state, dispatch } = useContext(contextVal);
  const [imagePreview, setImagePreview] = useState<string>(item.image[0]._key);
  const [quantity, setQuantity] = useState(1);

  function incrementTheQuantity() {
    setQuantity(quantity + 1);
  }
  function decrementTheQuantity() {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  }

const notification = (title:string)=>toast(`${quantity} ${title} added to Cart`,{
  icon: '✅',
  duration: 2000
})

  function handleAddToCart() {
    let dataToAddInCart = {
      productId: item._id,
      quantity: quantity,
    };
    dispatch({ payload: "addToCart", data: dataToAddInCart });
    notification(item.productName)
  }

  return (
    <div>
      <Toaster />
      <div className="flex flex-col lg:flex-row justify-center items-center py-7">
        <div className="flex gap-x-4 md:gap-x-8">
          <div className="space-y-4">
            {item.image.map((subItem: imagesType, index: number) => (
              <div
                key={index}
                className="w-12 md:w-24"
                onClick={() => setImagePreview(subItem._key)}
              >
                <Image
                  src={urlFor(subItem).width(1000).height(1000).url()}
                  alt={subItem.alt}
                  width={1000}
                  height={1000}
                ></Image>
              </div>
            ))}
          </div>
          <div className="w-[33rem] flex flex-wrap-0">
            {item.image.map((subItem: imagesType, index: number) => {
              if (subItem._key === imagePreview) {
                return (
                  <Image
                    key={index}
                    src={urlFor(subItem).width(1000).height(1000).url()}
                    alt={subItem.alt}
                    width={1000}
                    height={1000}
                  ></Image>
                );
              }
            })}
          </div>
        </div>
        <div className="p-6 space-y-10">
          <div>
            <h1 className="text-primaryText text-3xl"> {item.productName} </h1>
            <p className="text-[#DBDBDB] font-medium text-xl">
              {item.productTypes[0]}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primaryText">
              SELECT SIZE
            </p>
            <div className="flex gap-2 text-primaryText">
              {item.size.map((subItem: string, index: number) => (
                <div
                  key={index}
                  className=" font-semibold hover:shadow-lg cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center"
                >
                  {subItem}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-7">
            <p className="text-xl font-semibold text-primaryText">Quantity:</p>
            <div className="flex gap-2 items-center text-lg">
              <div
                onClick={decrementTheQuantity}
                className="select-none flex justify-center items-center w-9 h-9 rounded-full bg-gray-200 cursor-pointer"
              >
                -
              </div>
              <p> {quantity} </p>
              <div
                onClick={incrementTheQuantity}
                className="select-none flex justify-center items-center w-9 h-9 rounded-full border border-gray-800 cursor-pointer"
              >
                +
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <button
              onClick={() => handleAddToCart()}
              className="text-sm md:text-lg px-4 py-2 font-semibold flex items-center bg-primaryText text-white border-t-2 border-t-gray-600 border-l-2 border-l-gray-600 border-b-2 border-b-black border-r-2 border-r-black"
            >
              <CgShoppingCart size={24} />
              &nbsp; Add to Cart
            </button>
            <p className="text-2xl text-primaryText font-semibold">
              ${item.price}.00
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative py-5 md:py-16 px-2 border-b-2 border-gray-400">
          <h2 className="absolute top-0 text-6xl md:text-[9rem] font-bold  text-feature_bg text-center mx-auto -z-50">
            Overview
          </h2>

          <p className="text-primaryText font-bold text-2xl">
            Product Information
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0  px-2 py-4">
          <div className="w-80">
            <h3 className=" text-primaryText1 font-semibold ">
              PRODUCT DETAILS
            </h3>
          </div>
          <p className="text-primaryText">
            <PortableText content={item.description} />
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 px-2 py-4">
          <div className="w-80">
            <h3 className=" text-primaryText1 font-semibold">PRODUCT CARE</h3>
          </div>
          <ul className="pl-4 list-disc font-semibold text-primaryText">
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
          </ul>
        </div>
      </div>
      <div className="h-16" />
    </div>
  );
};

export default ProductDetail;
