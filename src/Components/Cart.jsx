


import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../Redux/appSlice";

const Cart = () => {
  const products = useSelector((state) => state.appReducer.products);
  const dispatch = useDispatch();

  if (!products.length) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 p-4">
        <div className="relative">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center animate-bounce">
            0
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Your cart feels lonely</h2>
        <p className="text-gray-600 max-w-md text-center">Your shopping cart is empty. Let's fill it with some amazing products!</p>
        <Link to="/">
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium">
            Explore Products
          </button>
        </Link>
      </div>
    );
  }

  const total = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  return (
    <div className="min-h-[70vh] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 md:mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Your Shopping Cart
          </span>
        </h1>

        {/* قسم المنتجات */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 overflow-hidden">
          {/* للشاشات الكبيرة (lg فأعلى) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-4 items-center bg-gray-50 p-4 border-b border-gray-200">
              <div className="col-span-5 font-medium text-gray-700">Product</div>
              <div className="col-span-2 font-medium text-gray-700 text-right">Price</div>
              <div className="col-span-2 font-medium text-gray-700 text-center">Quantity</div>
              <div className="col-span-2 font-medium text-gray-700 text-right">Total</div>
              <div className="col-span-1"></div>
            </div>

            {products.map((product) => (
              <div key={product.id} className="grid grid-cols-12 gap-4 items-center p-4 border-b border-gray-100 hover:bg-indigo-50/50">
                <div className="col-span-5">
                  <div className="flex items-center gap-4">
                    <img src={product.img} alt={product.title} className="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <h3 className="font-medium text-gray-900 whitespace-normal">{product.title}</h3>
                      <p className="text-sm text-gray-500">ID: {product.id}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 text-gray-700 text-right pr-4">${product.price.toFixed(2)}</div>
                <div className="col-span-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => dispatch(decrementQuantity(product.id))}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-md">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(incrementQuantity(product.id))}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-2 text-indigo-600 font-medium text-right pr-4">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
                <div className="col-span-1 flex justify-center">
                  <button
                    onClick={() => dispatch(deleteFromCart(product.id))}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* للشاشات الصغيرة (أقل من lg) */}
          <div className="lg:hidden space-y-4 p-4">
            {products.map((product) => (
              <div key={product.id} className="border-b border-gray-200 pb-4 last:border-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img src={product.img} alt={product.title} className="w-full sm:w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{product.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">ID: {product.id}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-gray-600">Price</p>
                        <p className="font-medium">${product.price.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Total</p>
                        <p className="font-medium text-indigo-600">${(product.price * product.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decrementQuantity(product.id))}
                          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-md">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(incrementQuantity(product.id))}
                          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch(deleteFromCart(product.id))}
                        className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم Order Summary أسفل المنتجات */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">{products.length} items</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="border-t border-gray-200 my-3"></div>
            <div className="flex justify-between">
              <span className="text-lg font-bold">Total</span>
              <span className="text-xl font-bold text-indigo-600">${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-md transition-all font-medium">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;