import scarosVideo from "../SCARO (1).mp4";

const Header = () => {
  return (
    <div
      className="text-center pb-5"
      style={{ backgroundColor: "#164194", height: "100%" }}
    >
      <video
        id="background-video"
        loop
        autoPlay
        controls
        style={{ width: "100%" }}
      >
        <source id="yo" src={scarosVideo} />
      </video>
    </div>
  );
};

export default Header;
