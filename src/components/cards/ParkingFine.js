import BtnPrimary from "../button/BtnPrimary";
import AOS from "aos";
import "aos/dist/aos.css";
function ParkingFine() {
  AOS.init();
  return (
    <div
      className=" cta-card  w-96 m-auto mt-10 rounded-2xl bg-white p-8 flex flex-col justify-center items-center gap-4"
      data-aos="fade-up"
    >
      <h3 className="  text-3xl">I got a parking fine</h3>

      <BtnPrimary
        styles={{
          border: "none",
          color: "#fff",
          background: "#05D54B",
          margin: "0",
        }}
      >
        Pay Fine
      </BtnPrimary>
    </div>
  );
}

export default ParkingFine;
