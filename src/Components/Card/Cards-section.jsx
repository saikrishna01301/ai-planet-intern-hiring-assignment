import "./Cards-section.css";
import Card from "./Card";
import { useState, useEffect } from "react";

const CardSection = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const retrieveHackathon = JSON.parse(localStorage.getItem("hackathons"));
    setItems(retrieveHackathon);
  }, []);

  return (
    //used optional chaining and nullish coalescing
    <div className="card__section">
      {/*//used optional chaining and nullish coalescing*/}
      {items?.map((item) => <Card key={item.id} item={item} />) ?? <div></div>}
    </div>
  );
};

export default CardSection;
