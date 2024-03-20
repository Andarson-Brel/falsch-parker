import BtnPrimary from "../button/BtnPrimary";
import AOS from "aos";
import "aos/dist/aos.css";
function FullControlCard({ desc }) {
  AOS.init();
  return (
    <div className="full-control-container" data-aos="fade-up">
      <img src="./images/phones.svg" alt="phones" />
      <div className="description-cont">
        <h1 className="descritpion-head">Full control.</h1>
        <p className="desription-p">{desc}</p>
        <BtnPrimary>Contact Us</BtnPrimary>
      </div>
    </div>
  );
}

export default FullControlCard;
