import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import sbem from "../vettoriale_sbem_page-0003-removebg.png";
import ttt from "../photo1696362773__2_-removebg-preview.png";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#294995" }} className="pb-3 pt-2">
      <Container>
        <div className="d-flex justify-content-between">
          <span className="text-white" style={{ fontSize: "13px" }}>
            {" "}
            &copy;Scaro{" "}
          </span>
          <div className="text-white">
            <BsFacebook className="fs-4 me-3" />
            <BsInstagram className="fs-4" />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="pe-5">
            <span className="text-white" style={{ fontSize: "13px" }}>
              P.zza Ravanusella, 1
            </span>
          </div>
          <div className="d-flex justify-content-start w-75">
            <img
              src={sbem}
              alt=""
              className="img-fluid "
              style={{ width: "16%" }}
            />
            <img
              src={ttt}
              alt=""
              className="img-fluid"
              style={{ width: "12%" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
