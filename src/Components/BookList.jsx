import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import { collection, getDocs } from "firebase/firestore";
import { db } from "..";
import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { exitLoginAction } from "../Redux/action";

const BookList = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [books, setBooks] = useState([]);
  const userSelector = useSelector((state) => state.login.content);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function BooksAction() {
    let bookList = [];
    const book = collection(db, "BooksCommunity");
    const bookDoc = await getDocs(book);

    bookList.push(
      ...bookDoc.docs.map((i) => ({
        ...i.data(),
        id: i.id,
      }))
    );

    setBooks(bookList);
  }
  useEffect(() => {
    BooksAction();
  }, []);

  const placeholder = `Cerca tra i nostri ${books.length} libri`;

  const handleSearch = (e) => {
    e.preventDefault();
    const searchLowerCase = e.target.value.toLowerCase();
    setInputSearch(searchLowerCase);
  };

  const filteredData = books.filter((el) => {
    if (inputSearch === "") {
      return el;
    } else {
      return (
        el.id.toLowerCase().includes(inputSearch) ||
        el.Autore.toLowerCase().includes(inputSearch) ||
        el.Genere.toLowerCase().includes(inputSearch)
      );
    }
  });

  return (
    <div>
      <Container>
        <div className="text-end">
          {" "}
          {userSelector ? (
            <>
              <h3 className="font-fraunces mt-4" style={{ color: "#F4E7DB" }}>
                Benvenut* {userSelector}
              </h3>
              <h6
                style={{
                  textDecoration: "underline",
                  color: "#F4E7DB",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(exitLoginAction(""))}
              >
                Esci dal tuo profilo
              </h6>
            </>
          ) : (
            <Button
              className="mt-4 rounded-0 border border-0"
              style={{
                backgroundColor: "#EA5045",

                fontSize: "20px",
              }}
              onClick={() => navigate("/login")}
            >
              Accedi al tuo profilo
            </Button>
          )}
        </div>
        <h2
          className="font-fraunces display-2 ms-2 mt-2"
          style={{ color: "#F4E7DB" }}
        >
          I libri di Scaro Community
        </h2>
        <div className="d-flex justify-content-end">
          <form className="mb-4">
            <AiOutlineSearch
              className="fs-4"
              style={{ borderBottom: "1px solid #164194" }}
            />
            <input
              type="text"
              onChange={handleSearch}
              placeholder={placeholder}
              style={{
                width: "20rem",
                borderTop: "0",
                borderLeft: "0",
                borderRight: "0",
                borderBottom: " 1px solid #164194",
                backgroundColor: "transparent",
                outline: 0,
                color: "#EA5045",
              }}
            />
          </form>
        </div>
        <Row className="gy-3">
          {filteredData.map((book) => (
            <SingleBook key={book.ID} book={book} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BookList;
