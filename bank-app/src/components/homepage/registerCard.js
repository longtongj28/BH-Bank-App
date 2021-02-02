import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import './loginForm.css';
class RegisterCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="whole-login-card register">
          <Form className="login-form">
            <h2 style={{ textDecoration: "underline" }}>Register</h2>
            <FormGroup>
              <Label>Username: </Label>
              <Input style={{ textAlign: "center" }} />
            </FormGroup>
            <FormGroup>
              <Label>Confirm Username: </Label>
              <Input style={{ textAlign: "center" }} />
            </FormGroup>
            <FormGroup>
              <Label> Password: </Label>
              <Input style={{ textAlign: "center" }} type="password" />
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password: </Label>
              <Input style={{ textAlign: "center" }} type="password" />
            </FormGroup>
            <FormGroup>
              <Label>Street Number: </Label>
              <Input style={{ textAlign: "center" }} type="password" />
            </FormGroup>
            <FormGroup>
              <Label>Street Name: </Label>
              <Input style={{ textAlign: "center" }} type="password" />
            </FormGroup>
            <FormGroup>
              <Label>City: </Label>
              <Input style={{ textAlign: "center" }} type="password" />
            </FormGroup>
            <FormGroup>
              <Label>State: </Label>
              <Input style={{ textAlign: "center" }} type="password" />
            </FormGroup>
            <FormGroup>
              <Label>Zip: </Label>
              <Input style={{ textAlign: "center" }} type="password" />
            </FormGroup>
            
            <Button
              style={{ width: "200px" }}
              className="btn-med"
              color="primary"
            >
              Register
            </Button>
            <br />
            <Button color="link" onClick={this.props.toggleLoginOrReg} size="sm">
              Log in
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default RegisterCard;
