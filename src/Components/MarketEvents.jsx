import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import mercoUni from "../mercoledi universitario scaro.jpg";
import { useState } from "react";
import eventSpac from "../evento speciale scaro.jpg";

const MarketEvents = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="d-flex flex-column justify-content-evenly flex-events"
      style={{ color: "#F4E7DB" }}
    >
      <Container>
        <h2
          className="display-1 font-fraunces text-center mb-4 mt-3"
          style={{ color: "#164194" }}
        >
          I nostri eventi
        </h2>
        <h2 className="font-fraunces mt-3">I nostri appuntamenti fissi:</h2>
        <div className="mt-3 mb-3 d-flex justify-content-start flex-wrap">
          <img
            style={{ border: "1px #F4E7DB solid" }}
            src={mercoUni}
            alt=""
            className="img-fluid img-hover "
            onClick={handleShow}
          />

          <img
            style={{ border: "1px #F4E7DB solid" }}
            src={mercoUni}
            alt=""
            className="img-fluid img-hover "
            onClick={handleShow}
          />

          <img
            style={{ border: "1px #F4E7DB solid" }}
            src={mercoUni}
            alt=""
            className="img-fluid img-hover "
            onClick={handleShow}
          />
          <img
            style={{ border: "1px #F4E7DB solid" }}
            src={mercoUni}
            alt=""
            className="img-fluid img-hover "
            onClick={handleShow}
          />
        </div>
        <h2 className="font-fraunces">Appuntamenti speciali:</h2>
        <div className="mt-3 mb-3 d-flex justify-content-start flex-wrap">
          <img
            style={{ border: "1px #F4E7DB solid" }}
            src={eventSpac}
            alt=""
            className="img-fluid img-hover "
            onClick={handleShow}
          />
          <img
            style={{ border: "1px #F4E7DB solid" }}
            src={eventSpac}
            alt=""
            className="img-fluid img-hover "
            onClick={handleShow}
          />
          <img
            style={{ border: "1px #F4E7DB solid" }}
            src={eventSpac}
            alt=""
            className="img-fluid img-hover "
            onClick={handleShow}
          />
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Title>
            <img src={mercoUni} alt="" className="img-fluid" />
          </Modal.Title>

          <Modal.Body
            className="font-fraunces"
            style={{ backgroundColor: "#F4E7DB" }}
          >
            <h4>Mercoledì universitario</h4>
            <h5>Ogni mercoledì</h5>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default MarketEvents;
