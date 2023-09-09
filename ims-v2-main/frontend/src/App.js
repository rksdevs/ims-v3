import "./App.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single"

function App() {
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
            <Route index element={<Home />}/>
            <Route path="brands">
              <Route index element={<List />}/>
              <Route path="addBrands" element={<New />}/>
              <Route path=":brandId" element={<Single />}/>
            </Route> 
            <Route path="products">
              <Route index element={<List />}/>
              <Route path="addProducts" element={<New />}/>
              <Route path=":productId" element={<Single />}/>
            </Route>
            <Route path="orders">
              <Route index element={<List />}/>
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
