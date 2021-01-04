import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export class DashboardItem extends Component {
  render() {
    return (
      <Link
        className="dashboard__link"
        to={this.props.path}
        style={{ textDecoration: "none" }}
      >
        <div className="dashboard__container">
          <div className="dashboard__container__icon">
            <img src={this.props.icon}></img>
          </div>

          <h1 className="dashboard__link-name">{this.props.name}</h1>
        </div>
      </Link>
    );
  }
}

export default DashboardItem;
