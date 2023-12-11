import "./list.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState, useMemo } from "react";
import EnhancedTable from "../../components/datatable/EnhancedTable";

const CategoryList = () => {
  const [pathName, setPathname] = useState(useLocation().pathname.slice(1).toLocaleLowerCase());
  const categoryData = JSON.parse(localStorage.getItem('categoryData')) || null;

  const memoizedCategoryData = useMemo(()=>categoryData, [categoryData]);

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
            {memoizedCategoryData && <EnhancedTable rows={memoizedCategoryData.rows} headCells={memoizedCategoryData.columns}/>}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default CategoryList