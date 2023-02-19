import c from "./SearchTours.module.scss";

const SearchTours = ({ setValue, handleSearch, handlePrice }: any) => {
  return (
    <>
      <h2 style={{ padding: "5vh" }}>Search Tour</h2>
      <form style={{ marginBottom: "5vh" }} className={c.form}>
        <div>
          <label htmlFor="name">Search By Tour Name </label>

          <input
            className="rounded-3 p-1"
            id={c.searchByName}
            name="name"
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
              handleSearch();
            }}
          />
        </div>
        <div>
          <label htmlFor="price">Search By Tour Price </label>
          <input
            className="rounded-3 p-1"
            onChange={(e) => {
              handlePrice(e.target.value);
            }}
            type="number"
            name="price"
            id={c.searchByPrice}
          />
        </div>
      </form>
    </>
  );
};

export default SearchTours;
