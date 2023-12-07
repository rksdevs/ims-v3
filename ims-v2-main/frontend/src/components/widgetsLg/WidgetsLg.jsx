import "./widgetsLg.scss"
import NoImg from "../../assets/images/NoImg.png"

const WidgetsLg = ({data}) => {
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
            {data?.map((item)=>(<tr className="widgetsLgTr" key={item._id}>
                <td className="widgetsLgCust">
                    <img src={NoImg} alt="customer img" className="widgetsLgImg"/>
                    <span className="widgetsLgCustName">{item.custName}</span>
                </td>
                <td className="widgetsLgDate">{item.date}</td>
                <td className="widgetsLgProduct">{item.items}</td>
                <td className="widgetsLgBill">{item.billNumber}</td>
                <td className="widgetsLgAmount">₹2000</td>
                <td className="widgetsLgButton"><button>View</button></td>
            </tr>))}
        </table>
    </div>
  )
}

export default WidgetsLg