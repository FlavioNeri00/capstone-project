import { Button } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartSelector = useSelector((state) => state.counter.content);
  console.log(cartSelector);
  return (
    <div className="mt-2 ">
      <Button style={{ backgroundColor: "#164194", border: 0 }}>
        <BsCartFill className="fs-3" />
        <span className="ms-2">{cartSelector}</span>
      </Button>
    </div>
  );
};

export default Cart;
