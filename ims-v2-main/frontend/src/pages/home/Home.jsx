import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.scss"

import {chartData} from "../../dummyData"
import WidgetsSm from "../../components/widgetsSM/WidgetsSm"
import WidgetsLg from "../../components/widgetsLg/WidgetsLg"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

//need to send these values from app page, use login/logout, use reducer

const Home = () => {
  const {userDetails, login, productData, orderData}= useContext(AuthContext);
  console.log("userDetails", userDetails)
  return (
    <div className="homeContainer">
      <Topbar login= {login}/>
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart data={chartData} title="Sales Analytics" grid dataKey="Sales"/>
          <div className="homeWidgets">
            <WidgetsSm data = {productData} />
            <WidgetsLg data = {orderData}/>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Home