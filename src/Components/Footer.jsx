import { Container } from "react-bootstrap";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import sbem from "../assets/vettoriale_sbem_page-0003-removebg.png";
import ttt from "../assets/photo1696362773__2_-removebg-preview.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#F2B708", verticalAlign: "bottom" }}
      className="pb-3 pt-4 shadow-lg"
    >
      <Container>
        <div className="d-flex justify-content-between">
          <span className="text-white" style={{ fontSize: "13px" }}>
            {" "}
            &copy;Scaro{" "}
          </span>
          <div className="text-white">
            <Link
              to="https://www.facebook.com/profile.php?id=61551029436658"
              target="_blank"
            >
              {" "}
              <BsFacebook className="fs-4 me-3" color="#3b5998" />
            </Link>
            <Link to="https://www.instagram.com/scaro.cafe/" target="_blank">
              {" "}
              <BsInstagram className="fs-4" color="#D62976" />
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="pe-5">
            <span className="text-white" style={{ fontSize: "13px" }}>
              P.zza Ravanusella, 1
            </span>
          </div>
          <h6 className="mt-3" style={{ color: "white" }}>
            Powered by:{" "}
          </h6>
          <div className="d-flex justify-content-start w-75">
            <br />
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
