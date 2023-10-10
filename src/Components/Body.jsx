import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="mb-3 mt-5">
      <Container className="text-center" fluid="lg">
        <h2
          id="title-home"
          className="display-2  mb-4 fw-bold text-center"
          style={{ fontFamily: "Catamaran", color: "#164194" }}
        >
          "<span style={{ color: "#EA5045" }}>SCARO PROJECT</span>, IL NUOVO
          PROGETTO DI{" "}
          <span style={{ color: "#F4E7DB" }}>RIQUALIFICAZIONE URBANA</span> AD
          AGRIGENTO"
        </h2>
      </Container>
    </div>
  );
};

export default Body;
