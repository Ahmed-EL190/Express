import axios from "axios";

const ProductsData = async () => {
    const products = await axios.get('https://fakestoreapi.com/products');
    return products;
};
export default ProductsData;