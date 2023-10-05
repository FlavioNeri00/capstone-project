import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="mb-3">
      <Container>
        <h2 className="display-2 text-center mb-4 fw-bold " style={{ fontFamily: "myriad-pro" }}>
          SCARO PROJECT
        </h2>
        <Row className="text-center">
          <Col xs={12} lg={4}>
            <Card
              style={{ backgroundColor: "#164194", minHeight: "342px" }}
              className="text-white card-information mb-5 shadow-lg rounded-0"
            >
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="title-myriad" style={{ color: "#F4E7DB" }}>
                  Scaro Cafè
                </Card.Title>
                <Card.Text className="text-start parag-arpona" style={{ color: "#F4E7DB" }}>
                  Scaro Cafe è il braccio economico di Scaro Project. Un bar sociale con una forte attenzione alla
                  provenienza dei prodotti e alle storie delle aziende e delle persone con cui coopera. Un piccolo
                  spazio che fa da apripista ad un grande progetto.
                </Card.Text>
                <Link to="/cafe/category" className=" text-start">
                  <Button
                    style={{ maxWidth: "10rem", backgroundColor: "#031635" }}
                    className=" mt-4 rounded-0 shadow-lg mb-2 border border-0 btn-hov"
                  >
                    I nostri prodotti
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card
              style={{ backgroundColor: "#EA5045", minHeight: "342px" }}
              className="text-white card-information rounded-0"
            >
              <Card.Body className="d-flex flex-column justify-content-between ">
                <Card.Title className="title-myriad" style={{ color: "#F4E7DB" }}>
                  Scaro Community
                </Card.Title>
                <Card.Text className="text-start parag-arpona" style={{ color: "#F4E7DB" }}>
                  Scaro Community è il cuore pulsante di Scaro Project. È Il luogo in cui progettare la città che verrà.
                  Il primo spazio autogestito dagli studenti delle scuole superiori, università ed Erasmus. Uno spazio
                  per chi vive il quartiere e Piazza Ravanusella. Uno spazio per Agrigento e per i suoi cittadini.
                </Card.Text>
                <Button
                  style={{ maxWidth: "11rem", backgroundColor: "#48000B" }}
                  className="text-start mt-4 rounded-0 shadow-lg mb-2 border border-0 btn-hov"
                >
                  La nostra community
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card
              style={{ backgroundColor: "#F4E7DB", minHeight: "342px" }}
              className="text-white card-information rounded-0"
            >
              <Card.Body className="d-flex flex-column justify-content-between" style={{ color: "#164194" }}>
                <Card.Title className="title-myriad">Scaro Market</Card.Title>
                <Card.Text className="text-start parag-arpona">
                  Scaro Market è la riproposizione dello scaro in chiave moderna. È un luogo per fiere di artigianato
                  locale ma anche etnico. Scaro Market è il punto di incontro tra culture diverse che abitano lo stesso
                  spazio.
                </Card.Text>
                <Button
                  style={{ maxWidth: "10rem", backgroundColor: "#D0C6BD", color: "#164194" }}
                  className=" text-start mt-4 rounded-0 shadow-lg mb-2 border border-0 fw-semibold btn-hov"
                >
                  I nostri eventi
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
