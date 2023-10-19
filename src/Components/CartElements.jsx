import { useDispatch, useSelector } from "react-redux";
import { lessCounterAction, plusCounterAction } from "../Redux/action";
import { Button, Col, Container, Row } from "react-bootstrap";

const CartElements = () => {
  const dispatch = useDispatch();
  const counterSelector = useSelector((state) => state.counter.content);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div
              className="d-flex flex-column flex-sm-row my-2 w-sm-25 w-100"
              style={{
                backgroundColor: "#164194",
                color: "#F2B708",
                width: "100%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                alt=""
                style={{ maxWidth: "17rem" }}
                className="img-fluid"
              />

              <div className="d-sm-flex flex-column align-items-start ms-2">
                <h2>Cibo</h2>
                <h3>Prezzo</h3>
                <div
                  className="d-flex align-items-center justify-content-start card-hover "
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartElements;
