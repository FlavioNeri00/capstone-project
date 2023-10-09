import { Carousel, Container } from "react-bootstrap";
import photoCar1 from "../foto scaro/DSC00822.jpg";
import photoCar2 from "../foto scaro/DSC00833.jpg";
import photoCar3 from "../foto scaro/DSC00876.jpg";
import photoCar4 from "../foto scaro/DSC00936.jpg";

const Header = (props) => {
  return (
    <div className="mb-5">
      {/* <Container className="d-flex justify-content-center"> */}
      <Carousel className="mt-4 w-md-25 w-50" id="carousel">
        <Carousel.Item interval={2000}>
          <img src={photoCar1} alt="" style={{ width: "100%" }} />
          <Carousel.Caption className="d-flex align-items-start"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={photoCar2} alt="" style={{ width: "100%" }} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={photoCar3} alt="" style={{ width: "100%" }} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={photoCar4} alt="" style={{ width: "100%" }} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* </Container> */}
    </div>
  );
};

export default Header;
