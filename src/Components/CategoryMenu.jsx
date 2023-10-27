import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

const CategoryMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container className="my-5">
        <div className="text-end mb-3">
          {" "}
          <Cart />
        </div>
        <div>
          <Row className=" gx-5 gy-3">
            <Col xs={12} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "15rem" }}
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
                  {/* <Link to="/:category"> */}
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                    onClick={() => navigate(`/Bevande calde`)}
                  >
                    Vai al menù
                  </Button>
                  {/* </Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "15rem" }}
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
                  {/* <Link to="/:category"> */}
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                    onClick={() => navigate(`/Tavola calda`)}
                  >
                    Vai al menù
                  </Button>
                  {/* </Link> */}
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "15rem" }}
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
                  {/* <Link to="/:category"> */}
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                    onClick={() => navigate(`/Bevande fresche`)}
                  >
                    Vai al menù
                  </Button>
                  {/* </Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "15rem" }}
                className="border border-0 "
              >
                <Card.Img
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                    objectPosition: "center -10rem ",
                  }}
                  variant="left"
                  src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body
                  style={{ backgroundColor: "#164194", color: "#F4E7DB" }}
                >
                  <Card.Title>Birre</Card.Title>
                  <Card.Text>Ceres, Dello Stretto, Beck's...</Card.Text>
                  {/* <Link to="/:category"> */}
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                    onClick={() => navigate(`/Birre`)}
                  >
                    Vai al menù
                  </Button>
                  {/* </Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "15rem" }}
                className="border border-0 "
              >
                <Card.Img
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                    objectPosition: "center -13rem ",
                  }}
                  variant="left"
                  src="https://images.unsplash.com/photo-1609951651556-5334e2706168?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D"
                />
                <Card.Body
                  style={{ backgroundColor: "#164194", color: "#F4E7DB" }}
                >
                  <Card.Title>Cocktail</Card.Title>
                  <Card.Text>Spritz, Negroni, Gin Lemon...</Card.Text>
                  {/* <Link to="/:category"> */}
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                    onClick={() => navigate(`/Cocktail`)}
                  >
                    Vai al menù
                  </Button>
                  {/* </Link> */}
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "15rem" }}
                className="border border-0 "
              >
                <Card.Img
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                    objectPosition: "center -10rem ",
                  }}
                  variant="left"
                  src="https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2luZXxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Card.Body
                  style={{ backgroundColor: "#164194", color: "#F4E7DB" }}
                >
                  <Card.Title>Vini</Card.Title>
                  <Card.Text>Nero d'Avola, Grillo...</Card.Text>
                  {/* <Link to="/:category"> */}
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                    onClick={() => navigate(`/Vini`)}
                  >
                    Vai al menù
                  </Button>
                  {/* </Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "15rem" }}
                className="border border-0 "
              >
                <Card.Img
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                    objectPosition: "center -5rem ",
                  }}
                  variant="left"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwoHjUpfX20nVXz_5Whq_i0kf8nBzNToWfQ&usqp=CAU"
                />
                <Card.Body
                  style={{ backgroundColor: "#164194", color: "#F4E7DB" }}
                >
                  <Card.Title>Amari</Card.Title>
                  <Card.Text>Jagermeister, Del Capo...</Card.Text>
                  {/* <Link to="/:category"> */}
                  <Button
                    className="border border-0 rounded-0"
                    style={{ backgroundColor: "#031635" }}
                    onClick={() => navigate(`/Amari`)}
                  >
                    Vai al menù
                  </Button>
                  {/* </Link> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CategoryMenu;
