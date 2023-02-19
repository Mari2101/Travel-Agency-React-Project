import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
interface ArticleProps {
  title: string;
  id: number;
  description: string;
  image: string;
}
const defaultImage =
  "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg";
const ArticleItem = ({ title, id, image }: ArticleProps) => {
  return (
    <div>
      <Card
        style={{
          minWidth: "350px",

          width: "30vw",
          margin: "3vw",
        }}
      >
        <Card.Img
          variant="top"
          onError={({ currentTarget }) => {
            currentTarget.src = defaultImage;
            currentTarget.onerror = null;
          }}
          src={image}
          alt={title}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Button className="btn-dark">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/travel-tips/${id}`}
            >
              Read More
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleItem;
