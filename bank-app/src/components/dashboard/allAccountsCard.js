import React, { Component } from "react";
import axios from "axios";
import "./allAccountsCard.css";
import { FiUserCheck } from "react-icons/fi";
class AllAccountsCard extends Component {
  state = {
  };

  
  render() {
    return (
      <>
        <div className="all-accounts-card">
          <h5 className="all-accounts-header">
            <FiUserCheck />&nbsp;
            Personal Accounts
          </h5>
          <div className="account-rows">
            <div className="accounts-headers">
              <div className="header-1">Account Name: </div>
              <div className="header-2"> Rewards: </div>
              <div className="header-3">Balance: </div>
            </div>
            {this.props.allAccounts.map((account, i) => (
              <div className="account-info" key={i}>
                <h6 className="account-name-value">&nbsp;{account.nickname}</h6>
                <p className="rewards-value">${account.rewards}</p>
                <p className="balance-value">${account.balance}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default AllAccountsCard;
