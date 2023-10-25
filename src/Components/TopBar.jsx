import { useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";
import logo from "../assets/LOGO_SCARO_COLOR-1-removebg-preview_79023991bcaf938605b9.webp";

const TopBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div
        className="d-none  d-md-flex justify-content-between align-items-center shadow-lg font-futura"
        style={{ backgroundColor: "#F2B708", height: "200px" }}
      >
        <div>
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="img-fluid ms-3 no-hover"
              style={{ maxWidth: "90%" }}
            />
          </Link>
        </div>

        <div className="d-flex">
          <Link to="/cafe" className="nav-link link-underline-cafe me-5">
            <h3 className="fs-4" style={{ color: "#221F7B" }}>
              CAFE{" "}
            </h3>
          </Link>
          <Link
            to="/community"
            className="nav-link link-underline-community me-5"
          >
            <h3 className="fs-4" style={{ color: "#221F7B" }}>
              COMMUNITY{" "}
            </h3>
          </Link>
          <Link to="/market" className="nav-link link-underline-market me-5">
            <h3 className="fs-4" style={{ color: "#221F7B" }}>
              MARKET{" "}
            </h3>
          </Link>
        </div>
      </div>

      <div
        className="d-md-none d-flex justify-content-between shadow-lg align-items-center"
        style={{ backgroundColor: "#F2B708", height: "139px" }}
      >
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="img-fluid me-3"
            style={{ maxHeight: "100px" }}
          />
        </Link>
        <Button
          variant="white"
          onClick={handleShow}
          className="me-2 border border-0 fs-2"
        >
          <AiOutlineMenu style={{ color: "#EA5045" }} />
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="top"
          style={{ backgroundColor: "#F2B708" }}
        >
          <Offcanvas.Header closeButton className="pb-1 font-futura">
            <Offcanvas.Title>
              <h2 style={{ color: "#EA5045" }} className="mb-5">
                Benvenuti allo Scaro
              </h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="pt-1" style={{ color: "#EA5045" }}>
            <Row>
              <Col xs={12} md={3}>
                <Link to="/" className="nav-link me-5">
                  <h3 className="fs-4" style={{ color: "#221F7B" }}>
                    HOME
                  </h3>
                </Link>
              </Col>
              <Col xs={12} md={3}>
                <Link to="/cafe" className="nav-link link-underline-cafe ">
                  <h3 className="fs-4" style={{ color: "#221F7B" }}>
                    CAFE{" "}
                  </h3>
                </Link>
              </Col>
              <Col xs={12} md={3} className="">
                <Link
                  to="/community"
                  className="nav-link link-underline-community "
                >
                  <h3 className="fs-4" style={{ color: "#221F7B" }}>
                    COMMUNITY{" "}
                  </h3>
                </Link>
              </Col>
              <Col xs={12} md={3} className="">
                <Link to="/market" className="nav-link link-underline-market ">
                  <h3 className="fs-4" style={{ color: "#221F7B" }}>
                    MARKET{" "}
                  </h3>
                </Link>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};
export default TopBar;
