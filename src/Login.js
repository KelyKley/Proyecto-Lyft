import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import {
  Button,
  Grid,
  Col,
  Row,
  InputGroup,
  FormControl
} from "react-bootstrap";
import "./Home.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.id = ["Perú", "México", "Chile"];
    this.code = ["+51", "+56", "+52"];
    this.state = {
      selectValue: "Perú",
      code: this.code[0],
      phone: "",
      activeNext: false
    };
    this.options = [{ value: "Perú" }, { value: "México" }, { value: "Chile" }];
  }

  render() {
    const handleChange = e => {
      let country = e.target.value;
      let index = this.id.indexOf(country);
      this.setState({
        selectValue: e.target.value,
        code: this.code[index]
      });
    };
    const validatePhone = e => {
      const phoneNumber = e.target.value;
      if (!isNaN(phoneNumber) && phoneNumber.length <= 9) {
        this.setState({
          phone: e.target.value
        });
        if (phoneNumber.length == 9) {
          this.setState({ activeNext: true });
        } else {
          this.setState({ activeNext: false });
        }
      }
    };
    return (
      <div className="container-fluid">
        <div className="row text-center head">
          <div className="col-xs-12 col-md-12">
            <div className="col-xs-2 col-md-2 back">
              <a href="javascript:window.history.back();">
                <i className="fa fa-angle-left fa-3x" aria-hidden="true" />
              </a>
            </div>
            <div className="col-xs-8 col-md-8">
              <h1>Login</h1>
              <h5 className="text-center">Get a ride in minutes</h5>
            </div>
          </div>
        </div>
        <hr />
        <section className="container">
          <div className="Login-phone">
            <Grid>
              <Row className="show-grid">
                <Col md={3}></Col>
                <Col xs={12} md={6}>
                  <InputGroup>

                    <FormControl
                      componentClass="select"
                      onChange={handleChange}
                      value={this.state.selectValue}
                    >
                      {this.options.map((option, index) => {
                        return (
                          <option key={index} value={option.value}>
                            {" "}
                            {option.value}{" "}
                          </option>
                        );
                      })}
                    </FormControl>
                    
                    <InputGroup.Addon>{this.state.code}</InputGroup.Addon>
                    <FormControl
                      type="tel"
                      value={this.state.phone}
                      placeholder={123456789}
                      onChange={validatePhone}
                    />
                  </InputGroup>
                </Col>
                <Col md={3}></Col>
              </Row>
            </Grid>
          </div>
        </section>
        {this.state.activeNext ? (
          <NavLink to={"/lyftmap"} className="btn-next btn btn-lg btn-block btn-lyft">
            Next
          </NavLink>
        ) : (
          <button className="btn-next btn btn-lg btn-block btn-lyft disabled">
            Next
          </button>
        )}
      </div>
    );
  }
}

export default Login;
