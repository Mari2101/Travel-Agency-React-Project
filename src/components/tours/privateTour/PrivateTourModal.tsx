import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toursData from "../../../data/toursData";

function PrivateTourModal({ addTours }: any) {
  const [show, setShow] = useState(false);
  const [duration, setDuration] = useState("");
  const [srcOne, setSrcOne] = useState("");
  const [srcTwo, setSrcTwo] = useState("");
  const [srcThree, setSrcThree] = useState("");
  const [season, setSeason] = useState("");
  const [region, setRegion] = useState("");
  const [overview, setOverview] = useState("");
  const [descOne, setDescOne] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newCard = {
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
      id: toursData.length + 1,
      region: region,
      duration: duration,
      price: "Upon Request",
      season: [season],
      name: "Private Tour",
      overview: overview,
      itinerary: {
        descOne: descOne,
        descTwo: "",
        descThree: "",
        descFour: "",
      },
    };
    addTours(newCard);
  };

  return (
    <>
      <Button className="btn-success" onClick={handleShow}>
        Custom Tour
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Custom your desired tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <select
              onChange={(e) => setSeason(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Choose your Season</option>
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
              placeholder="Describe your tour"
              className="form-control"
              onChange={(e) => setOverview(e.target.value)}
              rows={3}
            />
            <br />
            <textarea
              placeholder=" Describe your Itinerary"
              className="form-control"
              onChange={(e) => setDescOne(e.target.value)}
              rows={3}
            />
            <br />
            <Button
              className="text-center"
              type="submit"
              variant="success"
              onClick={handleClose}
            >
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
}

export default PrivateTourModal;
