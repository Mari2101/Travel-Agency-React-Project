import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiFillDelete } from "react-icons/ai";
import { ToursData } from "../../data/toursData";
import EditTour from "./editTour/EditTour";

interface TourProps {
  tours: ToursData;
  deleteTours: (id: number) => void;
  editTour: (id: number, updatedObject: ToursData) => void;
}

const TourCard = ({ editTour, tours, deleteTours }: TourProps) => {
  return (
    <Card style={{ width: "25rem", margin: "20px" }}>
      <div className="d-flex justify-content-end">
        <EditTour editTour={editTour} id={tours.id} />
        <Button variant="light" onClick={() => deleteTours(tours.id)}>
          <AiFillDelete
            style={{ margin: "5px", width: "25px", height: "25px" }}
          />{" "}
        </Button>
      </div>
      <Card.Img variant="top" src={tours.caroussel.srcOne} />
      <Card.Body>
        <Card.Title>{tours.name}</Card.Title>
        <Card.Text></Card.Text>
        <Button className="btn-dark">
          <a
            style={{ color: "white", textDecoration: "none" }}
            href={`/tours/${tours.id}`}
          >
            Read More
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TourCard;
