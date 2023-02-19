import { MagnifyingGlass } from "react-loader-spinner";

const LoaderSpinners = ({ width = "200", height = "200" }) => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <MagnifyingGlass
        visible={true}
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="transparent"
        color="green"
        width={width}
        height={height}
      />
    </div>
  );
};

export default LoaderSpinners;
