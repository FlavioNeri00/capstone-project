import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  addToTotal,
  lessToCartAction,
  removeFromCartAction,
} from "../Redux/action";

const CartElements = ({ cart }) => {
  const cafeSelector = useSelector((state) => state.cafe.content);
  const find = cafeSelector.filter((i) => i.ID === cart.ID);

  const dispatch = useDispatch();

  const addTocart = () => {
    if (find.length === 0) {
      cart.Quantita = 1;
      dispatch(addToCartAction(cart));
      dispatch(addToTotal(parseFloat(cart.Prezzo)));
    } else {
      dispatch(removeFromCartAction(cart));
      dispatch(
        addToCartAction({
          ...find[0],
          Quantita: find[0].Quantita + 1,
        })
      );
      cart.Quantita = find[0].Quantita + 1;
      dispatch(addToTotal(parseFloat(find[0].Prezzo)));
    }
  };

  const decrementCounter = () => {
    if (find[0].Quantita === 1) {
      dispatch(removeFromCartAction(find[0]));
      cart.Quantita = 0;
    } else if (find[0].Quantita > 1) {
      dispatch(removeFromCartAction(find[0]));
      dispatch(
        lessToCartAction({
          ...find[0],
          Quantita: find[0].Quantita - 1,
        })
      );
      cart.Quantita = find[0].Quantita - 1;
    }
  };
  return (
    <div>
      <div
        className="d-flex flex-column flex-sm-row  my-5 align-items-center align-items-md-start"
        style={{
          color: "#164194",
        }}
      >
        <img
          src={cart.Img}
          alt=""
          style={{ width: "200px", aspectRatio: "1/1" }}
        />

        <div className="d-sm-flex flex-column align-items-start ms-4">
          <h2>{cart.id}</h2>
          <h3 style={{ color: "#F4E7DB" }}>{cart.Prezzo}&euro;</h3>
          <div
            className="d-flex align-items-center justify-content-start card-hover mb-5 font-lato"
            style={{ color: "#EA5045" }}
          >
            {" "}
            <Button
              className="m-0 p-0 border border-0"
              style={{ backgroundColor: "transparent", color: "#164194" }}
            >
              <p
                className="p-0 m-0 p-0 fs-2"
                onClick={() => {
                  decrementCounter();
                }}
              >
                -
              </p>
            </Button>
            <p className="m-0 ps-3 pt-2"> {cart.Quantita} </p>{" "}
            <Button
              className=" border border-0"
              style={{ backgroundColor: "transparent", color: "#164194" }}
            >
              <p
                className="m-0 p-0 fs-2"
                onClick={() => {
                  addTocart();
                }}
              >
                +
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartElements;
