import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import commPhoto from "../DSC00978.jpg";

const Community = () => {
  return (
    <div>
      <div
        className="p-5 img-fluid"
        style={{
          backgroundImage: `url(${commPhoto})`,
          backgroundPosition: "center 31%",
          backgroundSize: "100%",
          overflow: "hidden",
          height: "85vh",
          backgroundOrigin: "border-box",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <Container>
          {" "}
          <div className="d-flex flex-column justify-content-center px-2 shadow-lg">
            <div
              className="display-1  mt-0 py-1"
              style={{ backgroundColor: "#EA5045" }}
            >
              <h2
                className="display-1 mt-0 py-0 font-fraunces"
                style={{ color: "#F4E7DB" }}
              >
                Benvenuti allo Scaro Community
              </h2>
            </div>
            <div
              className="mt-3 shadow-lg p-2 "
              style={{ backgroundColor: "#F4E7DB" }}
            >
              <h3
                className="fs-2 lh-1 text-start font-lato"
                style={{ color: "#B03330" }}
              >
                Scaro Community è il cuore pulsante di Scaro Project. È Il luogo
                in cui progettare la città che verrà. Il primo spazio
                autogestito dagli studenti delle scuole superiori, università ed
                Erasmus. Uno spazio per chi vive il quartiere e Piazza
                Ravanusella. Uno spazio per Agrigento e per i suoi cittadini.
              </h3>
            </div>
            <div className="text-end mt-5">
              {" "}
              <Link to="/community/books">
                <Button
                  className="p-4 rounded-0 border border-0 shadow-lg"
                  style={{ backgroundColor: "#48000C" }}
                >
                  <span className="fs-5 font-lato" style={{ color: "#F4E7DB" }}>
                    Consulta i nostri libri
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

export default Community;
