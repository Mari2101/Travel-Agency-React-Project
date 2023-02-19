import { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiTwotoneEdit } from "react-icons/ai";
import { ToursData } from "../../../data/toursData";

interface EditTourProps {
  editTour: (id: number, updatedObject: ToursData) => void;
  id: number;
}
const EditTour: React.FC<EditTourProps> = ({ editTour, id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [duration, setDuration] = useState("");
  const [name, setName] = useState("");
  const [srcOne, setSrcOne] = useState("");
  const [srcTwo, setSrcTwo] = useState("");
  const [srcThree, setSrcThree] = useState("");
  const [season, setSeason] = useState("");
  const [region, setRegion] = useState("");
  const [overview, setOverview] = useState("");
  const [descOne, setDescOne] = useState("");

  const uniqueId = () => {
    return Math.random() * Math.random() * Math.random();
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const updatedObject = {
      caroussel: {
        srcOne:
          srcOne ||
          "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
        srcTwo:
          srcTwo ||
          "https://previews.123rf.com/images/carmendorin/carmendorin1403/carmendorin140300080/26502170-grunge-rubber-stamp-with-text-private-tour-vector-illustration.jpg",
        srcThree:
          srcThree ||
          "https://images.unsplash.com/photo-1569498283068-140e58143192?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      name: name,
      price: "Upon Request",
      overview: overview,
      duration: duration,
      season: [season],
      id: Number(uniqueId),
      itinerary: {
        descOne: descOne,
      },
      region: region,
    };
    editTour(id, updatedObject);
  };
  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <AiTwotoneEdit
          style={{ margin: "5px", width: "25px", height: "25px" }}
        />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your desired tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitForm}>
            <select
              onChange={(e) => setSeason(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Edit your Season</option>
              <option value="winter">winter</option>
              <option value="spring">spring</option>
              <option value="summer">summer</option>
              <option value="autumn">autumn</option>
            </select>
            <br />
            <select
              onChange={(e) => setRegion(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="">Please choose Region</option>
              <option value="Batumi">Batumi</option>
              <option value="Tbilisi">Tbilisi</option>
              <option value="Kakheti">Kakheti</option>
              <option value="Kazbegi">Kazbegi</option>
              <option value="Borjomi">Borjomi</option>
              <option value="Kutaisi">Kutaisi</option>
            </select>
            <br />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Edit tour name"
            />
            <br />
            <input
              onChange={(e) => setSrcOne(e.target.value)}
              type="text"
              className="form-control"
              placeholder="First image url"
            />

            <br />
            <input
              onChange={(e) => setSrcTwo(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Second image url"
            />
            <br />
            <input
              onChange={(e) => setSrcThree(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Third image url"
            />
            <br />
            <input
              onChange={(e) => setDuration(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Duration"
            />
            <br />
            <textarea
              onChange={(e) => setOverview(e.target.value)}
              placeholder="Describe your tour"
              className="form-control"
              rows={3}
            />
            <br />
            <textarea
              onChange={(e) => setDescOne(e.target.value)}
              placeholder=" Describe your Itinerary"
              className="form-control"
              rows={3}
            />
            <Button type="submit" variant="success" onClick={handleClose}>
              Add
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTour;
