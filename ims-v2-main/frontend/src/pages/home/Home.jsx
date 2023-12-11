import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.scss"
import { useDispatch, useSelector } from "react-redux"
import {chartData} from "../../dummyData"
import WidgetsSm from "../../components/widgetsSM/WidgetsSm"
import WidgetsLg from "../../components/widgetsLg/WidgetsLg"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import { fetchProducts } from "../../features/product/productService"
import { fetchOrders } from "../../features/order/orderService"
import { fetchUser } from "../../features/authSlice"
import { fetchBrands } from "../../features/brands/brandService"
import { fetchCategories } from "../../features/category/categoryService"


//need to send these values from app page, use login/logout, use reducer

const Home = () => {
  const user = JSON.parse(localStorage.getItem('userDetails')) || null;
  const products = useSelector((state)=> state.products.products);
  const orders = useSelector((state)=>state.orders.orders)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if (user) {
      dispatch(fetchProducts());
      dispatch(fetchOrders());
      dispatch(fetchBrands());
      dispatch(fetchCategories());
      //need to persist user state from
    }
  }, [])


  if (!user) {
    return <div>
      Loading... home
    </div>
  }
  
  return (
    <div className="homeContainer">
      <Topbar/>
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart data={chartData} title="Sales Analytics" grid dataKey="Sales"/>
          <div className="homeWidgets">
            <WidgetsSm data = {products}/>
            <WidgetsLg data= {orders}/>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Home