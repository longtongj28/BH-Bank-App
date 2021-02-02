import React, { Component } from "react";
import "./navbar.css";
import logo from "../../img/caponelogo.png";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import WithdrawButton from "./withdrawButton";

class DashNav extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <img
          style={{
            position: "absolute",
            top: "5px",
            height: "50px",
            cursor: "pointer",
          }}
          src={logo}
          alt="Capital One logo"
        />
        <ul className="navbar-btns">
          <li>
            <WithdrawButton {...this.props}/>
          </li>
          <li>
            <button className="account-actions">Deposit</button>
          </li>
          <li>
            <button className="account-actions">Bills</button>
          </li>
          <li>
            <button className="account-actions">Transfer</button>
          </li>
          <li>
            <AiFillSetting className="picture-icons" />
          </li>
          <li>
            <FiLogOut className="picture-icons" />
          </li>
        </ul>
      </div>
    );
  }
}

export default DashNav;
