import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import photoCafe from "../DSC01091.jpg";

const Cafe = () => {
  return (
    <div>
      <div
        className="p-5"
        style={{
          backgroundImage: `url(${photoCafe})`,
          backgroundSize: "120rem",
          overflow: "hidden",
          width: "100%",
          height: "85vh",
        }}
      >
        {" "}
        <Container>
          {" "}
          <div>
            <div
              className="d-flex flex-column justify-content-center px-2 shadow-lg"
              style={{ backgroundColor: "#164194" }}
            >
              <h2
                className="display-1 mt-0 py-0 font-fraunces"
                id="h2"
                style={{ color: "#F4E7DB" }}
              >
                Benvenuti allo Scaro Cafè
              </h2>
            </div>
            <div
              className="mt-3 shadow-lg p-2 "
              style={{ backgroundColor: "#F4E7DB" }}
            >
              <h3
                className="fs-2 lh-1 text-start font-lato"
                style={{ color: "#17345D" }}
              >
                Scaro Cafe è il braccio economico di Scaro Project. Un bar
                sociale con una forte attenzione alla provenienza dei prodotti e
                alle storie delle aziende e delle persone con cui coopera. Un
                piccolo spazio che fa da apripista ad un grande progetto.
              </h3>
            </div>
            <div className="text-end mt-5">
              {" "}
              <Link to="/cafe/category">
                <Button
                  className="p-4 rounded-0 border border-0 shadow-lg"
                  style={{ backgroundColor: "#031635" }}
                >
                  <span className="fs-5 font-lato" style={{ color: "#F4E7DB" }}>
                    Guarda il nostro menù
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

export default Cafe;
