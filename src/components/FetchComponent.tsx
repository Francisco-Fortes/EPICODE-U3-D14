import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const FetchComponent = () => {
  // Passing our own Type in order to avoid TS to use the one that automatically detects (in that case Never)
  const [spaceArticles, setSpaceArticles] = useState<Article[]>([]);

  //Defining the interface of spaceArticle because if it not article would be of the type Never
  interface Article {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: Date;
    updatedAt: Date;
    featured: boolean;
    launches: any[];
    events: any[];
  }

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
      <Row>
        <Col>
          {spaceArticles.map((article) => {
            return (
              <Card key={article.id} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={article.imageUrl}
                  alt={article.title}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.summary}</Card.Text>
                  <Button variant="info">Continue reading...</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
export default FetchComponent;
