import { useState, useEffect } from "react";
import TourCard from "./TourCard";
import PrivateTourBtn from "./privateTour/PrivateTourBtn";
import SearchTours from "./searchTour/SearchTours";
import toursData, { ToursData } from "../../data/toursData";

const Tours = ({ setToursArray }: any) => {
  const [filtered, setFiltered] = useState(toursData);
  const [value, setValue] = useState("");

  useEffect(() => {
    setToursArray(filtered);
  }, [filtered, setToursArray]);
  const editTour = (id: number, updatedObject: ToursData) => {
    setFiltered(
      filtered.map((tourCard) =>
        tourCard.id === id
          ? {
              ...tourCard,
              season: updatedObject.season,
              overview: updatedObject.overview,
              duration: updatedObject.duration,
              caroussel: updatedObject.caroussel,
              itinerary: updatedObject.itinerary,
              region: updatedObject.region,
              name: updatedObject.name,
              price: updatedObject.price,
            }
          : tourCard
      )
    );
  };

  const deleteTours = (id: number) => {
    setFiltered([...filtered.filter((user) => user.id !== id)]);
  };

  const addTours = (newTourCard: ToursData) => {
    setFiltered([...filtered, newTourCard]);
  };
  const filterArrayOfObjectsByTerm = () => {
    const searchTerm = value.trim();
    const arrayFiltered = toursData.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFiltered(arrayFiltered);
  };
  const filterByPrice = (num: number) => {
    const priceArray = filtered.filter((price) => {
      return price.price >= num;
    });
    setFiltered(priceArray);
  };

  const mapToursData = () => {
    const filteredMap = filtered
      .map((a) => {
        return (
          <TourCard
            editTour={editTour}
            deleteTours={deleteTours}
            tours={{ ...a }}
            key={a.id}
          />
        );
      })
      .reverse();
    return filteredMap;
  };
  return (
    <div style={{ backgroundColor: "#E8D0B9", minHeight: "100vh" }}>
      <SearchTours
        handleSearch={filterArrayOfObjectsByTerm}
        setValue={setValue}
        handlePrice={filterByPrice}
      />
      <PrivateTourBtn addTours={addTours} />
      <div className="d-flex justify-content-around flex-wrap">
        {mapToursData()}
      </div>
    </div>
  );
};

export default Tours;
