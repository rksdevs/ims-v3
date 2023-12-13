import "./App.scss";
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
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
import NewBrand from "./pages/new/NewBrand";
import TestNew from "./pages/new/TestNew";

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
              <Route path="brands/*" element={<BrandList />} />
              <Route path="brands/addBrands" element={<NewBrand />} />
              <Route path="brands/:brandId" element={<Single />} />
              <Route path="category/*" element={<CategoryList />} />
              <Route path="category/addCategory" element={<TestNew />} />
              <Route path="category/:categoryId" element={<Single />} />
              <Route path="products/*" element={<ProductList />} />
              <Route path="products/addProducts" element={<TestNew />} />
              <Route path="products/:productId" element={<Single />} />
              <Route path="orders/*" element={<OrderList />} />
              <Route path="orders/createOrder" element={<TestNew />} />
              <Route path="orders/:orderId" element={<Single />} />
            </Route>
            
          {/* </Route> */}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
