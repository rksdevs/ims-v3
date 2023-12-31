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
import { resetBrands } from "../../features/brands/brandSlice";
import { resetCategory } from "../../features/category/categorySlice";

const Topbar = () => {
    const user = JSON.parse(localStorage.getItem('userDetails')) || null;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = ()=>{
        dispatch(resetOrders());
        dispatch(resetProducts());
        dispatch(resetBrands());
        dispatch(resetCategory());
        dispatch(userLogout());
        navigate('/login', {replace: true});
    }
    
    if (!user) {
        return <div>
            Loading Top bar
        </div>
    }

  return ( user &&
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