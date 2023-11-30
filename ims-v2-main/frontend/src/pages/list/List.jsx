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

const List = ({data}) => {
  const pathName = useLocation().pathname.slice(1).toLocaleLowerCase();
  const {productData, orderData, getProductData, apiData} = useContext(AuthContext)
  

  // const actionColumn = [
  //   {field: "action", headerName: "Actions", width: 160, renderCell: ()=> {
  //       return (
  //           <div className="cellAction">
  //               <div className="viewButton"><VisibilityIcon /></div>
  //               <div className="deleteButton"><DeleteIcon /></div>
  //           </div>
  //       )
  //   }}
  // ]

  const [tableData, setTableData] = useState({});
  const [dataForTable, setDataForTable] = useState({
    columns: [],
    rows: []
  });

  const createTableData = ({data, type}) => {
    console.log(data, "testing for table");
    if (!data || data.length === 0) {
      console.log("data is null")
      // Handle the case where data is null, undefined, or empty
      return {
        columns: [],
        rows: [],
      };
    }

    // if (!Array.isArray(data) || data.length === 0) {
    //   throw new Error("Data must be a non empty array of objects");
    // }

    //setup columns 
    let keys = Object.keys(data[0]);
    let columns = [];
    let rows = [];

    //setup rows
    // let setupRows = (data) => {
    //   data.map((obj, index)=>{
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
    // }

    if (type === "products") {
      columns = keys.filter((key)=>key !== "_id" && key !== "image").map((elem)=> ({
        accessor: elem,
        headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
        width: 160
      }));

    } else if (type === "orders") { 
      columns = keys.filter((key)=> key !== "_id").map((elem)=> ({
        accessor: elem,
        headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
        width: 160
      }));

      columns.push({
        accessor: "id",
        headerName: "Id",
        width: 160
      })
    }

    columns.unshift({
      accessor: "slNo",
      headerName: "Sl No",
      width: 160
    })
    
    rows = data.map((obj, index)=>{
      let rowObj = {slNo: index + 1};
      keys.forEach((key)=>{
        if (key !== "_id") {
          rowObj[key]= obj[key];
        } else if (key === "brand") {
          rowObj[key] = obj[key].brandName;
        } else {
          rowObj.id = obj[key];
        }
      });
      return rowObj;
    })

    return {
      columns,
      rows
    }
  }


  // useEffect(()=>{

  //   if (pathName==="products") {
  //     console.log("product data", productData)
  //     setTableData(productData);
  //     // setTableData(createTableData(productData, "products"));
  //     // tableData && localStorage.setItem("productTableHeaders", JSON.stringify(tableData.columns));
  //     // console.log(tableData.columns, "from list useEffect - table data columns")
  //   } else if (pathName==="orders") {
  //     console.log("order data", orderData);
  //     setTableData(orderData);
  //     setTableData(createTableData(orderData, "orders"));
  //     // tableData && localStorage.setItem("orderTableHeaders", JSON.stringify(tableData.columns));
  //     // console.log(tableData.columns, "from list useEffect - table data columns")

  //   }

  // }, [pathName, productData, orderData])

  // useEffect(()=>{

  //   if (pathName==="products") {
  //     // console.log("product data", productData)
  //     // setTableData(createTableData(productData));
  //     // setTableData(productData);
  //     tableData && localStorage.setItem("productTableHeaders", JSON.stringify(tableData.columns));
  //     console.log(tableData, "from list useEffect - table data columns")
  //   } else if (pathName==="orders") {
  //     // console.log("order data", orderData);
  //     // setTableData(createTableData(orderData));
  //     // setTableData(orderData);
  //     tableData && localStorage.setItem("orderTableHeaders", JSON.stringify(tableData.columns));
  //     console.log(tableData, "from list useEffect - table data columns")

  //   }

  // }, [pathName])



  useEffect(() => {
    if (pathName === "products") {
      console.log("product data", productData);
      setTableData(productData, ()=>{
        console.log(productData, "from product call back")
      });
    } else if (pathName === "orders") {
      console.log("order data", orderData);
      // setTableData(orderData);
      setTableData(orderData, ()=>{
        console.log(orderData, "from order call back")
      });
    }
  }, [pathName, productData, orderData]);
  
  useEffect(() => {
    console.log(tableData, "from 170")
      if (tableData) {
        console.log(tableData, "from-172")
        if (pathName === "products") {
          let result = createTableData({data: tableData, type: pathName})
          setDataForTable(result);
          console.log(dataForTable, "from products");
          // localStorage.setItem("productTableHeaders", JSON.stringify(tableData.columns));
        } else if (pathName === "orders") {
          // localStorage.setItem("orderTableHeaders", JSON.stringify(tableData.columns));
          let result = createTableData({data: tableData, type: pathName});
          setDataForTable(result);
          console.log(dataForTable, "from orders");
        }
      } else {
        console.log("no table data")
      }
  }, [tableData, pathName]);

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
            {tableData && <BasicTable tableColumns = {dataForTable.columns} tableRows = {dataForTable.rows}/>}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default List