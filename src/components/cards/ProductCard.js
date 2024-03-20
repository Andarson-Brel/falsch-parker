import { Link } from "react-scroll";
import DragDownBtn from "../button/DragDownBtn";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductCard({ productTitle, productDesc, imgsrc, linkTo }) {
  AOS.init();
  return (
    <Link to={linkTo} spy={true} smooth={true} offset={-150} duration={500}>
      <div className="product-card-cont" data-aos="fade-up">
        <div className="product-card">
          <img className="product-img" src={imgsrc} alt="products-images" />
          <div className="product-content">
            <h3 className="product-title">{productTitle}</h3>
            <p className="product-desc">{productDesc}</p>
          </div>
        </div>
        <DragDownBtn imgsrc={"./images/arrow-stretch.svg"} />
      </div>
    </Link>
  );
}

export default ProductCard;
