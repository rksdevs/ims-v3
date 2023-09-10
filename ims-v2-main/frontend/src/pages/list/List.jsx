import "./list.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datatable from '../../components/datatable/Datatable';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const List = () => {
  const pathName = useLocation().pathname.slice(1).toLocaleLowerCase();
  const {productData, getProductData, apiData} = useContext(AuthContext)
  const productColumnsData = [
    { field: '_id', headerName: 'ID', width: 160 },
    { field: 'productName', headerName: 'Name', width: 160 },
    { field: 'image', headerName: 'Image', width: 160 },
    { field: 'size', headerName: 'Size', width: 160 },
    { field: 'quantity', headerName: 'Quantity', width: 160 },
    { field: 'price', headerName: 'Price', width: 160 },
    { field: 'description', headerName: 'Description', width: 160 },
    { field: 'category', headerName: 'Category', width: 160 },
    { field: 'color', headerName: 'Color', width: 160 }
  ];

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

  const createTableData = (data) => {
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

    // console.log("keys", keys);
    // keys.push("id");

    let columns = keys.filter((key)=>key !== "_id").map((elem)=> ({
      field: elem,
      headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
      width: 160
    }));

    //add serial number

    columns.unshift({
      field: "slNo",
      headerName: "Sl No",
      width: 160
    })

    columns.concat(actionColumn)

    //setup rows
    let rows = data.map((obj, index)=>{
      let rowObj = {slNo: index + 1};
      keys.forEach((key)=>{
        if (key !== "_id") {
          rowObj[key]= obj[key];
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
    console.log(productData)
    setTableData(createTableData(productData));
    console.log(tableData)

  }, [apiData, productData, pathName])

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
            <Datatable data= {tableData}/> 
          </div>  
        </div>
      </div>
    </div>
  )
}

export default List