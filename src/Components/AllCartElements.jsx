import { useDispatch, useSelector } from "react-redux";
import CartElements from "./CartElements";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const AllCartElements = () => {
  const cafeSelector = useSelector((state) => state.cafe.content);
  const totalSelector = useSelector((state) => state.total.content);

  return (
    <div>
      {" "}
      {cafeSelector.length > 0 ? (
        <div>
          <Container>
            {[...cafeSelector]

              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((cart) => (
                <CartElements key={cart.ID} cart={cart} />
              ))}

            <div className="text-end mb-5 font-lato ">
              {" "}
              <span style={{ fontSize: "30px", color: "#F4E7DB" }}>
                {" "}
                Totale: {totalSelector.toLocaleString().replace(".", ".")}&euro;
              </span>
            </div>
          </Container>
        </div>
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
