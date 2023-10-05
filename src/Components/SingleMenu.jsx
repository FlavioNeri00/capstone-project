import { useState } from "react";
import { Badge, Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMenu = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card
        className="m-2 img-fluid"
        style={{
          maxWidth: "20rem",
          height: "20rem",
          backgroundImage: `url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80)`,
          backgroundSize: "20rem",
        }}
      >
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="text-dark text-end">Cibo</Card.Title>
          <div className="d-flex justify-content-between align-items-end">
            <div
              className="d-flex align-items-center justify-content-start card-hover"
              style={{ paddingBlockStart: "8em" }}
            >
              {" "}
              {props.counter > 0 && (
                <Button
                  className="m-0 p-0 border border-0"
                  style={{ backgroundColor: "transparent" }}
                  onClick={props.less}
                >
                  <p className="p-0 m-0 p-0 fs-2">-</p>
                </Button>
              )}
              <p className="m-0 ps-3 pt-2"> {props.counter}</p>{" "}
              <Button className=" border border-0" style={{ backgroundColor: "transparent" }} onClick={props.plus}>
                <p className="m-0 p-0 fs-2">+</p>
              </Button>
            </div>

            <h6 className="ingredients" onClick={handleShow} style={{ textDecoration: "underline" }}>
              Ingredienti
            </h6>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingredienti:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Latte</li>
            <li>Zucchero</li>
            <li>Mascarpone</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Badge>Low fat</Badge>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default SingleMenu;
