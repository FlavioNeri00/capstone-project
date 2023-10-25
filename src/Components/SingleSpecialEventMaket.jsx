import { useState } from "react";
import { Col, Modal } from "react-bootstrap";

const SingleSpecialEventMaket = ({ specialEvent }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col xs={12} sm={6} md={4} lg={3}>
        <img
          style={{ border: "1px #F4E7DB solid", width: "100%" }}
          src={specialEvent.Img}
          alt=""
          className="img-fluid img-hover "
          onClick={handleShow}
        />
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Title>
          <img src={specialEvent.Img} alt="" className="img-fluid" />
        </Modal.Title>

        <Modal.Body
          className="font-fraunces"
          style={{ backgroundColor: "#F4E7DB" }}
        >
          <h4>{specialEvent.id}</h4>
          <h5>
            {specialEvent.Giorno}-{specialEvent.Orario}
          </h5>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleSpecialEventMaket;
