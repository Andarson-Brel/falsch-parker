import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import { motion } from "framer-motion";
import Cta from "../components/Cta";
import PageHeading from "../components/PageHeading";
import SectionTitle from "../components/SectionTitle";
import Testimonial from "../components/Testimonial";
import BtnPrimary from "../components/button/BtnPrimary";
import DragDownBtn from "../components/button/DragDownBtn";

import RotateDownbtn from "../components/button/RotateDownbtn";
import CurvedLineCards from "../components/cards/CurvedLineCards";
import HeroCard from "../components/cards/HeroCard";
import HeroCardSmall from "../components/cards/HeroCardSmall";
import PageLargeCardWithCurve from "../components/cards/PageLargeCardWithCurve";
import ParkingFine from "../components/cards/ParkingFine";
import ProductCard from "../components/cards/ProductCard";
import SeeHowCard from "../components/cards/SeeHowCard";
import SeeHowItWorksWithToolbar from "../components/cards/SeeHowItWorksWithToolbar";
import Claim from "../components/cards/claim";
import Accordion from "../components/sections/Accordion";
import { productData, smallCardData } from "../data";
const icons = [
  "./images/eye.svg",
  "./images/camera.svg",
  "./images/check-mark-circle.svg",
  "./images/invoice.svg",
];
function HomePage() {
  AOS.init();

  return (
    <>
      <section className="hero-section-container">
        <HeroCard />
        <div className="hero-card-container">
          {smallCardData.map((data) => (
            <HeroCardSmall
              imgsrc={data.imgsrc}
              spanStyle={data.spanStyle}
              heading={data.heading}
              spanhead={data.spanHead}
            />
          ))}
          <div className="hero-section-small-card-parent with-radius">
            <div className="hero-section-small-card-cont">
              <h2 className="hero-section-small-card-head">
                <span className="spanHead">Open app </span>
                to get all features
              </h2>
            </div>

            <RotateDownbtn styles={{}} />
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="partner-section">
        <SectionTitle title={"Trusted By"} />

        <div class="container">
          <img src="./images/shell-logo.svg" alt="" />
          <img src="./images/shell-oil-logo.svg" alt="" />
          <img src="./images/mcdonald.svg" alt="" />
          <img src="./images/burgerking.svg" alt="" />
          <img src="./images/mig.svg" alt="" />
          <img src="./images/coop.svg" alt="" />
          <img src="./images/hb.svg" alt="" />
          <img src="./images/shell-logo.svg" alt="" />
          <img src="./images/shell-oil-logo.svg" alt="" />
        </div>
      </section>
      <section data-aos="fade-up">
        <SectionTitle title={"Our Product"} />
        <div className="produc-section-cont">
          {productData.map((product) => (
            <ProductCard
              imgsrc={product.imgsrc}
              productDesc={product.productDesc}
              productTitle={product.producTitle}
              linkTo={product.linkTo}
            />
          ))}
        </div>
      </section>
      <section className="cta-section" id="parking-section" data-aos="fade-up">
        <SectionTitle title={"Parking Ticket"} id="parking-section" />
        <PageHeading
          icons={icons}
          text={
            "All from your phone! Use falsch-parker for hassle-free reporting of illegal parking. "
          }
        >
          Execute parking ticket on your business parkings now.
        </PageHeading>

        <PageLargeCardWithCurve
          spanTop={true}
          heading={" fine wrong parkers?"}
          spanHeading={"Need to"}
          imgSrc={"./images/iPhone-14-Pro-05.webp"}
        />
      </section>
      <section className="see-how-it-works-section" data-aos="fade-up">
        <SeeHowItWorksWithToolbar />
      </section>
      <section className="claim-section" data-aos="fade-up">
        <Claim />
      </section>
      <section
        className="towing-section"
        id="towing-section"
        data-aos="fade-up"
      >
        <div className="tow-title">
          <SectionTitle title={"Towing"} />
          <p className="go-towing">Go to towing</p>
        </div>
        <PageHeading
          icons={icons}
          text={
            "We have 60 cars in our towing car pool and more than 12 towing companies are connected to our app."
          }
        >
          Tow from business and private parkings now.
        </PageHeading>
        <PageLargeCardWithCurve
          spanBottom={true}
          heading={" Need to tow           wrong parker?"}
          spanHeading={"We made it easy."}
          imgSrc={"./images/car-render.webp"}
        />
      </section>

      <section className="see-how-it-works-section" data-aos="fade-up">
        <SeeHowCard
          howToDesc={
            "To ensure legal certainty, take a clear photo of the illegally parked vehicle with its license plate visible. Remember, a court prohibition notice is required for compensation claims."
          }
          howToHead={"Tow away."}
        />
      </section>
      <section className="tow-gps-section" data-aos="fade-up">
        <div className="tow-gps-card with-image">
          <div className="tow-gps-card-with-image">
            <img src="./images/iphone-map.webp" alt=" Description" />
            <h1>
              Track towing truck <span> with live GPS.</span>
            </h1>
          </div>
          <RotateDownbtn />
        </div>
        <div className="tow-gps-card green">
          <h1>Are you a towing company?</h1>
          <RotateDownbtn styles={{ background: "#05D54B" }} />
        </div>
      </section>
      <section
        className="towing-section"
        id="fuelFraud-section"
        data-aos="fade-up"
      >
        <SectionTitle title={"Faul Fraud"} />

        <PageHeading
          icons={icons}
          text={
            "Wrong Parker offers an efficient solution for gas stations to manage and reduce fuel fraud."
          }
        >
          Significantly reduce fuel fraud at gas stations.
        </PageHeading>
        <PageLargeCardWithCurve
          spanTop={true}
          heading={"  without payment."}
          spanHeading={"Vehicles are refueling"}
          imgSrc={"./images/Gas-station.webp"}
        />
      </section>

      <section className="see-how-it-works-section" data-aos="fade-up">
        <SeeHowCard
          howToDesc={
            "To ensure legal certainty, take a clear photo of the illegally parked vehicle with its license plate visible. Remember, a court prohibition notice is required for compensation claims."
          }
          styles={{ background: "#000", color: "#fff" }}
          howToHead={"Reduce          fuel theft."}
        />
      </section>
      <section className="save-time-money-section" data-aos="fade-up">
        <CurvedLineCards />
      </section>
      <section className="tow-gps-section" data-aos="fade-up">
        <div className="tow-gps-card with-image">
          <div className="tow-gps-card-with-image">
            <img src="./images/iphone-map.webp" alt=" Description" />
            <h1>
              Track towing truck <span> with live GPS.</span>
            </h1>
          </div>
          <RotateDownbtn />
        </div>
        <div className="tow-gps-card green">
          <h1>Are you a towing company?</h1>
          <RotateDownbtn styles={{ background: "#05D54B" }} />
        </div>
      </section>
      <section className="towing-section" data-aos="fade-up">
        <SectionTitle title={"CCTV & AI"} />
        <SectionTitle title={"White label solution"} />
        <PageHeading
          icons={icons}
          text={
            "Learn how we use AI to help you fine wrong parkers. And discover our white label solution for companies."
          }
        >
          Other features we offer for our clients.
        </PageHeading>
        <PageLargeCardWithCurve
          spanTop={true}
          heading={"  Your CCTV &        our AI automation."}
          //   spanHeading={"Vehicles are refueling"}
          imgSrc={"./images/cctv.webp"}
        />
      </section>
      <section data-aos="fade-up">
        <div className="tow-title">
          <SectionTitle title={"Towing"} />
          <BtnPrimary
            styles={{
              border: "1px solid #0D0F11",
              color: "#0D0F11",
              margin: "0",
            }}
          >
            Ask your question
          </BtnPrimary>
        </div>
        <Accordion />
      </section>
      <section className=" w-full" data-aos="fade-up">
        <SectionTitle title={"Testimonial"} />
        <Testimonial />
      </section>
      <section className="w-full" data-aos="fade-up">
        <Cta />
        <ParkingFine />
      </section>
    </>
  );
}

export default HomePage;
