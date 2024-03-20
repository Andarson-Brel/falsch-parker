import RotateDownbtn from "../button/RotateDownbtn";
import AOS from "aos";
import "aos/dist/aos.css";
function HeroCardSmall({ imgsrc, heading, spanhead, spanStyle }) {
  AOS.init();
  return (
    <div className="hero-section-small-card-parent" data-aos="fade-up">
      <img src={imgsrc} alt="" className="hero-section-small-card-img" />
      <div className="hero-section-small-card-cont">
        <h2 className="hero-section-small-card-head">
          {heading} <span style={spanStyle}>{spanhead}</span>
        </h2>
      </div>
      <RotateDownbtn styles={{}} />
    </div>
  );
}

export default HeroCardSmall;
