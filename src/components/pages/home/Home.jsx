import React from 'react'
import Charts from '../../layouts/Dashboard/charts/Charts'
import FeaturedInfo from '../../layouts/Dashboard/featuredinfo/FeaturedInfo'
import {UserData} from "./dummyData"
import "./Home.css"
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Charts data= {UserData} title="User Analytics" grid dataKey="Active User" grid />
            <div className="homeWidgets">  
            </div>
        </div>
    )
}
