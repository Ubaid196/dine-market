import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import AllProductsComponent from "@/components/views/AllProducts";

async function fetchAllProductsData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

const Products = async () => {
  const productData = await fetchAllProductsData();

  return(
   <div>
    <AllProductsComponent productData={productData} />
   </div>
   )
  };

export default Products;
