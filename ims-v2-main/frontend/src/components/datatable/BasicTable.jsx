import React, {useContext, useEffect, useMemo, useState} from 'react'
import {useTable} from 'react-table';
import './basictable.scss'
import { AuthContext } from '../../context/authContext';
import { useLocation } from 'react-router-dom';

const BasicTable = ({tableColumns, tableRows}) => {
    const {productData, orderData} = useContext(AuthContext)
    // const [tableData, setTableData] = useState([]);
    // const pathName = useLocation().pathname.slice(1).toLocaleLowerCase();
    const [dataForTable, setDataForTable] = useState({
        columns: null,
        rows: null
    })

    // const [tableData, setTableData] = useState({});

    // let tableData = {
    //     "columns": [
    //         {
    //             // "field": "slNo",
    //             "headerName": "Sl No",
    //             "width": 160,
    //             "accessor": "slNo"
    //         },
    //         {
    //             // "field": "productName",
    //             "headerName": "ProductName",
    //             "width": 160,
    //             "accessor": "productName",

    //         },
    //         {
    //             // "field": "quantity",
    //             "headerName": "Quantity",
    //             "width": 160,
    //             "accessor": "quantity",

    //         },
    //         {
    //             // "field": "price",
    //             "headerName": "Price",
    //             "width": 160,
    //             "accessor": "price",

    //         },
    //         {
    //             // "field": "size",
    //             "headerName": "Size",
    //             "width": 160,
    //             "accessor": "size",

    //         },
    //         {
    //             // "field": "color",
    //             "headerName": "Color",
    //             "width": 160,
    //             "accessor": "color",
    //         },
    //         {
    //             // "field": "brand",
    //             "headerName": "Brand",
    //             "width": 160,
    //             "accessor": "brand",

    //         },
    //         {
    //             // "field": "category",
    //             "headerName": "Category",
    //             "width": 160,
    //             "accessor": "category",

    //         },
    //         {
    //             // "field": "id",
    //             "headerName": "Id",
    //             "width": 160,
    //             "accessor": "id",

    //         }
    //     ],
    //     "rows": [
    //         {
    //             "slNo": 1,
    //             "id": "644e7c6c701c218de566e5d8",
    //             "productName": "cycle 1",
    //             "image": "image2",
    //             "quantity": 10,
    //             "price": 100,
    //             "size": "S",
    //             "color": "Black",
    //             "brand": "644525d1105ca518eec937c6",
    //             "category": [
    //                 "CBU",
    //                 "Mens"
    //             ]
    //         },
    //         {
    //             "slNo": 2,
    //             "id": "644e7ca6701c218de566e5dc",
    //             "productName": "cycle 2",
    //             "image": "image2",
    //             "quantity": 15,
    //             "price": 150,
    //             "size": "M",
    //             "color": "White",
    //             "brand": "6445262fae2f16ecca464631",
    //             "category": [
    //                 "CBU",
    //                 "Womens"
    //             ]
    //         },
    //         {
    //             "slNo": 3,
    //             "id": "644e88ef5b8aadb36b53f5d9",
    //             "productName": "Jet Tyre",
    //             "image": "Jet Tyre",
    //             "quantity": 20,
    //             "price": 50,
    //             "size": "20",
    //             "color": "Black",
    //             "brand": "6445262fae2f16ecca464631",
    //             "category": [
    //                 "Spare"
    //             ]
    //         },
    //         {
    //             "slNo": 4,
    //             "id": "644e89385b8aadb36b53f5dd",
    //             "productName": "Hercules Chain",
    //             "image": "Hercules Chain",
    //             "quantity": 50,
    //             "price": 30,
    //             "size": "NA",
    //             "color": "Black",
    //             "brand": "6445262fae2f16ecca464631",
    //             "category": [
    //                 "Spare"
    //             ]
    //         }
    //     ]
    // }

    useEffect(()=> {
        console.log(tableColumns, "from new checkpoint-table columns");
        console.log(tableRows, "from new checkpoint-table rows");
        setDataForTable((prevState)=>({
            ...prevState,
            columns: tableColumns,
            rows: tableRows
        }))
        
    }, [tableColumns, tableRows])

    useEffect(()=> {
        console.log(dataForTable, "from data for table")
    }, [dataForTable])

    // const createTableData = (data, type) => {
    //     console.log(data, "testing for table");
    //     if (!data || data.length === 0) {
    //       // Handle the case where data is null, undefined, or empty
    //       return {
    //         columns: [],
    //         rows: [],
    //       };
    //     }
    
    //     // if (!Array.isArray(data) || data.length === 0) {
    //     //   throw new Error("Data must be a non empty array of objects");
    //     // }
    
    //     //setup columns 
    //     let keys = Object.keys(data[0]);
    //     let columns = [];
    //     let rows = [];
    
    //     //setup rows
    //     let setupRows = (data) => {
    //       data.map((obj, index)=>{
    //         let rowObj = {slNo: index + 1};
    //         keys.forEach((key)=>{
    //           if (key !== "_id") {
    //             rowObj[key]= obj[key];
    //           } else if (key === "brand") {
    //             rowObj[key] = obj[key].brandName;
    //           } else {
    //             rowObj.id = obj[key];
    //           }
    //         });
    //         return rowObj;
    //       })
    //     }
    
    //     if (type === "products") {
    //       columns = keys.filter((key)=>key !== "_id" && key !== "image")?.map((elem)=> ({
    //         accessor: elem,
    //         headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
    //         width: 160
    //       }));
    //       // rows = setupRows(data);
    
    //     } else if (type === "orders") { 
    //       columns = keys.filter((key)=> key !== "_id")?.map((elem)=> ({
    //         accessor: elem,
    //         headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
    //         width: 160
    //       }));
    
    //       columns.push({
    //         accessor: "id",
    //         headerName: "Id",
    //         width: 160
    //       })
    //       // rows = setupRows(data);
    //     }
    
    
    //     //add serial number
    
    //     columns.unshift({
    //       accessor: "slNo",
    //       headerName: "Sl No",
    //       width: 160
    //     })
    
    //     // columns.concat(actionColumn)
    
        
    
    //     rows = data.map((obj, index)=>{
    //       let rowObj = {slNo: index + 1};
    //       keys.forEach((key)=>{
    //         if (key !== "_id") {
    //           rowObj[key]= obj[key];
    //         } else if (key === "brand") {
    //           rowObj[key] = obj[key].brandName;
    //         } else {
    //           rowObj.id = obj[key];
    //         }
    //       });
    //       return rowObj;
    //     })
    
    //     return {
    //       columns,
    //       rows
    //     }
    // }

    // useEffect(()=>{

    //     if (pathName==="products") {
    //       // console.log("product data", productData)
    //     //   setTableData(createTableData(productData, "products"));
    //     createTableData(pathName)
    //       tableData && localStorage.setItem("productTableHeaders", JSON.stringify(tableData.columns));
    //       console.log(tableData.columns, "from list useEffect - table data columns")
    //     } else if (pathName==="orders") {
    //       console.log("order data", orderData);
    //       setTableData(createTableData(orderData, "orders"));
    //       tableData && localStorage.setItem("orderTableHeaders", JSON.stringify(tableData.columns));
    //       console.log(tableData.columns, "from list useEffect - table data columns")
    //     }
    // }, [pathName, productData, orderData])

    const columns = useMemo(()=> dataForTable?.columns, []);
    const data = useMemo(()=> dataForTable?.rows, []);

    const tableInstance = useTable({
        columns: dataForTable?.columns,
        data: dataForTable?.rows
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance

  return (
    <table {...getTableProps ()} className='basicTable'>
        <thead>
            {headerGroups?.map((headerGroup)=>(
            <tr {...headerGroup.getHeaderGroupProps()}>
                { headerGroup?.headers?.map((column)=> (
                        <th {...column.getHeaderProps()}>
                            {column.render('headerName')}
                        </th>
                    ))}
            </tr>
            ))}
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows?.map((row)=>{
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {
                            row?.cells?.map(cell=>{
                                return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                            })
                        }
                    </tr>
                )
            })}
            
        </tbody>
    </table>
  )
}

export default BasicTable