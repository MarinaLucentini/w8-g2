import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComments = (props) => {
  const [commenti, setCommenti] = useState({
    comment: "",
    rate: "",
    elementId: props.elementId,
  });
  const fetchComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "POST",
        body: JSON.stringify(commenti),
        headers: {
          "Content-Type": "application/json",

          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjYwYTdmMzA0NjAwMWFlNTlmYTEiLCJpYXQiOjE3MTQ0MDAxMTIsImV4cCI6MTcxNTYwOTcxMn0.R1bNr5Db_DgmIlOFTMUMkxtY2H6Nt-0wEcEDw9S58-8",
        },
      }
    )
      .then((rep) => {
        if (rep.ok) {
          setCommenti({
            comment: "",
            rate: "",
            elementId: props.elementId,
          });
        } else {
          throw new Error("si è verificato un errore");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    fetchComment();
  };
  const handleChanged = (propertyName, propertyValue) => {
    setCommenti(...commenti, {
      [propertyName]: propertyValue,
    });
  };

  return (
    <>
      <Form onSubmit={handlesubmit}>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Aggiungi un commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) =>
              handleChanged("comment", e.target.value)
            }
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) =>
            handleChanged("rate", e.target.value)
          }
        >
          <option>
            Seleziona il voto che intendi attribuire al
            libro
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <Button
          type="submit"
          variant="success"
          className="my-3"
        >
          Invia il commento
        </Button>
      </Form>
    </>
  );
};

export default AddComments;
