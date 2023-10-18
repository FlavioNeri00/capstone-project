import { Container } from "react-bootstrap";

import SingleMenu from "./SingleMenu";
import Cart from "./Cart";

const Menu = () => {
  return (
    <div>
      <Container>
        <div className="text-end">
          <Cart />
        </div>
        <SingleMenu />
      </Container>
    </div>
  );
};
export default Menu;
