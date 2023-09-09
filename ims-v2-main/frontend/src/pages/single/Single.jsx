import "./single.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
// import Datatable from '../../components/datatable/Datatable';
import BrandOne from "../../assets/images/product1.jpg"
import Chart from "../../components/chart/Chart";
import { chartData } from "../../dummyData";
import Datatable from "../../components/datatable/Datatable";


const Single = () => {
  return (
    <div className="singleContainer">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="single">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h3 className="singleTitle">Information</h3>
              <div className="item">
                <img className="itemImg" src={BrandOne} alt="Product" />
                <div className="details">
                  <h3 className="itemTitle">Product One</h3>
                  <div className="itemDetails">
                    <span className="itemKey">Status</span>
                    <span className="itemValue">Active</span>
                  </div>
                </div>
              </div>
          </div>
          <div className="right">
            <Chart data={chartData} title="Brand Analytics" grid dataKey="Sales"/>
          </div>
        </div>
        <div className="bottom">
          <div className="bottomTitle">
            <h3>Products of the Brand</h3>
          </div>
          <div className="bottomContents">
            <Datatable />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Single