import { motion } from "framer-motion";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function SeeHowItWorksWithToolbar() {
  AOS.init();
  const [visibleApp, setVisibleApp] = useState(true);
  const [visibleQr, setVisibleQr] = useState(false);
  function handleShowApp() {
    setVisibleApp(true);
    setVisibleQr(false);
  }
  function handleShowQr() {
    setVisibleApp(false);
    setVisibleQr(true);
  }
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { opacity: 0 } };

  return (
    <div className="parent-container" data-aos="fade-up">
      <h1 className="see-how-title">See How it Works</h1>
      <div className="tab-btn-cont">
        <div className="tab-btn">
          <div
            className={visibleApp ? "active-btn" : ""}
            onClick={handleShowApp}
          >
            Only App
          </div>
          <div className={visibleQr ? "active-btn" : ""} onClick={handleShowQr}>
            App & QR Code
          </div>
        </div>
      </div>
      <div className="see-how-container">
        <div className="see-how-img-cont">
          <img src="./images/imageScreen.webp" alt="imageScren" />
        </div>
        <div className="insructions-container">
          <motion.div
            variants={list}
            animate={!visibleApp ? "hidden" : ""}
            transition={{ duration: 2 }}
            // animate={{ opacity: visibleApp ? 1 : 0 }}
            className={`app-instruction-container ${
              visibleApp ? "active-tab" : "inactive-tab"
            }`}
          >
            <motion.div className="list" variants={item}>
              <p className="list-desc">Take a picture of wrong parker. </p>
              <p className="sn">01</p>
            </motion.div>
            <motion.div className="list" variants={item}>
              <p className="list-desc">
                Check that illegal parking situation is well documented.{" "}
              </p>
              <p className="sn">02</p>
            </motion.div>

            <motion.div className="list" variants={item}>
              <p className="list-desc">Confirm the location. </p>
              <p className="sn">03</p>
            </motion.div>
          </motion.div>

          {visibleQr && (
            <div
              className={`qr-instruction-container ${
                visibleQr ? "active-tab" : "inactive-tab"
              }`}
            >
              {" "}
              <div className="list">
                <p className="list-desc">Take a picture of wrong parker. </p>
                <p className="sn">01</p>
              </div>
              <div className="list">
                <p className="list-desc">Scan The QR code</p>
                <p className="sn">02</p>
              </div>
              <div className="list">
                <p className="list-desc">Confirm the location. </p>
                <p className="sn">03</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="down-btn-cont">
        <button className="down-btn">+</button>
      </div>
    </div>
  );
}

export default SeeHowItWorksWithToolbar;
