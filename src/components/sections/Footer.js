import BtnPrimary from "../button/BtnPrimary";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="title-socials">
          <div className="footer-cta">
            <h1 className="footer-title">Increased illegal parking?</h1>
            <p className="footer-desc">
              We’re here to help you to solve the problem
            </p>
            <BtnPrimary>Contact Us</BtnPrimary>
          </div>
          <div className="footer-phone">
            <p>Or just give us a call.</p>
            <p className="phone-number">
              <a href="tel:+4733378901">+41 44 123 45 67</a>
            </p>
          </div>
          <div className="footer-socials">
            <img src="./images/facebook.svg" alt="" />

            <img src="./images/youtube.svg" alt="" />
            <img src="./images/twitter.svg" alt="" />
            <img src="./images/instagram.svg" alt="" />
          </div>
          <p className="copyright">Copyright © 2024 | All rights reserved</p>
        </div>
        <div className="footer-links">
          <ul className="footer-link-container">
            <h2 className="link-title">Navigation</h2>
            <li className="footer-link">Home</li>
            <li className="footer-link">App</li>
            <li className="footer-link">Blog</li>
            <li className="footer-link">Contact</li>
          </ul>
          <ul className="footer-link-container">
            <h2 className="link-title">About Us</h2>
            <li className="footer-link">FAQ</li>
            <li className="footer-link">Terms & Conditions</li>
            <li className="footer-link">Imprint</li>
            <li className="footer-link">Data Protection</li>
          </ul>
          <ul className="footer-link-container">
            <h2 className="link-title">Offices</h2>
            <li className="footer-link">
              Schützengasse 4 8001 Zurich Switzerland
            </li>
            <li className="footer-link">
              Schützengasse 4 8001 Zurich Switzerland
            </li>
          </ul>
          <ul className="footer-link-container">
            <h2 className="link-title">Our services</h2>
            <li className="footer-link">Parking ticket</li>
            <li className="footer-link">Towing</li>
            <li className="footer-link">Fuel Fraud</li>
          </ul>
          <ul className="footer-link-container">
            <h2 className="link-title">Locations</h2>
            <li className="footer-link">Towing service Zurich</li>
            <li className="footer-link">Towing service Zurich</li>
            <li className="footer-link">Towing service Zurich</li>
            <li className="footer-link">Towing service Zurich</li>
            <li className="footer-link">Towing service Zurich</li>
          </ul>
          <ul className="footer-link-container">
            <h2 className="link-title">Our App</h2>
            <li className="footer-link">
              <BtnPrimary
                styles={{
                  display: "flex",
                  fontSize: "16px",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img src="./images/Apple.svg" alt="" />
                App Store
              </BtnPrimary>
            </li>
            <li className="footer-link">
              <BtnPrimary
                styles={{
                  display: "flex",
                  fontSize: "16px",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img src="./images/Android.svg" alt="" />
                Google Play
              </BtnPrimary>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
