import "./DataRelated.css";
import "./DeleteDialog.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { TabContext } from "../../Contexts/tabContext";
import { ReactComponent as FavoriteIco } from "../../Assets/icons/star.svg";
import { ReactComponent as Edit } from "../../Assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../Assets/icons/delete.svg";
import { ReactComponent as Github } from "../../Assets/icons/github.svg";
import { ReactComponent as OpenNew } from "../../Assets/icons/open-in-new.svg";

import HeroBackground from "../Hero-Background/Hero-Background";

const DataRelated = () => {
  const location = useLocation();
  const { item } = location.state;
  const navigate = useNavigate();
  const dateObject = new Date(item.id);
  const uploadedDate = dateObject.getDate();

  const { active, setActive } = useContext(TabContext);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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

  //edit hackathon which navigate to form page-------------------
  const editHackathon = () => {
    navigate("/form", { state: { editItem: item } });
  };

  //hackathon start date and end date logic----------------------
  const getDateInfo = (d) => {
    const date = new Date(d);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  //onDialogToggleHandler event-------------------------------------
  const onDialogToggleHandler = () => {
    // deleteDialog ? setDeleteDialog(false) : setDeleteDialog(true);
    setDeleteDialog(!deleteDialog);
  };

  const onDeleteHandler = () => {
    const key = active === 1 ? "hackathons" : "favorite";
    const retrieveHackathon = JSON.parse(localStorage.getItem(key));
    const updatedArray = retrieveHackathon.filter(
      (items) => items.id !== item.id
    );
    localStorage.setItem(key, JSON.stringify(updatedArray));
    navigate("/");
  };

  // onAddFavoriteHandler-------------------------------------------
  const onAddFavoriteHandler = () => {
    // setFavoriteHackathon(item);
    const existingFavoriteHackathon =
      JSON.parse(localStorage.getItem("favorite")) || [];

    // const existingFavoriteHackathonArray = Array.isArray(favoriteHackathon)
    //   ? favoriteHackathon
    //   : [];
    const updatedFavoriteArray = [...existingFavoriteHackathon, item];

    localStorage.setItem("favorite", JSON.stringify(updatedFavoriteArray));
    onDeleteHandler();
    setActive(2);
  };

  ////////////////////////////////////////////////////////////////
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
                <Edit className="edit" />
                Edit
              </button>
              <button className="btn-modify" onClick={onDialogToggleHandler}>
                <Delete className="delete" />
                Delete
              </button>
            </div>
          </div>
          <p className="data-related__content">{item.summary}</p>
          <div className="data-related__properties">
            <FavoriteIco
              className="fav__icon--container"
              onClick={onAddFavoriteHandler}
            ></FavoriteIco>
            <span className="line"></span>
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
            <a className="External__link" href={item.githubLink}>
              <button className="btn-link">
                <Github className="git-logo" />
                GitHub Repository
              </button>
            </a>
            <a className="External__link" href={item.otherLinks}>
              <button className="btn-link">
                <OpenNew className="open-new" />
                Other Links
              </button>
            </a>
          </div>
        </div>
      </div>
      {deleteDialog ? (
        <div>
          <div className="dialog__container">
            <h2 className="dialog__head">Delete model</h2>
            <p className="dialog__content">
              This action is irreversible. Are you sure you want to delete this
              model?
            </p>
            <div className="dialog__buttons">
              <button
                className="dialog__btn cancel__btn"
                onClick={onDialogToggleHandler}
              >
                Cancel
              </button>
              <button
                className="dialog__btn delete__btn"
                onClick={onDeleteHandler}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="overlay" onClick={onDialogToggleHandler}></div>
        </div>
      ) : null}
    </>
  );
};

export default DataRelated;
