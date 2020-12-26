import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./Dashboard.css"

export class DashboardItem extends Component {
    render() {
        return (
            <Link  to={this.props.path}  style={
            { textDecoration: 'none' }
            }>
                
            <div className="dashboard__container">
                 <div className="dashboard__container__item">
                
            
                
                 </div>
            <h1>{this.props.name}</h1>
            
            </div> 
            
            
               
            </Link>
        )
    }
}

export default DashboardItem
