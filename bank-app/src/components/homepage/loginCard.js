import axios from "axios";
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class LoginCard extends Component {
  state = {
    username: "",
    password: "",
    loggingIn: false,
    userNotFound: "",
    users: [],
  };

  resetState = () => {
    this.setState({
      username: "",
      password: "",
      loggingIn: false,
      userNotFound: false,
    });
  };

  checkUserExists = () => {
    axios.get("/users").then((res) => {
      const data = res.data;
      this.setState({
        users: data,
      });

      for (let i = 0; i < this.state.users.length; i++) {
        if (
          this.state.users[i].username === this.state.username &&
          this.state.users[i].password === this.state.password
        ) {
          this.setState({
            loggingIn: true,
            userNotFound: false,
          });
          break;
        }
      }
    });
  };
  onChangeUsername = (e) => {
    this.setState(
      {
        username: e.target.value,
      },
      () => {
        console.log(this.state.username);
      }
    );
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="whole-login-card">
          <Form className="login-form">
            <h2 style={{ textDecoration: "underline" }}>Login</h2>
            <FormGroup>
              <Label>Username: </Label>
              <br />
              <Input
                onChange={this.onChangeUsername}
                style={{ textAlign: "center" }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password: </Label>
              <br />
              <Input
                onChange={this.onChangePassword}
                style={{ textAlign: "center" }}
                type="password"
              />
            </FormGroup>
            {!this.state.loggingIn && (
              <Button
                onClick={this.checkUserExists}
                style={{ width: "200px" }}
                className="btn-med"
                color="primary"
              >
                Login
              </Button>
            )}
            {this.state.loggingIn && (
              <Button
                style={{ width: "200px", cursor: "not-allowed" }}
                className="btn-med"
                color="secondary"
                disabled
              >
                Logging in...
              </Button>
            )}
            <br />
            <Button
              color="link"
              onClick={this.props.toggleLoginOrReg}
              size="sm"
            >
              Register
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default LoginCard;
