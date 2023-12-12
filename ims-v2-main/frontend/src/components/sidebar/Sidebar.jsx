import "./sidebar.scss";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ListIcon from '@mui/icons-material/List';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import InventoryIcon from '@mui/icons-material/Inventory';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active" onClick={()=>navigate("/")}>
                        <LineStyleIcon className="sidebarIcon"/>
                        Home
                    </li>
                    {/* <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Sales
                    </li> */}
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Brands</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem" onClick={()=>navigate("/brands")}>
                        <ListIcon className="sidebarIcon"/>
                        All Brands
                    </li>
                    <li className="sidebarListItem" onClick={()=>navigate("/brands/addBrands")}>
                        <PlaylistAddIcon className="sidebarIcon"/>
                        Add Brand
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Categories</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem" onClick={()=>navigate("/category")}>
                        <ListIcon className="sidebarIcon"/>
                        All Categories
                    </li>
                    <li className="sidebarListItem">
                        <PlaylistAddIcon className="sidebarIcon"/>
                        Add Category
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Products</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem" onClick={()=>navigate("/products")}>
                        <InventoryIcon className="sidebarIcon"/>
                        All Products
                    </li>
                    <li className="sidebarListItem">
                        <PostAddIcon className="sidebarIcon"/>
                        Add Product
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Cart</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <AddShoppingCartIcon className="sidebarIcon"/>
                        View Cart
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Orders</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem" onClick={()=>navigate("/orders")}>
                        <ShoppingCartIcon className="sidebarIcon"/>
                        All Orders
                    </li>
                    <li className="sidebarListItem">
                        <ShoppingCartCheckoutIcon className="sidebarIcon"/>
                        Create Order
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Settings</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <SettingsIcon className="sidebarIcon"/>
                        My Settings
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar