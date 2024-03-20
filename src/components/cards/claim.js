import BtnPrimary from "../button/BtnPrimary";
import AOS from "aos";
import "aos/dist/aos.css";

function Claim() {
  AOS.init();
  return (
    <div className="claim-container" data-aos="fade-up">
      <img className="" src="./images/iphone-14-pro.webp" alt="iphone 14 pro" />
      <div className="claim-content-container">
        <h1>Claim.</h1>
        <p>
          As a property owner or tenant, you have the right to claim
          compensation for illegal parking. Falsch-Parker.ch offers the
          necessary infrastructure and handles the entire processing for you.
        </p>
        <BtnPrimary>Contact Us</BtnPrimary>
      </div>
    </div>
  );
}

export default Claim;
