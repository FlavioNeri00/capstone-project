import { useState } from "react";
import { Badge, Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { lessCounterAction, plusCounterAction } from "../Redux/action";

const SingleMenu = (props) => {
  const [show, setShow] = useState(false);
  const counterSelector = useSelector((state) => state.counter.content);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <div>
      <Row>
        <Col sm={12} xs={12} md={4} lg={3}>
          <Card
            className="m-2 img-fluid"
            style={{
              width: "100%",
              // height: "20rem",
              backgroundImage: `url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80)`,
              backgroundSize: "cover",
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
                  {counterSelector > 0 && (
                    <Button
                      className="m-0 p-0 border border-0"
                      style={{ backgroundColor: "transparent" }}
                      onClick={() =>
                        dispatch(lessCounterAction(counterSelector))
                      }
                    >
                      <p className="p-0 m-0 p-0 fs-2">-</p>
                    </Button>
                  )}
                  <p className="m-0 ps-3 pt-2"> {counterSelector}</p>{" "}
                  <Button
                    className=" border border-0"
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => dispatch(plusCounterAction(counterSelector))}
                  >
                    <p className="m-0 p-0 fs-2">+</p>
                  </Button>
                </div>

                <Button
                  className="border border-0"
                  style={{
                    backgroundColor: "#164194",
                    paddingBlock: "4px",
                    paddingInline: "8px",
                  }}
                >
                  <h6
                    className="ingredients"
                    onClick={handleShow}
                    // style={{ textDecoration: "underline" }}
                  >
                    Ingredienti
                  </h6>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} xs={12} md={4} lg={3}>
          <Card
            className="m-2 img-fluid"
            style={{
              width: "100%",
              // height: "20rem",
              backgroundImage: `url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80)`,
              backgroundSize: "cover",
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
                  {counterSelector > 0 && (
                    <Button
                      className="m-0 p-0 border border-0"
                      style={{ backgroundColor: "transparent" }}
                      onClick={() =>
                        dispatch(lessCounterAction(counterSelector))
                      }
                    >
                      <p className="p-0 m-0 p-0 fs-2">-</p>
                    </Button>
                  )}
                  <p className="m-0 ps-3 pt-2"> {counterSelector}</p>{" "}
                  <Button
                    className=" border border-0"
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => dispatch(plusCounterAction(counterSelector))}
                  >
                    <p className="m-0 p-0 fs-2">+</p>
                  </Button>
                </div>

                <Button
                  className="border border-0"
                  style={{
                    backgroundColor: "#164194",
                    paddingBlock: "4px",
                    paddingInline: "8px",
                  }}
                >
                  <h6
                    className="ingredients"
                    onClick={handleShow}
                    // style={{ textDecoration: "underline" }}
                  >
                    Ingredienti
                  </h6>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} xs={12} md={4} lg={3}>
          <Card
            className="m-2 img-fluid"
            style={{
              width: "100%",
              // height: "20rem",
              backgroundImage: `url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80)`,
              backgroundSize: "cover",
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
                  {counterSelector > 0 && (
                    <Button
                      className="m-0 p-0 border border-0"
                      style={{ backgroundColor: "transparent" }}
                      onClick={() =>
                        dispatch(lessCounterAction(counterSelector))
                      }
                    >
                      <p className="p-0 m-0 p-0 fs-2">-</p>
                    </Button>
                  )}
                  <p className="m-0 ps-3 pt-2"> {counterSelector}</p>{" "}
                  <Button
                    className=" border border-0"
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => dispatch(plusCounterAction(counterSelector))}
                  >
                    <p className="m-0 p-0 fs-2">+</p>
                  </Button>
                </div>

                <Button
                  className="border border-0"
                  style={{
                    backgroundColor: "#164194",
                    paddingBlock: "4px",
                    paddingInline: "8px",
                  }}
                >
                  <h6
                    className="ingredients"
                    onClick={handleShow}
                    // style={{ textDecoration: "underline" }}
                  >
                    Ingredienti
                  </h6>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} xs={12} md={4} lg={3}>
          <Card
            className="m-2 img-fluid"
            style={{
              width: "100%",
              // height: "20rem",
              backgroundImage: `url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80)`,
              backgroundSize: "cover",
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
                  {counterSelector > 0 && (
                    <Button
                      className="m-0 p-0 border border-0"
                      style={{ backgroundColor: "transparent" }}
                      onClick={() =>
                        dispatch(lessCounterAction(counterSelector))
                      }
                    >
                      <p className="p-0 m-0 p-0 fs-2">-</p>
                    </Button>
                  )}
                  <p className="m-0 ps-3 pt-2"> {counterSelector}</p>{" "}
                  <Button
                    className=" border border-0"
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => dispatch(plusCounterAction(counterSelector))}
                  >
                    <p className="m-0 p-0 fs-2">+</p>
                  </Button>
                </div>

                <Button
                  className="border border-0"
                  style={{
                    backgroundColor: "#164194",
                    paddingBlock: "4px",
                    paddingInline: "8px",
                  }}
                >
                  <h6
                    className="ingredients"
                    onClick={handleShow}
                    // style={{ textDecoration: "underline" }}
                  >
                    Ingredienti
                  </h6>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} xs={12} md={4} lg={3}>
          <Card
            className="m-2 img-fluid"
            style={{
              width: "100%",
              // height: "20rem",
              backgroundImage: `url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80)`,
              backgroundSize: "cover",
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
                  {counterSelector > 0 && (
                    <Button
                      className="m-0 p-0 border border-0"
                      style={{ backgroundColor: "transparent" }}
                      onClick={() =>
                        dispatch(lessCounterAction(counterSelector))
                      }
                    >
                      <p className="p-0 m-0 p-0 fs-2">-</p>
                    </Button>
                  )}
                  <p className="m-0 ps-3 pt-2"> {counterSelector}</p>{" "}
                  <Button
                    className=" border border-0"
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => dispatch(plusCounterAction(counterSelector))}
                  >
                    <p className="m-0 p-0 fs-2">+</p>
                  </Button>
                </div>

                <Button
                  className="border border-0"
                  style={{
                    backgroundColor: "#164194",
                    paddingBlock: "4px",
                    paddingInline: "8px",
                  }}
                >
                  <h6
                    className="ingredients"
                    onClick={handleShow}
                    // style={{ textDecoration: "underline" }}
                  >
                    Ingredienti
                  </h6>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} xs={12} md={4} lg={3}>
          <Card
            className="m-2 img-fluid"
            style={{
              width: "100%",
              // height: "20rem",
              backgroundImage: `url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80)`,
              backgroundSize: "cover",
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
                  {counterSelector > 0 && (
                    <Button
                      className="m-0 p-0 border border-0"
                      style={{ backgroundColor: "transparent" }}
                      onClick={() =>
                        dispatch(lessCounterAction(counterSelector))
                      }
                    >
                      <p className="p-0 m-0 p-0 fs-2">-</p>
                    </Button>
                  )}
                  <p className="m-0 ps-3 pt-2"> {counterSelector}</p>{" "}
                  <Button
                    className=" border border-0"
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => dispatch(plusCounterAction(counterSelector))}
                  >
                    <p className="m-0 p-0 fs-2">+</p>
                  </Button>
                </div>

                <Button
                  className="border border-0"
                  style={{
                    backgroundColor: "#164194",
                    paddingBlock: "4px",
                    paddingInline: "8px",
                  }}
                >
                  <h6
                    className="ingredients"
                    onClick={handleShow}
                    // style={{ textDecoration: "underline" }}
                  >
                    Ingredienti
                  </h6>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} xs={12} md={4} lg={3}>
          <Card
            className="m-2 img-fluid"
            style={{
              width: "100%",
              // height: "20rem",
              backgroundImage: `url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80)`,
              backgroundSize: "cover",
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
                  {counterSelector > 0 && (
                    <Button
                      className="m-0 p-0 border border-0"
                      style={{ backgroundColor: "transparent" }}
                      onClick={() =>
                        dispatch(lessCounterAction(counterSelector))
                      }
                    >
                      <p className="p-0 m-0 p-0 fs-2">-</p>
                    </Button>
                  )}
                  <p className="m-0 ps-3 pt-2"> {counterSelector}</p>{" "}
                  <Button
                    className=" border border-0"
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => dispatch(plusCounterAction(counterSelector))}
                  >
                    <p className="m-0 p-0 fs-2">+</p>
                  </Button>
                </div>

                <Button
                  className="border border-0"
                  style={{
                    backgroundColor: "#164194",
                    paddingBlock: "4px",
                    paddingInline: "8px",
                  }}
                >
                  <h6
                    className="ingredients"
                    onClick={handleShow}
                    // style={{ textDecoration: "underline" }}
                  >
                    Ingredienti
                  </h6>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

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
