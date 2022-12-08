import { Card, Button } from "react-bootstrap";
import { Article } from "../interfaces/Article";

//Defining the interface of the prop
interface ArticleProps {
  articleAsNameOfTheProp: Article;
}

//Without deconstructing it the props

// const SingleArticle = (props: ArticleProps) => {
//   return (
//     <Card key={props.articleAsNameOfTheProp.id} style={{ width: "18rem" }}>
//       <Card.Img
//         variant="top"
//         src={props.articleAsNameOfTheProp.imageUrl}
//         alt={props.articleAsNameOfTheProp.title}
//       />
//       <Card.Body>
//         <Card.Title>{props.articleAsNameOfTheProp.title}</Card.Title>
//         <Card.Text>{props.articleAsNameOfTheProp.summary}</Card.Text>
//         <Button variant="info">Continue reading...</Button>
//       </Card.Body>
//     </Card>
//   );
// };
// export default SingleArticle;

//Deconstructing it

const SingleArticle = ({ articleAsNameOfTheProp }: ArticleProps) => {
  return (
    <Card style={{ width: "18rem" }} className="my-2">
      <Card.Img
        variant="top"
        src={articleAsNameOfTheProp.imageUrl}
        alt={articleAsNameOfTheProp.title}
      />
      <Card.Body>
        <Card.Title>{articleAsNameOfTheProp.title}</Card.Title>

        {/* WIP: Ellipsis in summary? <Card.Text>{articleAsNameOfTheProp.summary}</Card.Text> */}
        <Button variant="info">Continue reading...</Button>
      </Card.Body>
    </Card>
  );
};
export default SingleArticle;
