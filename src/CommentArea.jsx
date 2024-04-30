import { useState, useEffect } from "react";
import AddComments from "./AddComments";
import CommentList from "./CommentList";
import Error from "./Error";
import Loading from "./Loading";
const CommentArea = (props) => {
  const [commenti, setCommenti] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        props.elementId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjYwYTdmMzA0NjAwMWFlNTlmYTEiLCJpYXQiOjE3MTQ0MDAxMTIsImV4cCI6MTcxNTYwOTcxMn0.R1bNr5Db_DgmIlOFTMUMkxtY2H6Nt-0wEcEDw9S58-8",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Richiesta errata o incompleta");
        }
      })
      .then((commenti) => {
        setCommenti(commenti);
        setIsLoading(false);
        setIsError(false);

        console.log(commenti);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  };
  useEffect(() => {
    fetchComment();
  }, [props.elementId]);
  return (
    <>
      {isError && <Error />}
      {isLoading && <Loading />}

      <>
        <AddComments elementId={props.elementId} />
        <CommentList commenti={commenti} />
      </>
    </>
  );
};

export default CommentArea;
