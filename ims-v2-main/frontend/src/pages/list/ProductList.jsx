import "./list.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState, useMemo } from "react";
import EnhancedTable from "../../components/datatable/EnhancedTable";

const ProductList = () => {
  const [pathName, setPathname] = useState(useLocation().pathname.slice(1).toLocaleLowerCase());
  const productData = JSON.parse(localStorage.getItem('productData')) || null;

  const memoizedProductData = useMemo(()=>productData, [productData]);

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
            {memoizedProductData && <EnhancedTable rows={memoizedProductData.rows} headCells={memoizedProductData.columns} />}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default ProductList