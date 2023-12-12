import "./App.scss";
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
// import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single"
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchOrders } from "./features/order/orderService";
import { fetchProducts } from "./features/product/productService";
import ProductList from "./pages/list/ProductList";
import OrderList from "./pages/list/OrderList";
import BrandList from "./pages/list/BrandList";
import CategoryList from "./pages/list/CategoryList";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || null;
    

    // <Route path="/" element={user ? <Navigate to="/" /> : <Home/>}/> -- this causes to page to show empty when reloaded incorrect statement

  return (
    <div >
      <BrowserRouter>
        <Routes>
            {/* <Route path="/login" element={isLoggedIn ? <Navigate to='/' /> : <Login />}/> 
             */}
             {/* <Route element={<ProtectedRoute />}>
              <Route path="/login" element={<Login />}/>
            </Route> */}
            <Route path="/login" element= {<Login />}/>
            <Route element={<ProtectedRoute />}>
              {/*Page reload and then logout --> page throttled due to multiple protected route triggers fix */}
              <Route path="/" element={<Home />}/>
            </Route>
            <Route path="/brands">
              <Route index element={<BrandList />}/>
              <Route path="addBrands" element={<New />}/>
              <Route path=":brandId" element={<Single />}/>
            </Route>
            <Route path="/category">
              <Route index element={<CategoryList />}/>
              <Route path="addCategory" element={<New />}/>
              <Route path=":brandId" element={<Single />}/>
            </Route>
            <Route element={<ProtectedRoute />}> 
              <Route path="/products">
                <Route index element={<ProductList />}/>
                <Route path="addProducts" element={<New />}/>
                <Route path=":productId" element={<Single />}/>
              </Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/orders">
                <Route index element={<OrderList />}/>
                <Route path="createOrder" element={<New />}/>
                <Route path=":orderId" element={<Single />}/>
              </Route>
            </Route>
          {/* </Route> */}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
