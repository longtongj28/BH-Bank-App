import React, { Component } from "react";
import LoginCard from "../components/homepage/loginCard";
import "../components/homepage/loginForm.css";
import logo from "../img/caponelogo.png";
import RegisterCard from "../components/homepage/registerCard";

class LoginPage extends Component {
  state = {
    loginOrReg: true,
  };

  toggleLoginOrReg = () => {
    this.setState({
      loginOrReg: !this.state.loginOrReg,
    });
  };
  render() {
    return (
      <div className="login-page">
        <div>
          <img className="site-logo" src={logo} alt="Capital One Logo" />
          {this.state.loginOrReg === true && (
            <LoginCard toggleLoginOrReg={this.toggleLoginOrReg} />
          )}
          {this.state.loginOrReg === false && (
            <RegisterCard toggleLoginOrReg={this.toggleLoginOrReg} />
          )}
        </div>
      </div>
    );
  }
}

export default LoginPage;
