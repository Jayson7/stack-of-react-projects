// import logo from "./logo.svg";
import "./App.css";
import { Form, Button } from "react-bootstrap";

function App() {
  return (
    <div className="formscontainer">
      <br />
      <br />
      <div className="text-white container inner">
        <br />
        <h1 className="text-center">Contact Us</h1>
        
        <Form className="mt-5 offset-md-4 ">
          <Form.Group
            className="col-md-6 col-sm-8 col-lg-6"
            controlId="formBasicEmail"
          >
            <Form.Label> Email address </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We 'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="col-md-6 col-sm-8 col-lg-6"
            controlId="formBasicPassword"
          >
            <Form.Label> Password </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group
            className="col-md-6 col-sm-8 col-lg-6"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
