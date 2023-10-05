import { Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1546622891-02c72c1537b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")`,
        filter: "grayscale(80%)",
      }}
    >
      <Container>
        <h2 className="display-1 text-white pt-5">Benvenuti allo Scaro Project</h2>
        <h3 className="display-3 text-white">
          Un posto per{" "}
          <a href="a" className={props.class}>
            mangiare
          </a>
          /
          <a href="a" className={props.class}>
            studiare
          </a>
          /
          <a href="a" className={props.class}>
            divertirsi
          </a>{" "}
        </h3>
      </Container>
    </div>
  );
};

export default Header;
