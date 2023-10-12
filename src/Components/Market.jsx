import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import markPhoto from "../DSC00933.jpg";

const Market = () => {
  return (
    <div>
      <div
        className="p-5"
        style={{
          backgroundImage: `url(${markPhoto})`,
          backgroundPosition: "center 31%",
          backgroundSize: "100%",
          overflow: "hidden",
          height: "85vh",
        }}
      >
        {" "}
        <Container>
          {" "}
          <div>
            <div
              className="display-1  mt-0 py-1"
              style={{ backgroundColor: "#F4E7DB" }}
            >
              <h2
                className="display-1 font-fraunces ps-1 mt-0 py-0"
                style={{ color: "#164194" }}
              >
                Benvenuti allo Scaro Market
              </h2>
            </div>
            <div
              className="mt-3 shadow-lg p-2 "
              style={{ backgroundColor: "#164194" }}
            >
              <h3
                className="fs-2 lh-1 text-start font-lato"
                style={{ color: "#DCCFC7" }}
              >
                Scaro Market è la riproposizione dello scaro in chiave moderna.
                È un luogo per fiere di artigianato locale ma anche etnico.
                Scaro Market è il punto di incontro tra culture diverse che
                abitano lo stesso spazio.
              </h3>
            </div>
            <div className="text-end mt-5">
              {" "}
              <Link to="/market/calendar">
                <Button
                  className="p-4 rounded-0 border border-0 shadow-lg"
                  style={{ backgroundColor: "#D0C6BD" }}
                >
                  <span className="fs-5 font-lato" style={{ color: "#164194" }}>
                    Guarda i nostri eventi
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Market;
