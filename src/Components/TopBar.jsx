import { useState } from "react";
import { Button } from "react-bootstrap";
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
        className="d-none  d-lg-flex justify-content-between align-items-center shadow-lg font-futura"
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
          {/* <Link to="/" className="nav-link link-underline me-5">
            <h3>Chi siamo </h3>
          </Link>
          <Link to="/" className="nav-link link-underline me-5">
            <h3>Dove puoi trovarci </h3>
          </Link> */}
        </div>

        {/* <Button
          variant="white"
          onClick={handleShow}
          className=" border border-0 fs-2 text-end me-3"
        >
          <BsFillMenuButtonWideFill
            style={{ color: "#EA5045", fontSize: "40px" }}
          />
          <IoIosArrowDown style={{ color: "#EA5045", fontSize: "40px" }} />
        </Button> */}

        {/* <Offcanvas
          show={show}
          onHide={handleClose}
          placement="top"
          style={{
            height: "60vh",
            backgroundColor: "#F2B708",
            color: "#EA5045",
          }}
        >
          <Offcanvas.Header closeButton className="pb-1">
            <Offcanvas.Title>
              <h1 style={{ color: "#EA5045" }}>SCARO PROJECT</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="pt-1">
            <Row>
              <Col xs={12} md={4} lg={3} className="mb-4">
                <h2>Cafè</h2>
                <a href="a" className="text-black">
                  <h5 style={{ color: "#EA5045" }}>Menù</h5>
                </a>
              </Col>
              <Col xs={12} md={4} lg={3} className="mb-4">
                <h2>Community</h2>
                <a href="a" className="text-black">
                  <h5 style={{ color: "#EA5045" }}>Libri</h5>
                </a>
              </Col>
              <Col xs={12} md={4} lg={3} className="mb-4">
                <h2>Market</h2>
                <a href="a" className="text-black">
                  <h5 style={{ color: "#EA5045" }}>Calendario eventi</h5>
                </a>
              </Col>
              <Col xs={12} md={4} lg={3} className="mb-4">
                <h2 className="pb-3" style={{ color: "#EA5045" }}>
                  Chi siamo
                </h2>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <a href="a" className="text-black d-block">
                  {" "}
                  <h2 className="pb-3" style={{ color: "#EA5045" }}>
                    Dove puoi trovarci
                  </h2>
                </a>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <a href="a" className="text-black d-block">
                  {" "}
                  <h2 className="pb-3" style={{ color: "#EA5045" }}>
                    Contattaci
                  </h2>
                </a>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas> */}
      </div>

      <div
        className="d-lg-none d-flex justify-content-between shadow-lg align-items-center"
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
        {/* <Offcanvas
          show={show}
          onHide={handleClose}
          placement="top"
          style={{ height: "60vh", backgroundColor: "#F2B708" }}
        >
          <Offcanvas.Header closeButton className="pb-1">
            <Offcanvas.Title>
              <h1 style={{ color: "#EA5045" }}>SCARO PROJECT</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="pt-1" style={{ color: "#EA5045" }}>
            <Row>
              <Col xs={12} md={4} lg={2} className="mb-4">
                <h2>Cafè</h2>
                <Link to="/cafe" style={{ color: "#EA5045" }}>
                  <h5 onClick={handleClose}>Menù</h5>
                </Link>
              </Col>
              <Col xs={12} md={4} lg={2} className="mb-4">
                <h2>Community</h2>
                <Link to="/community" style={{ color: "#EA5045" }}>
                  <h5>Libri</h5>
                </Link>
              </Col>
              <Col xs={12} md={4} lg={2} className="mb-4">
                <h2>Market</h2>
                <Link to="/market" style={{ color: "#EA5045" }}>
                  <h5>Calendario eventi</h5>
                </Link>
              </Col>
              <Col xs={12} md={4} lg={2} className="mb-4">
                <a href="a" className="d-block" style={{ color: "#EA5045" }}>
                  <h2 className="pb-3">Chi siamo</h2>
                </a>
                <a href="a" className="d-block" style={{ color: "#EA5045" }}>
                  {" "}
                  <h2 className="pb-3">Dove puoi trovarci</h2>
                </a>
                <a href="a" style={{ color: "#EA5045" }}>
                  {" "}
                  <h2 className="pb-3">Contattaci</h2>
                </a>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas> */}
      </div>
    </div>
  );
};
export default TopBar;
