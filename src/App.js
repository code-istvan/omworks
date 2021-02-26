import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from ".//pics/omworks_final.svg";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={img} alt="omworks - yoga creatives" />
        </Col>
      </Row>
    </Container>
    // <div className="App">
    //   <header className="App-header">
    //   <img src={img} alt="omworks - yoga creatives"/>
    //   </header>
    // </div>
  );
}

export default App;
