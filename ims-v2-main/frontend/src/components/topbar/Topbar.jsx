import "./topbar.scss";
import NoImg from "../../assets/images/NoImg.png"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import axios from "axios";
import { useState } from "react";

const Topbar = () => {
    const [user, setUser] = useState("")
    const [productData, setProductData] = useState([])
    const login = async() => {
        try {
            let url = "auth/login";
            const response = axios.post(url, {"username": "testUser1",
            "password": "testUser1P"
           });
            setUser((await response).data.username)
            
        } catch (error) {
            console.log(error);
        }
    }

    const getProductData = async() => {
        try {
            let response = axios.get("http://localhost:3300/api/product/allProducts")
    
            setProductData((await response).data)
    
        } catch (error) {
            console.log(error) 
        }
    }

    console.log(user)
    console.log(productData)
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">IMS Admin</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNoneIcon />
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <LanguageIcon />
            </div>
            <div className="topbarIconContainer" onClick={getProductData} >
                <SettingsIcon />
            </div>
            <img src={NoImg} alt="Profile Pic" className="topAvatar" onClick={login} />
        </div>
        </div>
    </div>
  )
}

export default Topbar