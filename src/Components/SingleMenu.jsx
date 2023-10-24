import { useState } from "react";
import { Badge, Button, Card, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addToCartAction, removeFromCartAction } from "../Redux/action";

const SingleMenu = ({ food }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    dispatch(addToCartAction(food));
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
    if (counter === 1) {
    }
  };

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col sm={12} xs={12} md={4} lg={3}>
        <Card
          className="m-2 img-fluid font-lato"
          style={{
            width: "100%",
            // height: "20rem",
            backgroundImage: `url(${food.Img})`,
            backgroundSize: "cover",
            height: "275.6px",
          }}
        >
          <Card.Body className="d-flex flex-column justify-content-between ">
            <div>
              <Card.Title className="text-dark  bg-warning  p-0 m-0 mb-1 ps-1 ">
                <h4 className="p-0 m-0 ">{food.id}</h4>
              </Card.Title>
              <div className="bg-warning" style={{ width: "30%" }}>
                <span className="ms-1">{food.Prezzo} &euro;</span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-end ">
              <div
                className=""
                style={
                  {
                    // paddingBlockStart: "8em",
                  }
                }
              >
                {" "}
                <div
                  className="d-flex ps-1 align-items-center justify-content-start card-hover shadow-lg "
                  style={{ backgroundColor: "#F2B708", height: "36px" }}
                >
                  {counter > 0 && (
                    <Button
                      className="m-0 p-0 border border-0"
                      style={{ backgroundColor: "transparent", color: "black" }}
                      onClick={() => {
                        decrementCounter();
                      }}
                    >
                      <p className="p-0 m-0 p-0 fs-2">-</p>
                    </Button>
                  )}
                  <p className="m-0 ps-3 pt-2"> {counter}</p>{" "}
                  <Button
                    className=" border border-0 pe-1"
                    style={{ backgroundColor: "transparent", color: "black" }}
                    onClick={() => {
                      incrementCounter();
                    }}
                  >
                    <p className="m-0 p-0 fs-2">+</p>
                  </Button>
                </div>
              </div>

              <Button
                className="border border-0 rounded-0 d-flex "
                style={{
                  backgroundColor: "#F2B708",

                  color: "black",
                }}
              >
                <span
                  className="ingredients font-fraunces"
                  onClick={handleShow}
                  // style={{ textDecoration: "underline" }}
                >
                  Ingredienti
                </span>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {food.Ingredienti.map((i) => (
              <li key={food.ID}>{i}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Badge>{food.Badge}</Badge>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SingleMenu;
