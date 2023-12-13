import "./single.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
// import Datatable from '../../components/datatable/Datatable';
import BrandOne from "../../assets/images/product1.jpg"
import Chart from "../../components/chart/Chart";
import { chartData } from "../../dummyData";
import axios from "axios";


const Single = () => {
  const handleClickHardcoded = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const url = 'api/brands/allBrands';
    console.log('Request URL:', url);

    await axios.get("http://localhost:3300/api/product/allProducts", { withCredentials: true });
    // await axios.get(url, { withCredentials: true });
  };

  const handleClickProxy = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const url = 'api/product/allProducts';
    console.log('Request URL:', url);

    // await axios.get("http://localhost:3300/api/brands/allBrands", { withCredentials: true });
    await fetch("api/product/allProducts",{method: 'GET'});
  };
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
            <button onClick={handleClickHardcoded}>Click to trigger Hardcoded url</button>
            <button onClick={handleClickProxy}>Click to trigger proxy</button>
          </div>
          <div className="bottomContents">
            {/* <Datatable /> */}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Single