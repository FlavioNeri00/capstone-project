import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCartAction,
  lessToCartAction,
  removeFromCartAction,
} from "../Redux/action";

const SingleMenu = ({ food }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cafeSelector = useSelector((state) => state.cafe.content);
  const find = cafeSelector.filter((i) => i.ID === food.ID);

  const addTocart = () => {
    if (find.length === 0) {
      food.Quantita = 1;
      dispatch(addToCartAction(food));
    } else {
      dispatch(removeFromCartAction(food));
      dispatch(
        addToCartAction({
          ...find[0],
          Quantita: find[0].Quantita + 1,
        })
      );
      food.Quantita = find[0].Quantita + 1;
    }
  };

  const decrementCounter = () => {
    if (find[0].Quantita === 1) {
      dispatch(removeFromCartAction(find[0]));
      food.Quantita = 0;
    } else {
      dispatch(removeFromCartAction(find[0]));
      dispatch(
        lessToCartAction({
          ...find[0],
          Quantita: find[0].Quantita - 1,
        })
      );
      food.Quantita = find[0].Quantita - 1;
    }
    console.log(find);
  };

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
              <div>
                {" "}
                <div
                  className="d-flex ps-1 align-items-center justify-content-start card-hover shadow-lg "
                  style={{ backgroundColor: "#F2B708", height: "36px" }}
                >
                  {food.Quantita > 0 && (
                    <Button
                      className="m-0 p-0 border border-0"
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      onClick={() => {
                        decrementCounter();
                      }}
                    >
                      <p className="p-0 m-0 p-0 fs-2">-</p>
                    </Button>
                  )}
                  <p className="m-0 ps-3 pt-2">{food.Quantita}</p>{" "}
                  <Button
                    className=" border border-0 pe-1"
                    style={{ backgroundColor: "transparent", color: "black" }}
                    onClick={() => {
                      addTocart();
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
          <Modal.Title className="font-fraunces">{food.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="font-futura">
          <ul>
            {food.Ingredienti.map((i, index) => (
              <li key={index}>{i}</li>
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
