import { useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";

import { useDispatch } from "react-redux";

const SingleBook = ({ book }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showBorrow, setShowBorrow] = useState(false);
  const handleCloseBorrow = () => setShowBorrow(false);
  const handleShowBorrow = () => setShowBorrow(true);

  const [showReturn, setShowReturn] = useState(false);
  const handleCloseReturn = () => setShowReturn(false);
  const handleShowReturn = () => setShowReturn(true);

  const [isAvailable, setIsAvailable] = useState(true);

  const dispatch = useDispatch();
  const date = new Date(Date.now() + 12096e5);
  const dateBook = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const bookingBook = () => {
    setIsAvailable(!isAvailable);
    console.log(isAvailable);
  };

  return (
    <>
      {/* {showAlert === true ? <AlertBookBorrowed /> : <></>} */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          className=" border border-0 mb-2"
          style={{
            maxWidth: "500px",
            width: "100%",

            backgroundImage: `url(${book.Img})`,
            backgroundSize: "cover",
            paddingBlockStart: "235px",
            position: "relative",
          }}
        >
          <Badge style={{ position: "absolute", top: "10px", left: "10px" }}>
            {book.Genere}
          </Badge>
          <div style={{ position: "absolute", bottom: "120px", right: "10px" }}>
            {isAvailable === true ? (
              <div
                style={{
                  backgroundColor: "green",
                  width: "20px",
                  height: "20px",
                }}
                className="rounded-circle text-white fs-2 p-0 m-0"
              ></div>
            ) : (
              <div
                style={{
                  backgroundColor: "red",
                  width: "20px",
                  height: "20px",
                }}
                className="rounded-circle text-white fs-2 p-0 m-0"
              ></div>
            )}
          </div>
          <Card.Body
            className="p-0 rounded-bottom"
            style={{ backgroundColor: "#48000C" }}
          >
            <div>
              <div>
                <Card.Title
                  className="pt-1 ms-2"
                  style={{
                    color: "#F4E7DB",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.id}
                </Card.Title>
              </div>
              {isAvailable === true ? (
                <Button
                  className="rounded-0 ms-2 mt-2 border border-0 fw-bold"
                  style={{ backgroundColor: "#F4E7DB", color: "#164194" }}
                  onClick={() => {
                    bookingBook();
                    handleShowBorrow();
                  }}
                >
                  <span>Prenota</span>
                </Button>
              ) : (
                <Button
                  className="rounded-0 ms-2 mt-2 border border-0 fw-bold"
                  style={{ backgroundColor: "#F4E7DB", color: "#164194" }}
                  onClick={() => {
                    bookingBook();
                    handleShowReturn();
                  }}
                >
                  <span>Restituisci</span>
                </Button>
              )}
              <h6
                className="ingredients text-end me-2 mb-3"
                onClick={handleShow}
                style={{
                  textDecoration: "underline",
                  color: "#F4E7DB",
                }}
              >
                Dettagli
              </h6>

              <div className="d-flex align-items-end"></div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Autore: {book.Autore}</li>
            <li>Genere: {book.Genere}</li>
            <li>Casa editrice:{book.Casa_editrice}</li>
          </ul>
        </Modal.Body>
      </Modal>

      <Modal show={showBorrow} onHide={handleCloseBorrow}>
        <Modal.Body className="font-fraunces" style={{ fontSize: "20px" }}>
          Puoi venire a recuperare "{book.id}" quando vuoi in sede! <br />{" "}
          Dovrai riconsegnarlo entro il {dateBook}!
        </Modal.Body>
      </Modal>

      <Modal show={showReturn} onHide={handleCloseReturn}>
        <Modal.Body className="font-fraunces" style={{ fontSize: "20px" }}>
          Grazie per aver restituito "{book.id}" di {book.Autore}!
        </Modal.Body>
      </Modal>
    </>
  );
};
export default SingleBook;
