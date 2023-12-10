import "./list.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import EnhancedTable from '../../components/datatable/EnhancedTable';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState, useMemo } from "react";
import { AuthContext } from "../../context/authContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicTable from "../../components/datatable/BasicTable";
import { useSelector } from "react-redux";

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
            {memoizedOrderData && <BasicTable tableDataToSend={memoizedOrderData}/>}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default OrderList