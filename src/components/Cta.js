import BtnPrimary from "./button/BtnPrimary";

function Cta() {
  return (
    <div className="w-full cta-container  p-20">
      <div className="cta-contact-cont flex w-full items-center justify-between ">
        <p className=" max-w-52 text-xl">
          Schützengasse 4 8001 Zurich Switzerland
        </p>
        <p className=" max-w-52 text-xl">
          Schützengasse 4 8001 Zurich Switzerland
        </p>
        <tel className="text-xl">+41 44 123 45 67</tel>
      </div>
      <div className="join-cont flex w-full justify-between items-center  mt-80">
        <h1 className=" text-9xl">Join</h1>
        <BtnPrimary>Contact Us</BtnPrimary>
      </div>
    </div>
  );
}

export default Cta;
