import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import { collection, getDocs } from "firebase/firestore";
import { db } from "..";
import { Container, Form, InputGroup, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

const BookList = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [books, setBooks] = useState([]);
  // const alertSelector = useSelector((state) => state.books.avalaible);
  async function BooksAction() {
    let bookList = [];
    const book = collection(db, "BooksCommunity");
    const bookDoc = await getDocs(book);
    console.log("yyo", bookDoc);

    bookList.push(
      ...bookDoc.docs.map((i) => ({
        ...i.data(),
        id: i.id,
      }))
    );

    console.log("au", bookList);

    setBooks(bookList);
    console.log("yo", books);
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
        <h2
          className="font-fraunces display-2 ms-2 mt-2"
          style={{ color: "#F4E7DB" }}
        >
          I libri di Scaro Community
        </h2>
        <div className="d-flex justify-content-end">
          <form className="mb-3">
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
