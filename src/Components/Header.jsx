import { Carousel, Container } from "react-bootstrap";
import photoCar1 from "../foto scaro/DSC00822.jpg";
import photoCar2 from "../foto scaro/DSC00833.jpg";
import photoCar3 from "../foto scaro/DSC00876.jpg";
import photoCar4 from "../foto scaro/DSC00936.jpg";
import scarosVideo from "../Video per sito Scaro1.mp4";

const Header = (props) => {
  return (
    <div className="mb-5 mt-3">
      <video controls autoPlay id="carousel" width={"80%"}>
        <source src={scarosVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Header;
