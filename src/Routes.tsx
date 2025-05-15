import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CheckOut from "./pages/checkout";
import Community from "./pages/community";
import Giveaway from "./pages/giveaway";
import Home from "./pages/home";
import MyCart from "./pages/my-cart";
import MyOrders from "./pages/my-orders";
import MyProfile from "./pages/my-profile";
import ProductDetails from "./pages/product-details";
import Shop from "./pages/shop";
import Wallet from "./pages/wallet";
import { store } from "./redux/store";
import DashboardLayout from "./pages/profile-layout";
import OrderAndHistory from "./pages/order-and-history";
import ChangePassword from "./pages/change-password";
import PayeeInfo from "./pages/payee-info";
import MyCardPurchases from "./pages/my-card-purchases";
import Auction from "./pages/auction";
import AuctionDetails from "./pages/auction-details";
import Signup from "./pages/signup";
import Login from "./pages/login";

const PrivateRoute = () => {
  // const { token } = useSelector((state) => state.auth);
  const token = "a";

  return token ? <>
    <Navbar />
    <Outlet />
    <Footer />
  </> : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename={"/"}>
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}

            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="//product-details" element={<ProductDetails />} />
              <Route path="/giveaway" element={<Giveaway />} />
              <Route path="/community" element={<Community />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/my-cart" element={<MyCart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/auction" element={<Auction />} />
              <Route path="/auction-details" element={<AuctionDetails />} />

              <Route path="/" element={<DashboardLayout />}>
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/payee-info" element={<PayeeInfo/>} />
                <Route path="/order-and-history" element={<OrderAndHistory />} />
                <Route path="/my-card-purchases" element={<MyCardPurchases />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default AppRoutes;