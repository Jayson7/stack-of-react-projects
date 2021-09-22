// import logo from "./logo.svg";
import "./App.css";
// import React from "react";
import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      username: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  handleSubmit(event) {
    alert(
      "A username was submitted: " +
        this.state.username +
        " Email: " +
        this.state.email +
        " Message: " +
        this.state.message
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="formscontainer">
        <br />
        <br />
        <div className="text-white container inner">
          <br />
          <h1 className="text-center">Contact Us</h1>

          <Form className="mt-5 offset-md-4 " onSubmit={this.handleSubmit}>
            <Form.Group
              className="col-md-6 col-sm-8 col-lg-6"
              controlId="formBasicEmail"
            >
              <Form.Label> Email address </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We 'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="col-md-6 col-sm-8 col-lg-6"
              controlId="formBasicusername"
            >
              <Form.Label> Username </Form.Label>
              <Form.Control
                type="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Text className="text-muted">
              We 'll never share your username with anyone else.
            </Form.Text>

            <Form.Group
              className="col-md-6 col-sm-8 col-lg-6"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                as="textarea"
                rows={4}
              />
            </Form.Group>
            <Form.Text className="text-muted">
              We 'll never share your message with anyone else.
            </Form.Text>

            <br />
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
