import HeroBackground from "../Hero-Background/Hero-Background";
import "./Hero-Home.css";

const HeroHome = () => {
  return (
    <HeroBackground>
      <div className="hero-home__container">
        <h1 className="hero-home__title">Hackathon Submissions</h1>
        <p className="hero-home__text">
          Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque
          in parturient purus feugiat faucibus. Congue laoreet duis porta turpis
          eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae
        </p>
        <button className="hero-home__button">Upload Submission</button>
        <div className="hero-home__img" />
      </div>
    </HeroBackground>
  );
};
export default HeroHome;
