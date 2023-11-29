import "./list.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import EnhancedTable from '../../components/datatable/EnhancedTable';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const List = ({data}) => {
  const pathName = useLocation().pathname.slice(1).toLocaleLowerCase();
  const {productData, orderData, getProductData, apiData} = useContext(AuthContext)
  

  const actionColumn = [
    {field: "action", headerName: "Actions", width: 160, renderCell: ()=> {
        return (
            <div className="cellAction">
                <div className="viewButton"><VisibilityIcon /></div>
                <div className="deleteButton"><DeleteIcon /></div>
            </div>
        )
    }}
]

  const [tableData, setTableData] = useState({});

  const createTableData = (data, type) => {
    console.log(data, "testing for table");
    if (!data || data.length === 0) {
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
    let setupRows = (data) => {
      data.map((obj, index)=>{
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
    }

    if (type === "products") {
      columns = keys.filter((key)=>key !== "_id" && key !== "image").map((elem)=> ({
        field: elem,
        headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
        width: 160
      }));
      // rows = setupRows(data);

    } else if (type === "orders") { 
      columns = keys.filter((key)=> key !== "_id").map((elem)=> ({
        field: elem,
        headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
        width: 160
      }));

      columns.push({
        field: "id",
        headerName: "Id",
        width: 160
      })
      // rows = setupRows(data);
    }


    //add serial number

    columns.unshift({
      field: "slNo",
      headerName: "Sl No",
      width: 160
    })

    // columns.concat(actionColumn)

    

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


  useEffect(()=>{

    if (pathName==="products") {
      // console.log("product data", productData)
      setTableData(createTableData(productData, "products"));
      tableData && localStorage.setItem("productTableHeaders", JSON.stringify(tableData.columns));
      console.log(tableData.columns, "from list useEffect - table data columns")
    } else if (pathName==="orders") {
      console.log("order data", orderData);
      setTableData(createTableData(orderData, "orders"));
      tableData && localStorage.setItem("orderTableHeaders", JSON.stringify(tableData.columns));
      console.log(tableData.columns, "from list useEffect - table data columns")

    }

  }, [pathName, productData, orderData])

  useEffect(()=>{

    if (pathName==="products") {
      // console.log("product data", productData)
      // setTableData(createTableData(productData));
      tableData && localStorage.setItem("productTableHeaders", JSON.stringify(tableData.columns));
      // console.log(tableData.columns, "from list useEffect - table data columns")
    } else if (pathName==="orders") {
      // console.log("order data", orderData);
      // setTableData(createTableData(orderData));
      tableData && localStorage.setItem("orderTableHeaders", JSON.stringify(tableData.columns));
      // console.log(tableData.columns, "from list useEffect - table data columns")

    }

  }, [pathName, tableData])

  //based on pathname we need to create data set which needs to be spanned in the list below
  

  if (pathName === "products") {
    //for products - check pathname if it product - create a data set with certain fixed attributes and others being grabbed from the api


  }

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
            {tableData && <EnhancedTable data= {tableData}/>} 
          </div>  
        </div>
      </div>
    </div>
  )
}

export default List