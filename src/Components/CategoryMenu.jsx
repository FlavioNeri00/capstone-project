import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const CategoryMenu = () => {
  return (
    <div>
      <Cart/>
      <Container className="my-5">
        <Row className="d-flex justify-content-center gx-5 gy-3">
          <Col xs={12} md={4} lg={3}>
            <Card
              style={{ height: "15rem", width: "18rem" }}
              className="border border-0 "
            >
              <Card.Img
                style={{ objectFit: "cover", overflow: "hidden" }}
                variant="left"
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body
                style={{ backgroundColor: "#164194", color: "#F4E7DB" }}
              >
                <Card.Title>Bevande calde</Card.Title>
                <Card.Text>Caffè, Tè, Cioccolata...</Card.Text>
                <Link to="/:category">
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                  >
                    Vai al menù
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Card
              style={{ height: "15rem", width: "18rem" }}
              className="border border-0 "
            >
              <Card.Img
                style={{ objectFit: "cover", overflow: "hidden" }}
                variant="left"
                src="https://images.unsplash.com/photo-1641244999574-5afea228bd26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Card.Body
                style={{ backgroundColor: "#164194", color: "#F4E7DB" }}
              >
                <Card.Title>Tavola calda</Card.Title>
                <Card.Text>Pizza, Panini, Miscate...</Card.Text>
                <Link to="/:category">
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                  >
                    Vai al menù
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <Card
              style={{ height: "15rem", width: "18rem" }}
              className="border border-0 "
            >
              <Card.Img
                style={{
                  objectFit: "cover",
                  overflow: "hidden",
                  objectPosition: "0 -5rem",
                }}
                variant="left"
                src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlc2glMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body
                style={{ backgroundColor: "#164194", color: "#F4E7DB" }}
              >
                <Card.Title>Bevande fresche</Card.Title>
                <Card.Text>Aranciata, Sprite, Bissap...</Card.Text>
                <Link to="/:category">
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                  >
                    Vai al menù
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Card
              style={{ height: "15rem", width: "18rem" }}
              className="border border-0 "
            >
              <Card.Img
                style={{
                  objectFit: "cover",
                  overflow: "hidden",
                  objectPosition: "center -13rem ",
                }}
                variant="left"
                src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body
                style={{ backgroundColor: "#164194", color: "#F4E7DB" }}
              >
                <Card.Title>Alcool</Card.Title>
                <Card.Text>Birra, Vino, Gin...</Card.Text>
                <Link to="/:category">
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                  >
                    Vai al menù
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryMenu;
