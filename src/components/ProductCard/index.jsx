import React from "react";
import "./styles.css";
import { CgArrowRight } from "react-icons/cg";


const ProductCard = ({ image, title, subtitle, linkText }) => {
  return (
    <a href="/" className="product-item">
      {image && (
        <div className="product__image">
          <img src={`/assets/${image}`} alt="product" />
        </div>
      )}
      <div className="product-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className="btn__link">
          {linkText} <CgArrowRight />
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
