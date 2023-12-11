import axios from "axios";

export const createEnhancedTableData = ({data, type}) => {
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
        id: elem,
        label: elem.charAt(0).toUpperCase() + elem.slice(1),
        numeric: !isNaN(data[0][elem]) && isFinite(data[0][elem]),
        disablePadding: true
      }));

    } else if (type === "orders" || type === "brands" || type === "category") { 
      columns = keys.filter((key)=> key !== "_id").map((elem)=> ({
        id: elem,
        label: elem.charAt(0).toUpperCase() + elem.slice(1),
        numeric: !isNaN(data[0][elem]) && isFinite(data[0][elem]),
        disablePadding: true
      }));

      columns.push({
        id: "id",
        label: "Id",
        numeric: false,
        disablePadding: true
      })
    }

    columns.unshift({
      id: "slNo",
      label: "Sl No",
      numeric: true,
      disablePadding: true
    })

    rows = data.map((obj, index) => {
      let rowObj = { slNo: index + 1 };
      keys.forEach((key) => {
        if (key !== "_id") {
          if (key === "brand") {
            rowObj[key] = obj[key].brandName;
          } else if (key === "category") {
            rowObj[key] = obj[key].categoryName;
          } else {
            rowObj[key] = obj[key];
          }
        } else {
          rowObj.id = obj[key];
        }
      });
      return rowObj;
    });

    return {
      columns,
      rows
    }
  }