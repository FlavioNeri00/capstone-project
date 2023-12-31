import { Button } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cartLength = useSelector((state) => state.cafe.content);

  return (
    <div className="mt-2 ">
      <Link to="/cafe/cart-shop">
        <Button style={{ backgroundColor: "#164194", border: 0 }}>
          <BsCartFill className="fs-3" />
          <span className="ms-2">{cartLength.length}</span>
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
