import { responseType } from "@/components/utils/ProductsDataArrayAndTypes";
import ProductDetail from "@/components/views/ProductDetail";
import { FC } from "react";

async function fetchPreviousData(slug:string){
  let res=await fetch(`https://eki3q64k.api.sanity.io/v2023-07-02/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D`)
return res.json()
}

const Catalog:FC<{params:{slug:string}}>=async ({params})=>{
  let data: responseType =await fetchPreviousData(params.slug)
  
  return(
    <div>
      <ProductDetail item={data.result[0]}/>
    </div>
  )
  
}
export default Catalog