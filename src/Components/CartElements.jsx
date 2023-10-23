import { useDispatch, useSelector } from "react-redux";
import { lessCounterAction, plusCounterAction } from "../Redux/action";
import { Button, Col, Container, Row } from "react-bootstrap";

const CartElements = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div
              className="d-flex flex-column flex-sm-row my-2 w-sm-25"
              style={{
                backgroundColor: "#164194",
                color: "#F2B708",
                width: "100%",
              }}
            >
              <img
                src={cart.Img}
                alt=""
                style={{ maxWidth: "17rem", height: "10rem" }}
                className="img-fluid"
              />

              <div className="d-sm-flex flex-column align-items-start ms-2">
                <h2>{cart.id}</h2>
                <h3>{cart.Prezzo}&euro;</h3>
                <div
                  className="d-flex align-items-center justify-content-start card-hover "
                  style={{}}
                >
                  {" "}
                  <Button
                    className="m-0 p-0 border border-0"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <p className="p-0 m-0 p-0 fs-2">-</p>
                  </Button>
                  <p className="m-0 ps-3 pt-2"> </p>{" "}
                  <Button
                    className=" border border-0"
                    style={{ backgroundColor: "transparent" }}
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
