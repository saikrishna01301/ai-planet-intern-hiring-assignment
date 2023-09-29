import DataCatalog from "../Data-Catalog/Data-Catalog";
import Utilities from "../utilities/Utilities";
import CardSection from "../Card/Cards-section";
import "./Body.css";

const Body = () => {
  return (
    <div className="body__container">
      <div className="utilities__container">
        <DataCatalog />
        <Utilities />
      </div>
      <CardSection />
    </div>
  );
};
export default Body;
