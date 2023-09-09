import "./topbar.scss";
import NoImg from "../../assets/images/NoImg.png"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

const Topbar = () => {
    const {userDetails, login, getProductData, productData} = useContext(AuthContext)
    const [user, setUser] = useState("")
    // const [productData, setProductData] = useState([])
    let url = "auth/login";

    const handleLogin = () => {
        login(url, "testUser1", "testUser1P")
    }

    useEffect(()=>{
        console.log(userDetails);
    }, [userDetails])
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
            <div className="topbarIconContainer" >
                <SettingsIcon />
            </div>
            <img src={NoImg} alt="Profile Pic" className="topAvatar" onClick={handleLogin} />
        </div>
        </div>
    </div>
  )
}

export default Topbar