import React from "react";
import { tipsData } from "../../../data/tipsData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
const ArticleDetails = () => {
  const { id }: any = useParams();
  const navigate = useNavigate();
  const data: any = tipsData[id - 1];

  return (
    <div>
      <Card style={{ width: "80vw", marginLeft: "10vw", marginTop: "3vh" }}>
        <Card.Img variant="top" src={data.image} />

        <Card.Title>{data.name}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {data.description}
        </Card.Text>
        <Button variant="dark" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Card>
    </div>
  );
};

export default ArticleDetails;
