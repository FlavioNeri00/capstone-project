import { useState } from "react";
import { Badge, Card, Container, Modal } from "react-bootstrap";

const SingleBook = (props) => {
  const [show, setShow] = useState(false);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card
        className="m-3 border border-0"
        style={{
          maxWidth: "20rem",
          height: "20rem",
          backgroundImage: `url(https://www.ibs.it/images/9788804668282_0_536_0_75.jpg)`,
          backgroundSize: "20rem",
          paddingBlockStart: "235px",
          position: "relative",
        }}
      >
        <Badge style={{ position: "absolute", top: "10px", left: "10px" }}>
          Narrativa
        </Badge>
        <div style={{ position: "absolute", bottom: "90px", right: "10px" }}>
          <div
            style={{
              backgroundColor: "green",
              width: "20px",
              height: "20px",
            }}
            className="rounded-circle text-white fs-2 p-0 m-0"
          ></div>
        </div>
        <Card.Body
          className="p-0 rounded-bottom"
          style={{ backgroundColor: "#48000C" }}
        >
          <Container>
            <div>
              <div>
                <Card.Title style={{ color: "#F4E7DB" }}>
                  On the road
                </Card.Title>
              </div>
              <div>
                <h6
                  className="ingredients "
                  onClick={handleShow}
                  style={{ textDecoration: "underline", color: "#F4E7DB" }}
                >
                  Dettagli
                </h6>
              </div>
              <div className="d-flex align-items-end"></div>
            </div>
          </Container>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>On the road</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Autore: Jack Kerouac</li>
            <li>Genere: Narrativa</li>
            <li>Casa editrice:Mondadori</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Badge>Low fat</Badge>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default SingleBook;
