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
  //hackathon start date and end date logic
  const getDateInfo = (d) => {
    const date = new Date(d);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <>
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
              <button className="btn-modify" onClick={editHackathon}>
                Edit
              </button>
              <button className="btn-modify">Delete</button>
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
      <div className="data-related__details">
        <div className="data-related__description">
          <h3 className="description--heading">Description</h3>
          <p className="description--details">{item.description}</p>
        </div>
        <div className="data-related__col-right">
          <div className="hackathon__info">
            <h4 className="hackathon__heading">Hackathon</h4>
            <h1 className="hackathon__name">{item.hackathonName}</h1>
            <div className="hackathon__dates">
              {/* <p className="icon-dates">M</p> */}
              <p className="hackathon__start-and-end--date">{`${getDateInfo(
                item.startDate
              )} - ${getDateInfo(item.endDate)}`}</p>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-link">
              <a href={item.githubLink}>GitHub Repository</a>
            </button>
            <button className="btn-link">
              <a href={item.otherLinks}>Other Link</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataRelated;
