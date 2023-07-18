import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import Hero from "@/components/views/Hero";
import ProductTypes from "@/components/views/ProductTypes";
import ProductCarousel from "@/components/views/ProductCarousel";
import { useEffect } from "react";
import { oneProductType ,responseType } from "@/components/utils/ProductsDataArrayAndTypes";
import Jewellery from "@/components/views/Jewellery";
import NewsLetter from "@/components/views/NewsLetter";


async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();

  return (
    <>
      <main>
        <Hero />
        <ProductTypes />
        <ProductCarousel ProductData={result} />
        <Jewellery />
        <NewsLetter/>
       
      </main>
    </>
  );
}
