import {
  Row,
  Col,
  ButtonGroup,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import fantasy from "../src/json/fantasy.json";
import horror from "../src/json/horror.json";
import history from "../src/json/history.json";
import scifi from "../src/json/scifi.json";
import romance from "../src/json/romance.json";
import MySingleBook from "./MySingleBook";

const MyBookList = (props) => {
  const [selectedBook, setSelectedBook] = useState(fantasy);
  const [titleBook, setTitleBook] = useState("");
  const filteredBooks = selectedBook.filter((book) =>
    book.title
      .toLocaleLowerCase()
      .includes(titleBook.toLocaleLowerCase())
  );

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ButtonGroup aria-label="Basic example">
              <Button
                variant="secondary"
                onClick={(e) => setSelectedBook(fantasy)}
              >
                Fantasy
              </Button>
              <Button
                variant="secondary"
                onClick={(e) => setSelectedBook(horror)}
              >
                Horror
              </Button>
              <Button
                variant="secondary"
                onClick={(e) => setSelectedBook(history)}
              >
                History
              </Button>
              <Button
                variant="secondary"
                onClick={(e) => setSelectedBook(scifi)}
              >
                Scifi
              </Button>
              <Button
                variant="secondary"
                onClick={(e) => setSelectedBook(romance)}
              >
                Romance
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="bookTitle"
              >
                <Form.Control
                  type="text"
                  placeholder="Inserisci il titolo del libro"
                  onChange={(e) => {
                    setTitleBook(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row xs={1} md={3} className="gy-5">
          {filteredBooks.map((book) => {
            return (
              <Col key={`book-${book.asin}`}>
                <MySingleBook
                  img={book.img}
                  title={book.title}
                  category={book.category}
                  price={book.price}
                  asin={book.asin}
                  elementId={props.elementId}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default MyBookList;
