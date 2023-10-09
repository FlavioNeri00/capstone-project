import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div>
      <div
        className="p-5"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)`,

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
              className="d-flex flex-column justify-content-center px-2"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <h2
                className="display-1 fw-bold mt-0 py-0"
                style={{ color: "#EA5045" }}
              >
                Benvenuti allo Scaro Cafè
              </h2>
              <h3 className="fs-1 lh-1 " style={{ color: "#F38985" }}>
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
                  className="p-3 rounded-0 border border-0 shadow-lg"
                  style={{ backgroundColor: "#48000C" }}
                >
                  Consulta i nostri libri
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
