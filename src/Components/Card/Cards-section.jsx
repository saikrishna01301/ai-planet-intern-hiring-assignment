import "./Cards-section.css";
import Card from "./Card";
import { useState, useEffect, useContext } from "react";
import { TabContext } from "../../Contexts/tabContext";

const CardSection = () => {
  const [items, setItems] = useState();
  const { active } = useContext(TabContext);

  useEffect(() => {
    const retrieveHackathon = JSON.parse(localStorage.getItem("hackathons"));
    const retrieveFavoriteHackathon = JSON.parse(
      localStorage.getItem("favorite")
    );
    active === 1
      ? setItems(retrieveHackathon)
      : setItems(retrieveFavoriteHackathon);
  }, [active]);

  return (
    //used optional chaining and nullish coalescing
    <div className="card__section">
      {/*//used optional chaining and nullish coalescing*/}
      {items?.map((item) => <Card key={item.id} item={item} />) ?? <div></div>}
    </div>
  );
};

export default CardSection;
