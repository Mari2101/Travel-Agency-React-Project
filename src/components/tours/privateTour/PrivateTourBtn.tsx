import React from "react";
import { ToursData } from "../../../data/toursData";
import PrivateTourModal from "./PrivateTourModal";
interface PrivateTourBtnProps {
  addTours: (newTourCard: ToursData) => void;
}
const PrivateTourBtn: React.FC<PrivateTourBtnProps> = ({ addTours }) => {
  return (
    <>
      <p>Or create your own tour</p>
      <PrivateTourModal addTours={addTours} />
    </>
  );
};

export default PrivateTourBtn;
