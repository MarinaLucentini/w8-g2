import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./MyNav";
import Welcome from "./Welcome";
import MyFooter from "./MyFooter";
import MyBookList from "./MyBookList";
import {
  Alert,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";
// import Home from "./Home";

const App = (props) => {
  const [elementId, setElementId] = useState("");
  return (
    <div className="App" data-bs-theme="dark">
      <header className="App-header">
        <MyNav />
      </header>
      <main className="mx-3">
        <Welcome />
        <Container>
          <Row>
            <Col>
              <MyBookList
                elementIdNew={setElementId}
                elementId={elementId}
              />
            </Col>
            <Col>
              {elementId ? (
                <CommentArea elementId={elementId} />
              ) : (
                <Alert>Seleziona un libro</Alert>
              )}
            </Col>
          </Row>
        </Container>
      </main>
      <MyFooter />
    </div>
  );
};

export default App;
