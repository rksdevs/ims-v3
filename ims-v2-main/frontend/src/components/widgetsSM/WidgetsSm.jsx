import "./widgetsSm.scss"
import ProductOne from "../../assets/images/product1.jpg";
import { useState } from "react";
// import { productData } from "../../customHooks/callApi";

const WidgetsSm = () => {
    const [productList, setproductList] = useState([]);
    // console.log(productData)

  return (
    <div className="widgetsSm">
        <h3 className="widgetsSmTitle">Stock Insights</h3>
        <ul className="widgetsSmList">
            <li className="widgetsSmListItem">
                <img src={ProductOne} alt="product one" className="widgetsSmImg" />
                <span className="widgetsSmProductName">Atlas Bicycle</span>
                <span className="widgetsSmProductQuantity">100</span>
                <button className="widgetsSmButton">
                    View
                </button>
            </li>
            <li className="widgetsSmListItem">
                <img src={ProductOne} alt="product one" className="widgetsSmImg" />
                <span className="widgetsSmProductName">Atlas Bicycle</span>
                <span className="widgetsSmProductQuantity">50</span>
                <button className="widgetsSmButton">
                    View
                </button>
            </li>
            <li className="widgetsSmListItem">
                <img src={ProductOne} alt="product one" className="widgetsSmImg" />
                <span className="widgetsSmProductName">Atlas Bicycle</span>
                <span className="widgetsSmProductQuantity">200</span>
                <button className="widgetsSmButton">
                    View
                </button>
            </li>
            <li className="widgetsSmListItem">
                <img src={ProductOne} alt="product one" className="widgetsSmImg" />
                <span className="widgetsSmProductName">Atlas Bicycle</span>
                <span className="widgetsSmProductQuantity">30</span>
                <button className="widgetsSmButton">
                    View
                </button>
            </li>
            <li className="widgetsSmListItem">
                <img src={ProductOne} alt="product one" className="widgetsSmImg" />
                <span className="widgetsSmProductName">Atlas Bicycle</span>
                <span className="widgetsSmProductQuantity">10</span>
                <button className="widgetsSmButton">
                    View
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetsSm