import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

// import CommentArea from "./CommentArea";

const MySingleBook = (props) => {
  const cardSelected =
    props.elementId === props.asin
      ? "my-3 card-selected"
      : "my-3";
  return (
    <>
      <Card
        key={`book-${props.asin}`}
        className={cardSelected}
        onClick={() => {
          props.elementIdNew(props.asin);
        }}
      >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Categoria:
            {props.category}
          </Card.Text>
          <Badge bg="light" text="dark">
            {props.price}€
          </Badge>
        </Card.Body>
      </Card>
    </>
  );
};

// class MySingleBook extends Component {

//   render() {

//   }
// }

export default MySingleBook;
