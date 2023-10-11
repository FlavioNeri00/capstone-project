import { Carousel, Container } from "react-bootstrap";
import photoCar1 from "../foto scaro/DSC00822.jpg";
import photoCar2 from "../foto scaro/DSC00833.jpg";
import photoCar3 from "../foto scaro/DSC00876.jpg";
import photoCar4 from "../foto scaro/DSC00936.jpg";
import scarosVideo from "../Video per sito Scaro2.mp4";

const Header = () => {
  return (
    <div
      className="text-center pb-5"
      style={{ backgroundColor: "#164194", height: "100%" }}
    >
      <video
        id="background-video"
        loop
        muted
        autoPlay
        style={{ width: "100%" }}
      >
        <source id="yo" src={scarosVideo} />
      </video>
    </div>
  );
};

export default Header;
