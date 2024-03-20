import PageHeading from "../components/PageHeading";
import SectionTitle from "../components/SectionTitle";
import BtnPrimary from "../components/button/BtnPrimary";
import FullControlCard from "../components/cards/FullControlCard";
import PageLargeCardWithCurve from "../components/cards/PageLargeCardWithCurve";
import SeeHowCard from "../components/cards/SeeHowCard";
import Accordion from "../components/sections/Accordion";

function TowingPage() {
  const icons = [
    "./images/eye.svg",
    "./images/camera.svg",
    "./images/check-mark-circle.svg",
    "./images/invoice.svg",
  ];
  return (
    <div className="mt-20">
      <section className="towing-section">
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
      <section className="see-how-it-works-section">
        <SeeHowCard
          howToDesc={
            "To ensure legal certainty, take a clear photo of the illegally parked vehicle with its license plate visible. Remember, a court prohibition notice is required for compensation claims."
          }
          howToHead={"Tow away."}
        />
      </section>
      <section>
        <FullControlCard
          desc={
            " Over the app and dashboard you can order nearest Towing car free of          charge. And you can see all details in real time."
          }
        />
      </section>
      <section>
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
    </div>
  );
}

export default TowingPage;
