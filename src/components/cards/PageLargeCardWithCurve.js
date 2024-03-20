import BtnPrimary from "../button/BtnPrimary";
import RotateCross from "../button/RotateCross";
import AOS from "aos";
import "aos/dist/aos.css";

function PageLargeCardWithCurve({
  spanTop,
  spanBottom,
  heading,
  spanHeading,
  imgSrc,
}) {
  AOS.init();
  return (
    <div className="parent-container" data-aos="fade-up">
      <div className="curved-large-container">
        <img src={imgSrc} alt="large-container" />
        <div className="curved-large-content-container">
          <h1>
            {spanTop && <span>{spanHeading}</span>}
            {heading}
            {spanBottom && <span>{spanHeading}</span>}
          </h1>
          <BtnPrimary>Open App</BtnPrimary>
        </div>
      </div>
      <div className="card-radius-left"></div>
      <RotateCross />
    </div>
  );
}

export default PageLargeCardWithCurve;
