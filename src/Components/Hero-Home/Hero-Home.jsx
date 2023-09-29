import HeroBackground from "../Hero-Background/Hero-Background";
import "./Hero-Home.css";
import { useNavigate } from "react-router-dom";

const HeroHome = () => {
  const navigate = useNavigate();

  const onSubmissionClick = () => {
    navigate("/form");
  };
  return (
    <HeroBackground>
      <div className="hero-home__container" >
        <h1 className="hero-home__title">Hackathon Submissions</h1>
        <p className="hero-home__text">
          Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque
          in parturient purus feugiat faucibus. Congue laoreet duis porta turpis
          eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae
        </p>
        <button className="hero-home__button" onClick={onSubmissionClick}>
          Upload Submission
        </button>
        <div className="hero-home__img" />
        <div className="hero-home__waves" />
      </div>
    </HeroBackground>
  );
};
export default HeroHome;
