import React, { Component } from 'react'
import DashboardItem from './DashboardItems'



export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardMain">
                <h1 className="dashboardMain__h1">Quizz</h1>
                <div>
                    <DashboardItem name="play" path="/basicgame"/>
                    <DashboardItem name="settings" path="/settings"/>
                </div>
            </div>
        )
    }
}

export default Dashboard
