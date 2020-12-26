import React, { Component } from 'react'
import DashboardItem from './DashboardItems'



export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardMain">
                <h1 className="__h1">QuizzApp</h1>

                    <div className="dashboardMain__items">

                    
                    <DashboardItem name="play" path="/basicgame"/>
                    <DashboardItem name="settings" path="/settings"/>                 
                    <DashboardItem name="Account" />
                    <DashboardItem name="About us" />


                    </div>
               
            </div>
        )
    }
}

export default Dashboard
