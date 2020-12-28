import React, { Component } from 'react';
import DashboardItem from './DashboardItems';
import PlayIcon from '../../Assets/play.svg';
import SettingsIcon from '../../Assets/settings.svg';
import AccountIcon from '../../Assets/account.svg';
import AboutUsIcon from '../../Assets/aboutUs.svg';

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardMain">
                
                <h1 className="dashboardMain__h1">QuizzApp</h1>
                
                    <div className="dashboardMain__items">

                    
                    <DashboardItem name="play" icon={PlayIcon}  path="/basicgame"/>
                    <DashboardItem name="settings" icon={SettingsIcon} path="/settings"/>                 
                    <DashboardItem name="Account" icon={AccountIcon} />
                    <DashboardItem name="About us" icon={AboutUsIcon} />


                    </div>
               
            </div>
        )
    }
}

export default Dashboard
