import PageHeading from "../components/PageHeading";
import SectionTitle from "../components/SectionTitle";
import BtnPrimary from "../components/button/BtnPrimary";
import PageLargeCardWithCurve from "../components/cards/PageLargeCardWithCurve";
import ParkingFine from "../components/cards/ParkingFine";
import SeeHowItWorksWithToolbar from "../components/cards/SeeHowItWorksWithToolbar";
import Claim from "../components/cards/claim";
import Accordion from "../components/sections/Accordion";

function ParkingTicketPage() {
  const icons = ["./images/invoice.svg", "./images/briefcase.svg"];
  return (
    <div>
      <section className="cta-section mt-20">
        <SectionTitle title={"Parking Ticket"} />
        <PageHeading
          icons={icons}
          text={
            "On your business and private parkings you’re allowed to fine wrong parkers. Our app provides you with the infrastructure to execute parking fines with few clicks. Our app is fully automized and we take care of everything what happens after you create the fine "
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
      <section className="see-how-it-works-section">
        <SeeHowItWorksWithToolbar />
      </section>
      <section className="claim-section">
        <Claim />
      </section>
      <section className="towing-section">
        <PageLargeCardWithCurve
          spanTop={true}
          heading={"  Your CCTV &        our AI automation."}
          //   spanHeading={"Vehicles are refueling"}
          imgSrc={"./images/cctv.webp"}
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
      <ParkingFine />
    </div>
  );
}

export default ParkingTicketPage;
