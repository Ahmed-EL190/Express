
import { Card } from "react-bootstrap";
import { addToCart, toggleLike } from "../Redux/appSlice";
import { useDispatch, } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";


const ProductCard = ({product}) => {
    const dispatch = useDispatch()

  return (
    <Card
            key={product.id}
            className="border-none hover:scale-[1.02] transition duration-300 gap-3 bg-white rounded-xl shadow-md w-full min-h-[500px] py-3 px-3"
          >
            <Card.Text>
            
              <FaHeart  className="text-xl text-black items-center" onClick={() => dispatch(toggleLike(product.id))} />
            
            </Card.Text>
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
  )
}

export default ProductCard