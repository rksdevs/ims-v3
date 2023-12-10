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

const ProductList = () => {
  const [pathName, setPathname] = useState(useLocation().pathname.slice(1).toLocaleLowerCase());
  const productData = JSON.parse(localStorage.getItem('productData')) || null;

  const memoizedProductData = useMemo(()=>productData, [productData])

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
            {memoizedProductData && <BasicTable tableDataToSend={memoizedProductData}/>}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default ProductList