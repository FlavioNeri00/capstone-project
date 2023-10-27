import { useSelector } from "react-redux";
import CartElements from "./CartElements";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const AllCartElements = () => {
  const cafeSelector = useSelector((state) => state.cafe.content);

  return (
    <div>
      {" "}
      {cafeSelector.length > 0 ? (
        cafeSelector.map((cart) => <CartElements key={cart.ID} cart={cart} />)
      ) : (
        <Container className="text-center">
          <h2 className="font-fraunces display-1" style={{ padding: "10rem" }}>
            Il tuo carrello è vuoto. <br />{" "}
            <Link to="/cafe/category" className="nav-link">
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                Premi qui per vedere il nostro menù!
              </span>
            </Link>
          </h2>
        </Container>
      )}
    </div>
  );
};

export default AllCartElements;
