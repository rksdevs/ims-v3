import "./App.scss";
import {BrowserRouter, Routes, Route, Outlet, Navigate, useNavigate} from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/authContext";
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const {userDetails, login, getProductData, productData, orderData, isAuthenticated} = useContext(AuthContext)
    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    let userLoggedIn = localStorage.getItem("isLoggedIn") || false;
    // const navigate = useNavigate();


    // const [productData, setProductData] = useState([])
    // let url = "auth/login";

    // const handleLogin = () => {
    //     login(url, "testUser1", "testUser1P");
    //     setUser(userDetails);
    // }

    useEffect(()=>{
        console.log(userLoggedIn, "from login");

    }, [])
  return (
    <div >
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={userLoggedIn ? <Navigate to="/" /> : <Login login = {login}/>}/>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home user = {userDetails}    product = {products} order = {orders}/>}/>
            </Route>
            <Route path="/brands">
              <Route index element={<List data  />}/>
              <Route path="addBrands" element={<New />}/>
              <Route path=":brandId" element={<Single />}/>
            </Route> 
            <Route path="/products">
              <Route index element={<List data = {productData}/>}/>
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
