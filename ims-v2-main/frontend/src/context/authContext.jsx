import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [userDetails, setuserDetails] = useState(null)
    const [productData, setProductData] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [apiData, setApiData] = useState([]);
    const [dataForList, setDataForList] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const navigate = useNavigate();

    const login = async(url, username, password) => {
        try {
            const response = axios.post(url, {"username": username,
            "password": password
            });
            let data = (await response).data;
            setuserDetails(data);
            setIsAuthenticated(true);
            userDetails && localStorage.setItem("userDetails", JSON.stringify(userDetails));
            isAuthenticated && localStorage.setItem("isLoggedIn", true);
            // console.log(userDetails, "userDetails");
            // navigate("/");
            // getProductData();
            // getOrderData ();
        } catch (error) {
            console.log(error);
        }
    }

    // const createTableData = (data) => {
    //     // const newTableData = {
    //     //   columns: [],
    //     //   rows: []
    //     // }
    
    //     // if (!Array.isArray(data) || data.length === 0) {
    //     //   throw new Error("Data must be a non empty array of objects");
    //     // }
    
    //     //setup columns 
    //     let keys = Object.keys(data?.[0]);
    
    //     let columns = keys?.map((elem)=> ({
    //       field: elem,
    //       headerName: elem.charAt(0).toUpperCase() + elem.slice(1),
    //       width: 160
    //     }));
    
    //     //add serial number
    
    //     columns.unshift({
    //       field: "slNo",
    //       headerName: "Sl No",
    //       width: 160
    //     })
    
    //     //setup rows
    //     let rows = data?.map((obj, index)=>{
    //       let rowObj = {slNo: index + 1};
    //       keys?.forEach((key)=>{
    //         if (key !== "_id") {
    //           rowObj[key]= obj[key];
    //         }
    //       });
    //       return rowObj;
    //     })
    
    //     return {
    //       columns,
    //       rows
    //     }
    // }

    const getProductData = async() => {
        try {
            let response = axios.get("product/allProducts", {withCredentials: true});
            setProductData((await response).data);
            // setDataForList(createTableData(productData))
        } catch (error) {
            console.log(error) 
        }
    }

    const getOrderData = async () => {
        try {
            let res = axios.get("order/allOrders", {withCredentials: true})
            setOrderData((await res).data);
        } catch (error) {
            
        }
    }


    return (<AuthContext.Provider value={{userDetails, login, getProductData, productData, orderData, apiData, dataForList, isAuthenticated, getOrderData }}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider;