import DragDownBtn from "../button/DragDownBtn";
import AOS from "aos";
import "aos/dist/aos.css";
function HeroCard() {
  AOS.init();
  return (
    <div className="card" data-aos="fade-up">
      <div className="imgbx"></div>
      <div className="content">
        <h2 className="hero-card-title">
          One app for park management & illegal parking reports
        </h2>
        <DragDownBtn
          styles={{
            background: "none",
            border: "1px solid #0D0F11",
            borderRadius: "50px",
            right: "0",
            left: "0",
          }}
          imgsrc={"./images/arrow-drag-black.svg"}
        />
      </div>
    </div>
  );
}

export default HeroCard;
