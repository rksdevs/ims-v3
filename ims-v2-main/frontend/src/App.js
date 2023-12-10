import "./App.scss";
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single"
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchOrders } from "./features/order/orderService";
import { fetchProducts } from "./features/product/productService";

function App() {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || null;
    const dispatch = useDispatch();
    const productData = JSON.parse(localStorage.getItem('productData')) || null;
    const orderData = JSON.parse(localStorage.getItem('orderData')) || null;

    const memoizedProductData = useMemo(()=>productData, [productData])
    const memoizedOrderData = useMemo(()=>orderData, [orderData])


    // useEffect(()=>{
    //   if (user) {
    //     dispatch(fetchProducts());
    //     dispatch(fetchOrders());
    //   }
    // }, [user])

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
              <Route path="/" element={<Home />}/>
            </Route>
            <Route path="/brands">
              <Route index element={<List data  />}/>
              <Route path="addBrands" element={<New />}/>
              <Route path=":brandId" element={<Single />}/>
            </Route>
            <Route element={<ProtectedRoute />}> 
              <Route path="/products">
                <Route index element={productData && <List data = {memoizedProductData}/>}/>
                <Route path="addProducts" element={<New />}/>
                <Route path=":productId" element={<Single />}/>
              </Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/orders">
                <Route index element={orderData && <List data = {memoizedOrderData}/>}/>
                <Route path="createOrder" element={<New />}/>
                <Route path=":orderId" element={<Single />}/>
              </Route>
            </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
