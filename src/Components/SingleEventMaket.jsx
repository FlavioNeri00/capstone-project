import { Col, Container, Modal } from "react-bootstrap";
import mercoUni from "../assets/mercoledi universitario scaro.jpg";
import { useState } from "react";
import eventSpac from "../assets/evento speciale scaro.jpg";

const SingleEventMaket = ({ event }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col xs={12} sm={6} md={4} lg={3}>
        <img
          style={{ border: "1px #F4E7DB solid", width: "100%" }}
          src={event.Img}
          alt=""
          className="img-fluid img-hover "
          onClick={handleShow}
        />
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title>
          <img src={event.Img} alt="" className="img-fluid" />
        </Modal.Title>

        <Modal.Body
          className="font-fraunces"
          style={{ backgroundColor: "#F4E7DB" }}
        >
          <h4>{event.id}</h4>
          <h5>
            {event.Giorno}-{event.Orario}
          </h5>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleEventMaket;
