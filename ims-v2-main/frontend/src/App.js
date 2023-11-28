import "./App.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/authContext";
import Login from "./pages/login/Login";

function App() {
    const {userDetails, login, getProductData, productData, orderData} = useContext(AuthContext)
    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    // const [productData, setProductData] = useState([])
    // let url = "auth/login";

    // const handleLogin = () => {
    //     login(url, "testUser1", "testUser1P");
    //     setUser(userDetails);
    // }

    // useEffect(()=>{
    //     console.log(userDetails);
    //     setOrders(localStorage.getItem("orderData") || null);
    //     setProducts(localStorage.getItem("productData") || null);
    //     console.log("order", orderData)

    // }, [user, handleLogin])
  return (
    <div >
      <BrowserRouter>
        <Routes>
        {/* <Topbar />
          <div className="container">
            <Sidebar />
            <Home />
          </div> */}
          <Route path="/">
            <Route index element= {<Login login = {login} user = {userDetails}    product = {products} order = {orders}/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="brands">
              <Route index element={<List data  />}/>
              <Route path="addBrands" element={<New />}/>
              <Route path=":brandId" element={<Single />}/>
            </Route> 
            <Route path="products">
              <Route index element={<List data = {productData}/>}/>
              <Route path="addProducts" element={<New />}/>
              <Route path=":productId" element={<Single />}/>
            </Route>
            <Route path="orders">
              <Route index element={<List data = {orders}/>}/>
              <Route path="createOrder" element={<New />}/>
              <Route path=":orderId" element={<Single />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
