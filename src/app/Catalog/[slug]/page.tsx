import { FC } from "react"


const Catalog:FC<{params:{slug:string}}> = ({params}) => {
  console.log(params.slug);
  
    return (
    <div>Catalog</div>
  )
}

export default Catalog