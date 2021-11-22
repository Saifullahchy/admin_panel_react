import React from 'react'
import "./charts.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Charts() {

    const data = [
        {
          name: 'Jan',
          "Active User": 4000
        },

        {  name: 'Feb',
          "Active User": 3323
        },
        { name: 'Mar',
          "Active User": 4544
        },
        {  name: 'Apr',
          "Active User": 8930
        },
        {  name: 'May',
          "Active User": 3243
        },
        {  name: 'Jun',
          "Active User": 2343
        },
        {  name: 'Jul',
          "Active User": 4000
        },
        {  name: 'Aug',
          "Active User": 2343
        },
        {  name: 'Sep',
          "Active User": 4534
        },
        {  name: 'Oct',
          "Active User": 7878
        },
        {  name: 'Nov',
          "Active User": 4565
        },
        {  name: 'Dec',
          "Active User": 7674
        },
        
      ];
    return (
        <div className="chart">
            <h3 className="chatTitle">Visitor Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data = {data}>
                    <XAxis dataKey="name" stroke= "#b40e08"/>
                    <Line type = "monotone" dataKey="Active User" stroke= "#ad200d"/>
                    <Tooltip/>
                    <CartesianGrid stroke= "#e0dfdf" strokeDasharray= " 5 5"/>
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}
