import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cafe = () => {
  return (
    <div>
      <div
        className="p-5"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)`,

          overflow: "hidden",
          width: "100%",
          height: "85vh",
        }}
      >
        {" "}
        <Container>
          {" "}
          <div>
            <div className="d-flex flex-column justify-content-center px-2" style={{ backdropFilter: "blur(12px)" }}>
              <h2 className="display-1 fw-bold mt-0 py-0" style={{ color: "#164194" }}>
                Benvenuti allo Scaro Cafè
              </h2>
              <h3 className="fs-1 lh-1 " style={{ color: "#2E66B0" }}>
                Scaro Cafe è il braccio economico di Scaro Project. Un bar sociale con una forte attenzione alla
                provenienza dei prodotti e alle storie delle aziende e delle persone con cui coopera. Un piccolo spazio
                che fa da apripista ad un grande progetto.
              </h3>
            </div>
            <div className="text-end mt-5">
              {" "}
              <Link to="/cafe/category">
                <Button className="p-3 rounded-0 border border-0 shadow-lg" style={{ backgroundColor: "#031635" }}>
                  Guarda il nostro menù
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
