import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [userDetails, setuserDetails] = useState(null)
    const [productData, setProductData] = useState([]);
    const [orderData, setOrderData] = useState([])

    const login = async(url, username, password) => {
        try {
            const response = axios.post(url, {"username": username,
            "password": password
            });
            let data = (await response).data;
            setuserDetails(data);
            getProductData();
            getOrderData ();

            
        } catch (error) {
            console.log(error);
        }
    }

    const getProductData = async() => {
        try {
            let response = axios.get("product/allProducts", {withCredentials: true})
    
            setProductData((await response).data)
    
        } catch (error) {
            console.log(error) 
        }
        console.log("getprod called")
    }

    const getOrderData = async () => {
        try {
            let res = axios.get("order/allOrders", {withCredentials: true})
            setOrderData((await res).data);
        } catch (error) {
            
        }
    }

    return (<AuthContext.Provider value={{userDetails, login, getProductData, productData, orderData}}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider;