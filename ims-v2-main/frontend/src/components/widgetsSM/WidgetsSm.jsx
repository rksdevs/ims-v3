import "./widgetsSm.scss"
import ProductOne from "../../assets/images/product1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
// import { productData } from "../../customHooks/callApi";

const WidgetsSm = () => {
    const {productData} = useContext(AuthContext);

  return (
    <div className="widgetsSm">
        <h3 className="widgetsSmTitle" >Stock Insights</h3>
        <ul className="widgetsSmList">
            {productData.map((item)=>(<li className="widgetsSmListItem" key={item._id}>
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