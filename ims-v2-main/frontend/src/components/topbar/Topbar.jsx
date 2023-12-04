import "./topbar.scss";
import NoImg from "../../assets/images/NoImg.png"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
// import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {logout} from '../../features/authSlice'
import { userLogout } from "../../features/authSlice";
import { resetProducts } from "../../features/product/productSlice";
import { resetOrders } from "../../features/order/orderSlice";

const Topbar = () => {
    const user = useSelector((state)=>state.user.userDetails)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = ()=>{
        dispatch(resetOrders());
        dispatch(resetProducts());
        dispatch(userLogout())
    }   
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft" onClick={e=> (navigate("/"))} >
            <span className="logo">IMS Admin - {user.username}</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNoneIcon />
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <LogoutIcon onClick={logout}/>
            </div>
            <div className="topbarIconContainer" >
                <SettingsIcon />
            </div>
            <img src={NoImg} alt="Profile Pic" className="topAvatar" />
        </div>
        </div>
    </div>
  )
}

export default Topbar