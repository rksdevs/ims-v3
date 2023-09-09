import "./widgetsLg.scss"
import NoImg from "../../assets/images/NoImg.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const WidgetsLg = () => {
    const {orderData} = useContext(AuthContext)
  return (
    <div className="widgetsLg">
        <h3 className="widgetsLgTitle">Recent Sales</h3>
        <table className="widgetsLgTable">
            <tr className="widgetsLgTr">
                <th className="widgetsLgTh">Customer</th>
                <th className="widgetsLgTh">Date</th>
                <th className="widgetsLgTh">Product</th>
                <th className="widgetsLgTh">Bill No</th>
                <th className="widgetsLgTh">Amount</th>
            </tr>
            {orderData.map((item)=>(<tr className="widgetsLgTr" key={item._id}>
                <td className="widgetsLgCust">
                    <img src={NoImg} alt="customer img" className="widgetsLgImg"/>
                    <span className="widgetsLgCustName">{item.custName}</span>
                </td>
                <td className="widgetsLgDate">{item.date}</td>
                <td className="widgetsLgProduct">{item.items.map((elem)=>elem.productId.productName)}</td>
                <td className="widgetsLgBill">{item.billNumber}</td>
                <td className="widgetsLgAmount">₹2000</td>
                <td className="widgetsLgButton"><button>View</button></td>
            </tr>))}
            {/* <tr className="widgetsLgTr">
                <td className="widgetsLgCust">
                    <img src={NoImg} alt="customer img" className="widgetsLgImg"/>
                    <span className="widgetsLgCustName">John Doe</span>
                </td>
                <td className="widgetsLgDate">06-May-23</td>
                <td className="widgetsLgProduct">Atlas Bicycle</td>
                <td className="widgetsLgBill">Bill-101</td>
                <td className="widgetsLgAmount">₹2000</td>
                <td className="widgetsLgButton"><button>View</button></td>
            </tr>
            <tr className="widgetsLgTr">
                <td className="widgetsLgCust">
                    <img src={NoImg} alt="customer img" className="widgetsLgImg"/>
                    <span className="widgetsLgCustName">John Doe</span>
                </td>
                <td className="widgetsLgDate">06-May-23</td>
                <td className="widgetsLgProduct">Atlas Bicycle</td>
                <td className="widgetsLgBill">Bill-101</td>
                <td className="widgetsLgAmount">₹2000</td>
                <td className="widgetsLgButton"><button>View</button></td>
            </tr>
            <tr className="widgetsLgTr">
                <td className="widgetsLgCust">
                    <img src={NoImg} alt="customer img" className="widgetsLgImg"/>
                    <span className="widgetsLgCustName">John Doe</span>
                </td>
                <td className="widgetsLgDate">06-May-23</td>
                <td className="widgetsLgProduct">Atlas Bicycle</td>
                <td className="widgetsLgBill">Bill-101</td>
                <td className="widgetsLgAmount">₹2000</td>
                <td className="widgetsLgButton"><button>View</button></td>
            </tr>
            <tr className="widgetsLgTr">
                <td className="widgetsLgCust">
                    <img src={NoImg} alt="customer img" className="widgetsLgImg"/>
                    <span className="widgetsLgCustName">John Doe</span>
                </td>
                <td className="widgetsLgDate">06-May-23</td>
                <td className="widgetsLgProduct">Atlas Bicycle</td>
                <td className="widgetsLgBill">Bill-101</td>
                <td className="widgetsLgAmount">₹2000</td>
                <td className="widgetsLgButton"><button>View</button></td>
            </tr> */}
        </table>
    </div>
  )
}

export default WidgetsLg