import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
// import Datatable from '../../components/datatable/Datatable';
import NoImg from "../../assets/images/NoImg.png"

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import "./new.scss"

const New = ({inputs, title}) => {

  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState("");

  return (
    <div className="newContainer">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="new">
        <div className="top">
          <div className="newTitle">
            <h1>Add Brand</h1>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file? URL.createObjectURL(file):NoImg} alt="brand pic" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file" className='inputImg'>
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  // onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="Brand Name"></label>
                <input type="text" placeholder='Brand Name' />
              </div>
              <div className="formInput">
                <label htmlFor="Status"></label>
                {/* <input type="select" placeholder='Status' /> */}
                <select name="status" id="active" className='inputStatus'>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <button>Send</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default New