import logo from "./logo.svg";
import "./App.css";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div
        style={{
          height: "100vh",
          backgroundImage: "url('./assets/images/img_parallax.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container my-5">
        <div className="card rounded-4" style={{ background: "#343a46" }}>
          <div className="card-body">
            <h3 className="text-center text-light">Intro</h3>
            <p className="" style={{ color: "#149eca" }}>
              MERN Developer
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <Row>
          <Col xs={12} md={6} className="my-2">
            <div className="card rounded-4" style={{ background: "#343a46" }}>
              <div className="card-body">
                <h3 className="text-center text-light">Skill Set</h3>
                <p className="" style={{ color: "#149eca" }}>
                  MERN Developer
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="my-2">
            <div className="card rounded-4" style={{ background: "#343a46" }}>
              <div className="card-body">
                <h3 className="text-center text-light">Skill Set</h3>
                <p className="" style={{ color: "#149eca" }}>
                  MERN Developer
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          height: "100vh",
          backgroundImage: "url('./assets/images/img_parallax.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
