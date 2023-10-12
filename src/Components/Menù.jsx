import { Container } from "react-bootstrap";

import SingleMenu from "./SingleMenu";
import { useState } from "react";

const Menu = () => {
  const [counter, setCounter] = useState(0);

  const plusCounter = () => {
    setCounter(counter + 1);
  };

  const lessCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <Container>
        <SingleMenu counter={counter} plus={plusCounter} less={lessCounter} />
      </Container>
    </div>
  );
};
export default Menu;
