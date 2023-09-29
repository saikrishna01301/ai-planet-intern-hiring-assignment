import "./Utilities.css";

const Utilities = () => {
  return (
    <div className="util__container">
      <input type="text" className="input__search" placeholder="Search" />
      <div className="filter">
        <h6 className="filter__text">Newest</h6>
      </div>
    </div>
  );
};

export default Utilities;
