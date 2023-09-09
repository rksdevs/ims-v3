import "./list.scss"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datatable from '../../components/datatable/Datatable';

const List = () => {
  return (
    <div className="listContainer">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="list">
          <div className="newTitle">
              <h1>All Brands</h1>
          </div>
          <div className="bottom">
            <Datatable /> 
          </div>  
        </div>
      </div>
    </div>
  )
}

export default List