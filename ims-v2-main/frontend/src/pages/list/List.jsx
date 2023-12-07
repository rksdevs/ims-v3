import "./list.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import EnhancedTable from '../../components/datatable/EnhancedTable';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicTable from "../../components/datatable/BasicTable";
import { useSelector } from "react-redux";

const List = ({data}) => {
  const pathName = useLocation().pathname.slice(1).toLocaleLowerCase();
  const {products} = useSelector((state)=>state.products);
  const {orders} = useSelector((state)=>state.orders);
  const [tableDataToSend, setTableDataToSend] = useState({});
  



  // const createTableData = ({data, type}) => {
  //   console.log(data, "testing for table");
  //   if (!data || data.length === 0) {
  //     console.log("data is null")
  //     // Handle the case where data is null, undefined, or empty
  //     return {
  //       columns: [],
  //       rows: [],
  //     };
  //   }

  //   // if (!Array.isArray(data) || data.length === 0) {
  //   //   throw new Error("Data must be a non empty array of objects");
  //   // }

  //   //setup columns 
  //   let keys = Object.keys(data[0]);
  //   let columns = [];
  //   let rows = [];

  //   //setup rows
  //   // let setupRows = (data) => {
  //   //   data.map((obj, index)=>{
  //   //     let rowObj = {slNo: index + 1};
  //   //     keys.forEach((key)=>{
  //   //       if (key !== "_id") {
  //   //         rowObj[key]= obj[key];
  //   //       } else if (key === "brand") {
  //   //         rowObj[key] = obj[key].brandName;
  //   //       } else {
  //   //         rowObj.id = obj[key];
  //   //       }
  //   //     });
  //   //     return rowObj;
  //   //   })
  //   // }

  //   if (type === "products") {
  //     columns = keys.filter((key)=>key !== "_id" && key !== "image").map((elem)=> ({
  //       accessor: elem,
  //       headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
  //       width: 160
  //     }));

  //   } else if (type === "orders") { 
  //     columns = keys.filter((key)=> key !== "_id").map((elem)=> ({
  //       accessor: elem,
  //       headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
  //       width: 160
  //     }));

  //     columns.push({
  //       accessor: "id",
  //       headerName: "Id",
  //       width: 160
  //     })
  //   }

  //   columns.unshift({
  //     accessor: "slNo",
  //     headerName: "Sl No",
  //     width: 160
  //   })
    
  //   rows = data.map((obj, index)=>{
  //     let rowObj = {slNo: index + 1};
  //     keys.forEach((key)=>{
  //       if (key !== "_id") {
  //         rowObj[key]= obj[key];
  //       } else if (key === "brand") {
  //         rowObj[key] = obj[key].brandName;
  //       } else {
  //         rowObj.id = obj[key];
  //       }
  //     });
  //     return rowObj;
  //   })

  //   return {
  //     columns,
  //     rows
  //   }
  // }

  // useEffect(() => {
  //   if (pathName === "products") {
  //     console.log("product data", JSON.parse(localStorage.getItem('productData')));
  //     const productData = JSON.parse(localStorage.getItem('productData'));
  //   //   const productTableData = createTableData({data: productData, type: "products"})
  //   //   console.log('columns', productTableData.columns);
  //   //   console.log('rows', productTableData.rows);
  //     setTableDataToSend(productData);
  //   } else if (pathName === "orders") {
  //     console.log("order data", JSON.parse(localStorage.getItem('orderData')));
  //     const orderData = JSON.parse(localStorage.getItem('orderData'));
  //   //   const orderTableData = createTableData({data: orderData, type: "orders"})
  //   //   console.log('columns', orderTableData.columns);
  //   //   console.log('rows', orderTableData.rows);
  //     setTableDataToSend(orderData);  
  //   }
  // }, [pathName]);


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
            {/* {tableData && <EnhancedTable data= {tableData}/>}  */}
            {/* {tableData && <BasicTable />} */}
            <BasicTable tableDataToSend={data}/>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default List