import "./DataRelated.css";
import { useLocation } from "react-router-dom";

import HeroBackground from "../Hero-Background/Hero-Background";

const DataRelated = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <HeroBackground>
      <div className="data-related__hero--container">
        <div className="data-related__heading">
          <img src={item.image} alt="lorem ipsum" className="data-related__heading--img"/>
          <h1 className="data-related__heading--title">{item.title}</h1>
          <div className="data-related__heading--btns">
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
          </div>
        </div>
        <p className="data-related__content">{item.summary}</p>
        <div className="data-related__properties"></div>
      </div>
    </HeroBackground>
  );
};

export default DataRelated;
