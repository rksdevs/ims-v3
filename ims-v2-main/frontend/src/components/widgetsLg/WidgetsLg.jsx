import "./widgetsLg.scss"
import NoImg from "../../assets/images/NoImg.png"

const WidgetsLg = () => {
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
        </table>
    </div>
  )
}

export default WidgetsLg