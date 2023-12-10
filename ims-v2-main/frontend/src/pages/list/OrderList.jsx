import "./list.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState, useMemo } from "react";
import EnhancedTable from "../../components/datatable/EnhancedTable";

const OrderList = () => {
  const [pathName, setPathname] = useState(useLocation().pathname.slice(1).toLocaleLowerCase());
  const orderData = JSON.parse(localStorage.getItem('orderData')) || null;

  const memoizedOrderData = useMemo(()=>orderData, [orderData]);

  return (
    <div className="listContainer">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="list">
          <div className="newTitle">
              <h1>{pathName}</h1>
          </div>
          <div className="bottom">
            {memoizedOrderData && <EnhancedTable rows={memoizedOrderData.rows} headCells={memoizedOrderData.columns}/>}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default OrderList