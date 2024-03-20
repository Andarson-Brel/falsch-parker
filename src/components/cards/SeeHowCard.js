// import DragDownBtn from "../button/DragDownBtn";
import RotateDownbtn from "../button/RotateDownbtn";
import AOS from "aos";
import "aos/dist/aos.css";
function SeeHowCard({ howToHead, howToDesc, styles }) {
  AOS.init();
  return (
    <div className="parent-container" data-aos="fade-up">
      <h1 className="see-how-title">See How it Works</h1>
      <div className="how-to-card" style={styles}>
        <div className="img-cont">
          <img
            src="./images/ImageScreen.webp"
            alt="iphone"
            className="image-screen"
          />
        </div>
        <div className="description-cont">
          <h1>{howToHead}</h1>
          <p>{howToDesc}</p>
        </div>
      </div>
      <RotateDownbtn imgsrc={"./images/arrow-rotate.svg"} />
    </div>
  );
}

export default SeeHowCard;
