import "./featuredInfo.scss"
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs.20000</span>
                <span className="featuredMoneyRate">
                    -11.4 <TrendingDownIcon className="featuredMoneyTrendIcon negative" />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs.50000</span>
                <span className="featuredMoneyRate">
                    -11.4 <TrendingDownIcon  className="featuredMoneyTrendIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs.10000</span>
                <span className="featuredMoneyRate">
                    +10 <TrendingUpIcon className="featuredMoneyTrendIcon positive"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo