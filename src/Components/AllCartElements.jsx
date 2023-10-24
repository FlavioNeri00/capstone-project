import { useSelector } from "react-redux";
import CartElements from "./CartElements";

const AllCartElements = () => {
  const counterSelector = useSelector((state) => state.pizza.content);
  console.log("yo", counterSelector);

  return counterSelector.map((cart) => (
    <CartElements key={cart.ID} cart={cart} />
  ));
};

export default AllCartElements;
