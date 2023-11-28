import "./widgetsSm.scss"
import ProductOne from "../../assets/images/product1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
// import { productData } from "../../customHooks/callApi";

const WidgetsSm = ({data}) => {
    // const {getProductData} = useContext(AuthContext);
    // const [data, setData] = useState([]);
    // const createTableData = (data) => {
    //     // const newTableData = {
    //     //   columns: [],
    //     //   rows: []
    //     // }
    
    //     // if (!Array.isArray(data) || data.length === 0) {
    //     //   throw new Error("Data must be a non empty array of objects");
    //     // }
    
    //     //setup columns 
    //     let keys = Object.keys(data?.[0]);
    
    //     let columns = keys?.map((elem)=> ({
    //       field: elem,
    //       headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
    //       width: 160
    //     }));
    
    //     //add serial number
    
    //     columns.unshift({
    //       field: "slNo",
    //       headerName: "Sl No",
    //       width: 160
    //     })
    
    //     //setup rows
    //     let rows = data?.map((obj, index)=>{
    //       let rowObj = {slNo: index + 1};
    //       keys?.forEach((key)=>{
    //         if (key !== "_id") {
    //           rowObj[key]= obj[key];
    //         }
    //       });
    //       return rowObj;
    //     })
    
    //     return {
    //       columns,
    //       rows
    //     }
    // }

    // useEffect(()=>{
    //     const getData = async() => {
    //         let response = await getProductData();
    //         setData(createTableData(response))
    //     }
    //     getData();
    // }, [])

  return (
    <div className="widgetsSm">
        <h3 className="widgetsSmTitle" >Stock Insights</h3>
        <ul className="widgetsSmList">
            {data?.map((item)=>(<li className="widgetsSmListItem" key={item._id}>
                <img src={ProductOne} alt="product one" className="widgetsSmImg" />
                <span className="widgetsSmProductName">{item.productName}</span>
                <span className="widgetsSmProductQuantity">{item.quantity}</span>
                <button className="widgetsSmButton">
                    View
                </button>
            </li>))}
        </ul>
    </div>
  )
}

export default WidgetsSm