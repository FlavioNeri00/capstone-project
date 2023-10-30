import { Container, Row } from "react-bootstrap";

import SingleMenu from "./SingleMenu";
import Cart from "./Cart";

import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "..";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadersFalseAction } from "../Redux/action";

const Menu = () => {
  const [cafe, setCafe] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Selector = useSelector((state) => state.loaders.content);
  const params = useParams();
  const myCategory = params.category;

  async function cafeAction() {
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
    cafeAction();
    if (cafeAction) {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <Container>
        <div className="text-end">
          <Cart />
        </div>

        <Row>
          {cafe.map((food) => (
            <SingleMenu key={food.ID} food={food} loading={loading} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Menu;
