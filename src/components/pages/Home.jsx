import React from 'react'
import Charts from '../layouts/Dashboard/charts/Charts'
import FeaturedInfo from '../layouts/Dashboard/featuredinfo/FeaturedInfo'
import "./Home.css"
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Charts/>
        </div>
    )
}
