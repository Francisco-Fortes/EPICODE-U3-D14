import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Article } from "../interfaces/Article";
import SingleArticle from "./SingleArticle";

const FetchComponent = () => {
  // Passing our own Type in order to avoid TS to use the one that automatically detects (in that case Never)
  const [spaceArticles, setSpaceArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log(response);
      if (response.ok) {
        let articles = await response.json();
        setSpaceArticles(articles);
        console.log(articles);
      } else {
        console.log("Error while retrieving the data from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        {spaceArticles.map((article) => {
          //Passing article as a prop to SingleArticle
          return (
            //Key must be on the parent element that you are returning out of the map
            <SingleArticle articleAsNameOfTheProp={article} key={article.id} />
          );
        })}
      </Row>
    </Container>
  );
};
export default FetchComponent;
