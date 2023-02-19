import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ToursData } from "../../data/toursData";
import MDBGallery from "./MDBGallery";
const TourDetails = ({ toursArray }: any) => {
  const { id }: any = useParams();
  const navigate = useNavigate();
  const tour: ToursData = toursArray[id - 1];

  return (
    <div
      style={{
        backgroundColor: "#E8D0B9",
      }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Card
          style={{
            border: "2px solid black",

            width: "80vw",
            marginTop: "3vh",
            padding: "2vw",
          }}
        >
          <MDBGallery tours={{ ...tour }} key={tour.id} />

          <Card.Title>{tour.name}</Card.Title>

          <Card.Text style={{ textAlign: "justify" }}>
            <b>Duration: {tour.duration}</b>
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            <b>Price: {tour.price} </b>
          </Card.Text>

          <Card.Text style={{ textAlign: "justify" }}>
            <b>Description:</b>
            <br />
            {tour.overview}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            {tour.itinerary.descOne}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            {tour.itinerary.descTwo}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            {tour.itinerary.descThree}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            {tour.itinerary.descFour}
          </Card.Text>
        </Card>
        <div className="d-flex flex-row justify-content-between align-items-center m-2">
          <Button
            style={{ width: "200px", margin: "5px" }}
            variant="secondary"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
