

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Signin from "./Authencation/Signin";
import Cart from "./Components/Cart"; // تأكد من أن هذا استيراد بدون .jsx
import ProductsData from "./Api/api";
import RegistrationPage from "./Authencation/RegistrationPage";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={() => ProductsData()} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
