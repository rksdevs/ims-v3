import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
// import NoImg from "../../assets/images/NoImg.png"
import { useLocation } from 'react-router-dom';
// import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useEffect, useState } from 'react';
import "./new.scss"
import { addNewBrand, fetchBrands } from '../../features/brands/brandService';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify'
import axios from 'axios';
import WidgetsSm from '../../components/widgetsSM/WidgetsSm';

const NewBrand = ({inputs, title}) => {
  // const [pathName, setPathname] = useState(useLocation().pathname.split("/"));
  const pathNameSegment = useLocation().pathname.split("/")[1];
  const heading = pathNameSegment?.charAt(0).toLocaleUpperCase() + pathNameSegment.slice(1);
  const dispatch = useDispatch();
  const {isLoading, isError, errorMessage, isSuccess, brands} = useSelector((state)=>state.brands)
  //need to setup the dispatcher function for adding brands

  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState({
    brandName: '',
    status: ''
  });

  const {brandName, status} = file

  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target
    // if (value !== "") {
    //   setFile((prevState)=>(
    //     {
    //       ...prevState,
    //       [name]: value
    //     }
    //   ))
    // }

    setFile((prevState)=>(
      {
        ...prevState,
        [name]: value
      }
    ))
  }

  // useEffect(()=>{
  //   console.log('triggered from add brand')
  //   dispatch(fetchBrands());
  // }, [dispatch, brands])

  // useEffect(()=>{
  //   if(isError) {
  //     toast.error(errorMessage)
  //   } else if (!isLoading && isSuccess) {
  //     toast.success("Brand Added")
  //   }

  // }, [dispatch,isLoading, isError, isSuccess, errorMessage])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(brandName, status);
    dispatch(addNewBrand({brandName, status}));
    if(isError) {
      toast.error(errorMessage)
    } else if (!isLoading && isSuccess && !isError) {
      dispatch(fetchBrands());
      toast.success("Brand Added")
    }
  }

  return (
    <div className="newContainer">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="new">
          <div className="top">
            <div className="newTitle">
              <h1>Add {heading}</h1>
            </div>
          </div>
          <div className="bottom">
            {/* <div className="left">
              <img src={file? URL.createObjectURL(file):NoImg} alt="brand pic" />
            </div> */}
            <div className="right">
              <form onSubmit={handleSubmit}>
              {/* <div className="formInput">
                  <label htmlFor="file" className='inputImg'>
                    Image: <DriveFolderUploadIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    // onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div> */}
                <div className="formInput">
                  <label htmlFor="Brand Name"></label>
                  <input type="text" placeholder='Brand Name' name="brandName" onChange={handleChange} value={brandName}/>
                </div>
                <div className="formInput">
                  <label htmlFor="Status"></label>
                  {/* <input type="select" placeholder='Status' /> */}
                  <select name="status" id="active" className='inputStatus' onChange={handleChange} value={status}>
                    <option value="">Select from dropdown</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                {/* {inputs?.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))} */}
                <button>Add {heading}</button>
              </form>
            </div>
          </div>
          {/* <div className='widgets-container'>
          <h3 className="widgetsSmTitle" >Stock Insights</h3>
            <ul className="widgetsSmList">
                {brands?.map((item)=>(
                <li className="widgetsSmListItem" >
                    <span className="widgetsSmProductName">{item.brandName}</span>
                    <span className="widgetsSmProductQuantity">{item.status}</span>
                    <span className="widgetsSmProductQuantity">{item._id}</span>
                </li>
                ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default NewBrand