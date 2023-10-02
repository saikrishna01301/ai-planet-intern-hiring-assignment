import "./DataRelated.css";
import { useLocation, useNavigate } from "react-router-dom";

import HeroBackground from "../Hero-Background/Hero-Background";

const DataRelated = () => {
  const location = useLocation();
  const { item } = location.state;
  const navigate = useNavigate();
  const dateObject = new Date(item.id);
  const uploadedDate = dateObject.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const uploadedMonth = monthNames[dateObject.getMonth()];

  const editHackathon = () => {
    navigate("/form", { state: { EditItem: item } });
  };

  return (
    <HeroBackground>
      <div className="data-related__hero--container">
        <div className="data-related__heading">
          <img
            src={item.image}
            alt="lorem ipsum"
            className="data-related__heading--img"
          />
          <h1 className="data-related__heading--title">{item.title}</h1>
          <div className="data-related__heading--btns">
            <button className="btn" onClick={editHackathon}>
              Edit
            </button>
            <button className="btn">Delete</button>
          </div>
        </div>
        <p className="data-related__content">{item.summary}</p>
        <div className="data-related__properties">
          <p className="fav__icon--container">S</p>
          <p className="date-of__upload">
            {`${uploadedDate} ${uploadedMonth}`}
          </p>
        </div>
      </div>
    </HeroBackground>
  );
};

export default DataRelated;
