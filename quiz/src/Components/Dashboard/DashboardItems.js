import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class DashboardItem extends Component {
    render() {
        return (
            <Link className="dashboard__item" to={this.props.path}>
            <div className="">
                
                <p>{this.props.name}</p>
                
            </div>
            </Link>
        )
    }
}

export default DashboardItem
