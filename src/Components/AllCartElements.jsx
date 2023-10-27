import { useSelector } from "react-redux";
import CartElements from "./CartElements";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const AllCartElements = () => {
  const cafeSelector = useSelector((state) => state.cafe.content);

  const total = cafeSelector.reduce(
    (totalPrice, item) =>
      totalPrice + parseFloat(item.Prezzo.replace(",", ".")),
    0
  );

  return (
    <div>
      {" "}
      {cafeSelector.length > 0 ? (
        <div>
          <Container>
            {cafeSelector.map((cart) => (
              <CartElements key={cart.ID} cart={cart} />
            ))}
            <div className="text-end mb-5 font-lato ">
              {" "}
              <span style={{ fontSize: "30px", color: "#F4E7DB" }}>
                {" "}
                Totale: {total.toString().replace(".", ",")}
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
