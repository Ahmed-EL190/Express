
import "bootstrap/dist/css/bootstrap.min.css";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { logOutUser } from "../Redux/appSlice";


const Header = () => {
  const userInfo = useSelector((state) => state.appReducer.UserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logOutUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToRegister = () => {
    navigate("/RegistrationPage");
  };

  const goToCart = () => {
    navigate("/Cart");
  };

  return (
    <div className="text-black flex justify-between p-3 gap-1 items-center fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Logo */}
      <div className="font-bold text-2xl">
        <Link to="/" className="navbar-brand">
          <span className="text-indigo-600">ALI</span>Express
        </Link>
      </div>

      {/* Search */}
      <div>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 pr-12 py-2 rounded-full bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full">
            <FiSearch className="text-md" />
          </button>
        </div>
      </div>

      {/* Navigation links */}
      <div className="gap-3 hidden mdl:flex">
        <Link
          to="/"
          className="text-gray-900 hover:text-indigo-900 transition duration-300 no-underline hover:underline nav-link"
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-gray-900 hover:text-indigo-900 transition duration-300 no-underline hover:underline nav-link"
        >
          Shop
        </Link>
        <Link
          to="/"
          className="text-gray-900 hover:text-indigo-900 transition duration-300 no-underline hover:underline nav-link"
        >
          Categories
        </Link>
        <Link
          to="/"
          className="text-gray-900 hover:text-indigo-900 transition duration-300 no-underline hover:underline nav-link"
        >
          About
        </Link>
      </div>

      {/* User icons */}
      <div className="flex gap-3">
        <div className="flex space-x-4 no-underline text-black text-sm sm:text-xs items-center">
          {userInfo ? (
            <span>{userInfo.userName}</span>
          ) : (
            <button
              onClick={goToRegister}
              className="text-black hover:scale-110 transition duration-300"
            >
              <FaRegUser className="text-black text-lg" />
            </button>
          )}
        </div>

        <div className="flex space-x-4 items-center">
          <button
            onClick={goToCart}
            className="text-black hover:scale-110 transition duration-300"
          >
            <SlBasket className="text-black text-lg relative" /> 
            
          </button>

          {userInfo && (
            <button
              onClick={handleLogOut}
              className="text-black hover:scale-110 transition duration-300 "
            >
              <FiLogOut className="text-black text-lg" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;