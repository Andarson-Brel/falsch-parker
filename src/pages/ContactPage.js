import SectionTitle from "../components/SectionTitle";
import BtnPrimary from "../components/button/BtnPrimary";
import ProductCard from "../components/cards/ProductCard";
import Accordion from "../components/sections/Accordion";
import { productData } from "../data";

function ContactPage() {
  return (
    <div className="mt-20">
      <section className="products-section">
        <SectionTitle title={"Our Product"} />

        <div className="produc-section-cont">
          {productData.map((product) => (
            <ProductCard
              imgsrc={product.imgsrc}
              productDesc={product.productDesc}
              productTitle={product.producTitle}
            />
          ))}
        </div>
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

export default ContactPage;
