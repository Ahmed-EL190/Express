import Card from 'react-bootstrap/Card';
import { useLoaderData } from "react-router-dom";
import { addToCart } from "../Redux/appSlice";
import { useDispatch } from "react-redux";
import { FiShoppingCart } from 'react-icons/fi';

const Products = () => {
  const data = useLoaderData();
  const products = data.data;
  const dispatch = useDispatch();

  return (
    <div className="pt-5 pl-3 bg-gray-50 mx-3">
      <h1>Our Products</h1>
      <h6 className="">Browse our latest collection</h6>
      {/* products api */}
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 items-center mt-10    gap-4 border-none px-2  ">
        {products.map((product) => (
          <Card
            key={product.id}
            className="border-none hover:scale-[1.02] transition duration-300 gap-3 bg-white rounded-xl shadow-md w-full min-h-[500px] py-3 px-3"
          >
            <Card.Img
              variant="top"
              className=" hover:scale-105 transition duration-300 object-contain w-full h-[250px] flex items-center justify-center overflow-hidden "
              src={product.image}
            />
            <Card.Body>
              <div className="flex gap-3 items-center line-clamp-1   ">
                <h6 className=" line-clamp-1">{product.title}</h6>
                <p className="hover:scale-105 transition duration-300 line-clamp-2 px-3 bg-indigo-200 rounded-full text-sm object-contain">
                  {product.category}
                </p>
              </div>
              <Card.Text className="text-sm text-gray-600 line-clamp-2 mb-2">
                {product.description}
              </Card.Text>
              <div className="flex justify-between items-center gap-1font-bold text-xl">
                <h4 className="hover:scale-105 transition duration-300 items-center font-bold text-xl">
                  $ {product.price}
                </h4>
                <div className="gap-3 mt-2 items-center">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          img: product.image,
                          price: product.price,
                          categ: product.category,
                          title: product.title,
                          desc: product.description,
                          quantity: 1,
                        })
                      )
                    }
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-md text-white px-3 py-2 rounded-full"
                  >
                    <FiShoppingCart className="text-lg" />
                    Add
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
