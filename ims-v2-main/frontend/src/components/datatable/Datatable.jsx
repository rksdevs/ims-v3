import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { brandData } from "../../dataSource";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";

const Datatable = () => {
  const [newBrandData, setNewBrandData] = useState([]);

  // useEffect(()=>{
  //   // const res = fetch("api/brands/allBrands");
  //   // // console.log(res)
  //   // setNewBrandData(res.data);
  //   // console.log(newBrandData)
  // },[newBrandData])

    const actionColumn = [
        {field: "action", headerName: "Actions", width: 160, renderCell: ()=> {
            return (
                <div className="cellAction">
                    <div className="viewButton"><VisibilityIcon /></div>
                    <div className="deleteButton"><DeleteIcon /></div>
                </div>
            )
        }}
    ]

  return (
    <div className='datatableContainer'>
        <DataGrid className="datatable"
        rows={brandData.rows}
        columns={brandData.columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable