import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { id, title, summary, image } = props.item;
  const navigate = useNavigate();

  //--------data related onClick handler-------------------
  const dataRelatedToSubmission = () => {
    navigate("/data-related-to-submission", { state: { item: props.item } });
  };

  //--------calculating when the hackathon uploaded-----------
  const daysAgo = () => {
    const uploadedTimestamp = id;
    const currentTimestamp = Date.now();

    const timeDifferenceInMilliseconds = currentTimestamp - uploadedTimestamp;
    const daysAgo = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    const hoursAgo = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60 * 60)
    );
    const minutesAgo = Math.floor(timeDifferenceInMilliseconds / (1000 * 60));
    const secondsAgo = Math.floor(timeDifferenceInMilliseconds / 1000);

    return daysAgo === 0
      ? hoursAgo === 0
        ? minutesAgo === 0
          ? `uploaded ${secondsAgo} sec ago`
          : `uploaded ${minutesAgo} minutes ago`
        : `uploaded ${hoursAgo} hours ago`
      : `uploaded ${daysAgo} days ago`;
  };
  return (
    <div className="card__container" key={id} onClick={dataRelatedToSubmission}>
      <div className="card__top">
        <img src={image} alt="lorem ipsum" className="card__img" />
        <h5 className="card__heading">{title}</h5>
      </div>
      <p className="card__middle">{summary}</p>
      <p className="card__bottom">{daysAgo()}</p>
    </div>
  );
};

export default Card;
