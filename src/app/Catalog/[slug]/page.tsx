import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import {
  oneProductType,
  responseType,
} from "@/components/utils/ProductsDataArrayAndTypes";
import ProductDetail from "@/components/views/ProductDetail";
import ContextWrapper from "@/global/Context";
import { FC } from "react";
import { Metadata } from "next";

export async function generateMetadata(
  { params }:{params:{slug:string}}): Promise<Metadata> {
  // read route params
  const slug = params.slug
 
  // fetch data
  const product = await fetch(
    `https://eki3q64k.api.sanity.io/v2023-07-02/data/query/production?query=*[_type == 'products']`).then((res: any) => res.json())
 
  const titleToSet:oneProductType=product.result.find((item:oneProductType)=>item.slug.current==slug)
  return {
    title: `Dine Market: ${titleToSet.productName}`,
    description:titleToSet.description
    
  }
}

async function fetchPreviousData(slug: string) {
  let res = await fetch(
    `https://eki3q64k.api.sanity.io/v2023-07-02/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D`
  );

  return res.json();
}

export async function generateStaticParams() {
  let res = await fetch(
    `https://eki3q64k.api.sanity.io/v2023-07-02/data/query/production?query=*[_type == 'products']`,{
      next:{
        revalidate:60
      }
    }
  ).then((res: any) => res.json());

  return res.result.map((item: oneProductType, index: number) => {
    slug: item.slug;
  });
}

const catalog: FC<{ params: { slug: string } }> = async ({ params }) => {
  let data: responseType = await fetchPreviousData(params.slug);

  return (
    <ContextWrapper>
      <ProductDetail item={data.result[0]} />
    </ContextWrapper>
  );
};
export default catalog;
