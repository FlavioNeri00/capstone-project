import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram } from "react-icons/bs";

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
        <span className="text-white" style={{ fontSize: "13px" }}>
          P.zza Ravanusella
        </span>
      </Container>
    </div>
  );
};

export default Footer;
