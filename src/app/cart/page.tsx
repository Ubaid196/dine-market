import CartComp from "@/components/views/CartParent/cartChild";
import ContextWrapper from "@/global/Context";



export async function fetchAllStoreProducts() {
  let res = await fetch(
    `https://eki3q64k.api.sanity.io/v2023-07-02/data/query/production?query=*[_type == 'products']`,{
     cache: "no-store"
    }
  )

  return res.json()
}



const Cart = async() => {
  let allProductsOfStore = await fetchAllStoreProducts()

  return (
    
    <CartComp allProductsOfStore={allProductsOfStore.result}/>
    
  )
};

export default Cart;
