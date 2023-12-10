import axios from "axios";

// export const productData = async() => {
//     try {
//         let response = axios.get("http://localhost:3300/api/product/allProducts")

//         return (await response).data

//     } catch (error) {
//         console.log(error) 
//     }
// }

export const createTableData = ({data, type}) => {
    // console.log(data, "testing for table");
    if (!data || data.length === 0) {
      console.log("data is null")
      // Handle the case where data is null, undefined, or empty
      return {
        columns: [],
        rows: [],
      };
    }

    //setup columns 
    let keys = Object.keys(data[0]);
    let columns = [];
    let rows = [];

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