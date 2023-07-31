import {
    oneProductType,
    responseType,
  } from "@/components/utils/ProductsDataArrayAndTypes";
  import Card from "@/components/views/Card";
  import { FC } from "react";
  
  async function fetchAllProductsData() {
    let res = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-02/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+productTypes%5B1%5D+%3D%3D+%22Female%22%5D`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  }
  
  const Female = async ({ params }: { params: { ftype: string } }) => {
    let res: responseType = await fetchAllProductsData();
    // if (params.ftype !== "Female") {
    //   let originalSortedData = res.result.filter(
    //     (items: oneProductType) =>
    //       items.productTypes[0].toUpperCase === params.ftype.toUpperCase
    //   );
    //   res = { result: originalSortedData };
    // }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4">
        {res.result.map((items: oneProductType, index: number) => (
          <Card key={index} singleProductData={items} />
        ))}
      </div>
    );
  };
  
  export default Female;
  