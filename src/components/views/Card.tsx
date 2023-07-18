import React, { FC } from "react";
import { oneProductType } from "../utils/ProductsDataArrayAndTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const Card: FC<{ singleProductData: oneProductType }> = ({
  singleProductData,
}) => {
  return (
    <Link  href={`/catalog/${singleProductData.slug.current}`}>
    <div className="max-w-sm min-w-[24rem] space-y-3 select-none hover:scale-110 duration-300">
      <div className="relative w-full space-y-10">
        <div className="absolute inset-0 z-10" />
        <Image
          height={1000}
          width={1000}
          src={urlFor(singleProductData.image[0])
            .width(1000)
            .height(1000)
            .url()}
          alt={singleProductData.image[0].alt}
        ></Image>
      </div>
      <div className="space-y-1 text-primaryText font-semibold text-lg select-none text-center md:text-left">
        <h6>{singleProductData.productName}</h6>
        <p>${singleProductData.price}</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;
