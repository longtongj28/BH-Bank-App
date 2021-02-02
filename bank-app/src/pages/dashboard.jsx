import React, { Component } from "react";
import AllAccountsCard from "../components/dashboard/allAccountsCard";
import DashNav from "../components/dashboard/navbar";
import axios from "axios";


class Dashboard extends Component {
  state = {
    key: "",
    customerID: "600bb6314a4a86057128417f",
    allAccounts: [],
  };

  getAccounts = () => {
    axios
      .get(
        "http://api.nessieisreal.com/customers/600bb6314a4a86057128417f/accounts?key=f17983909ba0167f43b39e93c91bd3cf"
      )
      .then((res) => {
        this.setState(
          {
            allAccounts: res.data,
          },
          () => {
            console.log(this.state.allAccounts);
          }
        );
      });
  };
  componentDidMount = () => {
    this.getAccounts();
  };
  render() {
    return (
      <div>
        <DashNav
          allAccounts={this.state.allAccounts}
          getAccounts={this.getAccounts}
        />
        <AllAccountsCard
          allAccounts={this.state.allAccounts}
          getAccounts={this.getAccounts}
        />
      </div>
    );
  }
}

export default Dashboard;
