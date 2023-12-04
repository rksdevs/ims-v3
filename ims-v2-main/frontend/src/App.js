import "./App.scss";
import {BrowserRouter, Routes, Route, Outlet, Navigate, useNavigate} from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single"
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";

function App() {
    const {userDetails, isLoggedIn} = useSelector((state)=>state.user)
    const products = useSelector((state)=> state.products.products) 
    const orders = useSelector((state)=> state.orders.orders)
  return (
    <div >
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login/>}/>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home user = {userDetails}/>}/>
            </Route>
            <Route path="/brands">
              <Route index element={<List data  />}/>
              <Route path="addBrands" element={<New />}/>
              <Route path=":brandId" element={<Single />}/>
            </Route> 
            <Route path="/products">
              <Route index element={<List data = {products}/>}/>
              <Route path="addProducts" element={<New />}/>
              <Route path=":productId" element={<Single />}/>
            </Route>
            <Route path="/orders">
              <Route index element={<List data = {orders}/>}/>
              <Route path="createOrder" element={<New />}/>
              <Route path=":orderId" element={<Single />}/>
            </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
