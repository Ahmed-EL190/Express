import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrementQuantity, deleteFromCart,  incrementQuantity } from "../Redux/appSlice";




const Cart = () => {
  const products = useSelector((state) => state.appReducer.products);
  const dispatch = useDispatch();
  if (!products.length) {
    return (
      <div className="my-80 container text-center ">
        <h5 className="font-medium">Your cart is empty.</h5>
        <p className="text-gray-600">
          Start shopping to add items to your cart
        </p>
        <Link to="/">
          <button className="text-white hover:scale-110 transition duration-300 rounded p-2 w-52   bg-indigo-600 text-lg font-normal ">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }
  console.log("Cart Products:", products);
  return (
    <div className="my-28 container">
      <div className="row">
        <h1 className="text-black my-3">
          <span className="text-indigo-600">Your</span> Shopping Cart
        </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>total</th>
              <th>Increament</th>
              <th>Decrement</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img src={product.img} alt={product.title} width="50" />
                </td>
                <td>{product.title}</td>
                <td>{product.price}$</td>
                <td>{product.price * product.quantity}$</td>

                <td>
                  <button
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-md text-white px-3 py-2 rounded"
                    onClick={() => dispatch(incrementQuantity(product.id))}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-md text-white px-3 py-2 rounded"
                    onClick={() => dispatch(decrementQuantity(product.id))}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-md text-white px-3 py-2 rounded"
                  onClick={() => dispatch(deleteFromCart(product.id))}>
                    delete
                  </button>
                </td>
                
                
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
