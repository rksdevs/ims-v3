import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { brandData } from "../../dataSource";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";

const Datatable = ({data}) => {

  const [newData, setNewData] = useState([]);

  useEffect(()=>{
    console.log("here", data);
    setNewData(data);
    console.log("newData", newData)
  },[data])

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

  return ( newData ? (<div className='datatableContainer'>
    <DataGrid className="datatable"
    rows={newData?.rows}
    columns={newData?.columns}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    }}
    pageSizeOptions={[5, 10]}
    checkboxSelection
  />
</div>) : (<div>Loading</div>)
  )
}

export default Datatable