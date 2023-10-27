import { Container, Row } from "react-bootstrap";

import SingleMenu from "./SingleMenu";
import Cart from "./Cart";

import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "..";
import { useParams } from "react-router-dom";

const Menu = () => {
  const [pizza, setPizza] = useState([]);

  const params = useParams();
  const myCategory = params.category;
  console.log(myCategory);
  console.log(params);
  async function PizzaAction() {
    let pizzaList = [];
    const pizza = collection(db, myCategory);
    const pizzaDoc = await getDocs(pizza);
    console.log("yyo", pizzaDoc);

    pizzaList.push(
      ...pizzaDoc.docs.map((i) => ({
        ...i.data(),
        id: i.id,
      }))
    );

    console.log("au", pizzaList);

    setPizza(pizzaList);
    console.log("yo", pizza);
  }
  useEffect(() => {
    PizzaAction();
  }, []);

  return (
    <div>
      <Container>
        <div className="text-end">
          <Cart />
        </div>

        <Row>
          {pizza.map((food) => (
            <SingleMenu key={food.ID} food={food} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Menu;
