import { Container, Row } from "react-bootstrap";

import SingleMenu from "./SingleMenu";
import Cart from "./Cart";

import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "..";
import { useParams } from "react-router-dom";

const Menu = () => {
  const [cafe, setCafe] = useState([]);

  const params = useParams();
  const myCategory = params.category;
  console.log(myCategory);
  console.log(params);
  async function PizzaAction() {
    let cafeList = [];
    const cafeColl = collection(db, myCategory);
    const cafeDoc = await getDocs(cafeColl);

    cafeList.push(
      ...cafeDoc.docs.map((i) => ({
        ...i.data(),
        id: i.id,
      }))
    );

    setCafe(cafeList);
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
          {cafe.map((food) => (
            <SingleMenu key={food.ID} food={food} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Menu;
