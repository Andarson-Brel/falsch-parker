import DragDownBtn from "../button/DragDownBtn";
import AOS from "aos";
import "aos/dist/aos.css";
function CurvedLineCards() {
  AOS.init();
  return (
    <div className="curved-line-card-cont" data-aos="fade-up">
      <div className="curved-line-card first-frame ">
        <img src="./images/vector.svg" alt="" />
        <div className="curved-card-content">
          <h1>
            Save time <span>by avoiding gas station hassles.</span>
          </h1>
        </div>
      </div>
      <div className="parent-cont">
        <div className="curved-line-card second-frame">
          <img src="./images/vector.svg" alt="" />
          <div className="curved-card-content">
            <h1>
              Save money <span>by minimizing losses from fuel fraud.</span>
            </h1>
          </div>
        </div>
        <DragDownBtn />
      </div>
    </div>
  );
}

export default CurvedLineCards;
