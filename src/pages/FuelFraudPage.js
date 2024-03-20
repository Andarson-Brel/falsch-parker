import PageHeading from "../components/PageHeading";
import SectionTitle from "../components/SectionTitle";
import BtnPrimary from "../components/button/BtnPrimary";
import CurvedLineCards from "../components/cards/CurvedLineCards";
import FullControlCard from "../components/cards/FullControlCard";
import PageLargeCardWithCurve from "../components/cards/PageLargeCardWithCurve";
import SeeHowCard from "../components/cards/SeeHowCard";
import Accordion from "../components/sections/Accordion";

function FuelFraudPage() {
  const icons = [
    "./images/Fuel-station.webp",

    "./images/invoice.svg",
    "./images/dollar.webp",
  ];
  return (
    <div className="mt-20">
      <section className="towing-section">
        <PageHeading
          icons={icons}
          text={
            "Submit fuel fraud reports for your gas station and secure refunds effortlessly with our automated processing system."
          }
        >
          Report fuel fraud on your gas station.
        </PageHeading>
        <PageLargeCardWithCurve
          spanTop={true}
          heading={"      report a           fuel fraud?"}
          spanHeading={"Have to"}
          imgSrc={"./images/Gas-station.webp"}
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
            "In the dashboard, you can view payment statuses and have the option to delete any report if a previously unpaid customer returns and pays on the spot. Additionally, you can print out any report as needed."
          }
        />
      </section>
      <section className="save-time-money-section">
        <CurvedLineCards />
      </section>
      <section>
        <div className="tow-title">
          <SectionTitle title={"Faq"} />

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

export default FuelFraudPage;
