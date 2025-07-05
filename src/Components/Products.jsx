
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const data = useLoaderData();
  const products = data.data;
  

  return (
    <div className="pt-5 pl-3 bg-gray-50 mx-3">
      <h1>Our Products</h1>
      <h6 className="">Browse our latest collection</h6>
      {/* products api */}
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 items-center mt-10    gap-4 border-none px-2  ">
        {products.map((product) => ( 
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
