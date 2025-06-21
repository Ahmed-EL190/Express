import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { MdOutlineLocalShipping, MdOutlinePayment } from "react-icons/md";
import { TbShield } from "react-icons/tb";

const Footer = () => {
  return (
    <>
    <div className="bg-gray-900 pb-20 text-gray-300 pt-12  mt-5 gap-1 px-3 grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-2 lgl:grid-cols-4">
      {/* div 1 */}
      <div className="  ">
        <div className="flex">
          <div className="mr-2">
            <MdOutlineLocalShipping className="text-indigo-500 text-3xl  gap-2 mr-2 my-2" />
          </div>
          <div>
            <h5 className="font-semibold">Free Shipping</h5>
            <p className="text-sm ">On orders over $50</p>
          </div>
        </div>
        <div className="pt-5">
          <h5 className="font-semibold">ShopEase</h5>
          <p className="text-sm py-3 ">
            Your premier destination for quality products and <br /> exceptional
            customer service since 2025.
          </p>
        </div>
        <div className="flex gap-4 list-none mb-5">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
            >
              <FaFacebook className="rounded text-xl hover:text-indigo-600 transition duration-300 no-underline text-gray-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
            >
              <LuInstagram className="rounded text-xl hover:text-indigo-600 transition duration-300 no-underline text-gray-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
            >
              <FaTwitter className="rounded text-xl hover:text-indigo-600 transition duration-300 no-underline text-gray-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
            >
              <FaLinkedin className="rounded text-xl hover:text-indigo-600 transition duration-300 no-underline text-gray-300" />
            </a>
          </li>
        </div>
      </div>
      {/* div 2 */}
      <div>
        <div className="flex text-gray-300">
          <div className="mr-2">
            <MdOutlinePayment className="text-indigo-500 text-3xl mb-3 gap-2 mr-2 my-2" />
          </div>
          <div>
            <h5 className="font-semibold">Secure Payment</h5>
            <p className="text-sm ">100% secure checkout</p>
          </div>
        </div>
        <div className="my-5 ">
          <h5 className="font-semibold">Quick Links</h5>
          <div className="list-none my-3 ">
            <li className="my-3">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300  "
              >
                Home
              </a>
            </li>
            <li className="my-3">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
              >
                Shop
              </a>
            </li>
            <li className="my-3">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
              >
                About Us
              </a>
            </li>
            <li className="my-3">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
              >
                Blog
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
              >
                Contact
              </a>
            </li>
          </div>
        </div>
      </div>
      {/* div 3 */}
      <div>
        <div className="flex text-gray-300">
          <div>
            <TbShield className="text-indigo-500 text-3xl mb-3 gap-2 mr-2 my-2" />
          </div>
          <div>
            <h5 className="font-semibold">Quality Guarantee</h5>
            <p className="text-sm ">Product quality assured</p>
          </div>
        </div>
        <div className="my-5 ">
          <h5 className="font-semibold">Quick Links</h5>
          <div className="list-none my-3 ">
            <li className="my-3">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300  "
              >
                My Account
              </a>
            </li>
            <li className="my-3">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
              >
                Order Tracking
              </a>
            </li>
            <li className="my-3">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
              >
                Wishlist
              </a>
            </li>
            <li className="my-3">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
              >
                Shipping Policy
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className=" hover:text-indigo-600 transition duration-300 no-underline text-gray-300 "
              >
                Returns & Refunds
              </a>
            </li>
          </div>
        </div>
      </div>
      {/* div 4 */}
      <div>
        <div className="flex">
          <div className="mr-2">
            <MdOutlineLocalShipping className="text-indigo-500 text-3xl  gap-2 mr-2 my-2" />
          </div>
          <div>
            <h5 className="font-semibold">24/7 Support</h5>
            <p className="text-sm ">Dedicated support</p>
          </div>
        </div>
        <div className="pt-5">
          <h5 className="font-semibold">Newsletter</h5>
          <p className="text-sm py-3 ">
            Subscribe to get updates on new arrivals, special offers <br /> and
            other discount information.
          </p>
        </div>
        <div className="flex ">
          <input
            type="text"
            placeholder="Your email address"
            className="bg-gray-800 h-8 w-64  px-4 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 relative "
          />
          <button className="bg-indigo-700 border-solid border-gray-400 p-2 h-8 text-sm px-3 absolute ml-40 hover:bg-indigo-800 transition duration-300  ">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <footer className="bg-gray-900 text-gray-300 py-2  ">
  
    <hr className="border-gray-600 mb-4" />
    <div className="    justify-between px-4 text-gray-400 grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-2 lgl:grid-cols-2   ">
      <div>
        <p className="md:justify-center">© 2025 ALIExpress. All rights reserved.</p>
      </div>
      <div className="flex gap-2 md:justify-center mdl:justify-end ">
        <a href="#" className="hover:text-indigo-800 no-underline text-center text-gray-300 ">Privacy Policy</a>
        <a href="#" className="hover:text-indigo-800 no-underline text-center text-gray-300 ">Terms of Service</a>
        <a href="#" className="hover:text-indigo-800 no-underline text-center text-gray-300 ">Cookies Policy</a>
      </div>
    </div>
  
</footer>
  </>
  );
};

export default Footer;
