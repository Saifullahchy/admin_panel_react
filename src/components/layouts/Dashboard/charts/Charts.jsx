import React from 'react'
import "./charts.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({title, data, dataKey, grid} ) {

    return (
        <div className="chart">
            <h3 className="chatTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data = {data}>
                    <XAxis dataKey={dataKey} stroke= "#b40e08"/>
                    <Line type = "monotone" dataKey={dataKey} stroke= "#ad200d"/>
                    <Tooltip/>
                   {grid &&  <CartesianGrid stroke= "#e0dfdf" strokeDasharray= " 5 5"/>}
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}
