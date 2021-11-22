import React from 'react';
import "./featuredInfo.css";
import {ArrowDownward} from "@mui/icons-material"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle"> Total Visitor</span>
                <div className="featuredMoneyContainer">
                   <span className="featuredMoney">221</span>
                   <span className="featuredMoneyRate">
                       -1.3 <ArrowDownward/>
                   </span>
                </div>
                <span className="featuredSub">Compared to last month</span>

            </div>

            <div className="featuredItem">
                <span className="featuredTitle">This Month</span>
                <div className="featuredMoneyContainer">
                   <span className="featuredMoney">221</span>
                   <span className="featuredMoneyRate">
                       -1.3 <ArrowDownward/>
                   </span>
                </div>
                <span className="featuredSub">Compared to last month</span>

            </div><div className="featuredItem">
                <span className="featuredTitle">Compare to last month</span>
                <div className="featuredMoneyContainer">
                   <span className="featuredMoney">221</span>
                   <span className="featuredMoneyRate">
                       -1.3 <ArrowDownward className="featuredIcon"/>
                   </span>
                </div>
                <span className="featuredSub">Compared to last month</span>

            </div>
            
        </div>

    )
}
