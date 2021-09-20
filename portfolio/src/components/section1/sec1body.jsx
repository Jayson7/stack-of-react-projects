import React, { Component } from "react";
import fashion from "../images/fashion.jpg";
import "./sec1body.css";
import Section3 from "./section3/sec3";
export class Sec1body extends Component {
  constructor() {
    super();
    this.state = {
      maindater: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.timeTrigger = setInterval(() => this.updateClock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeTrigger());
  }
  updateClock() {
    this.setState({
      maindater: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div>
        <div className="sec1body mb-2">
          <div className="row align-items-center justify-content-center bg-white">
            <div className=" col-sm-6 col-md-5 text-center">
              <div className="text">
                <h1>
                  I build apps that makes you pose better with pride and
                  elegance
                </h1>
                <h5> I develop, I Programme, I Penetrate </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Eveniet pariatur sapiente eum similique blanditiis vitae
                  aperiam minima deserunt velit nesciunt, iusto doloremque
                  tempora sunt laborum libero ratione odio.Odit, ipsa!
                </p>
              </div>
            </div>
            <div className="k col-sm-6 col-md-6 ml-1 mr-1  my-3 ">
              <img src={fashion} alt="" />
            </div>
          </div>
        </div>
        <div className="sec2  ">
          <div className="row align-items-center justify-ceontent-center">
            <div className=" col-sm-6 col-md-6  text-center ">
              <div className="container time ">
                <h5> {this.state.maindater} </h5>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="container text-center bg-light ">
                <h4> Time is the Essence </h4>
                <h6>
                  I keep the clock ticking while i <code> code </code>
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit.Corrupti itaque unde minus ab esse omnis enim.Molestias
                  temporibus quidem atque ea possimus eum facilis, corrupti
                  assumenda doloremque ? Excepturi dolor deserunt explicabo
                  debitis repudiandae sit voluptatibus vitae quis ab amet, minus
                  quia deleniti iusto odit quam iste sapiente quo nesciunt iure!
                </p>
              </div>
            </div>
          </div>
        </div>

        <Section3 />
      </div>
    );
  }
}

export default Sec1body;
