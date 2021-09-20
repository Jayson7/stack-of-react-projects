import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="text">
        <h1>
          Hello <span> World </span>
        </h1>
        <h5> I 'm An Expert at Building Dynamic Web Apps</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus
          vitae, accusamus aperiam suscipit at amet unde nobis
          ullam!Exercitationem laborum voluptate dignissimos officiis vero cum
          amet quam iusto molestias officia.
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="secondary" className="m-2">
            Explore
          </Button>
          <Button variant="secondary" className="m-2">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
