import "./product.scss";
import { React } from 'react';

const Product = ({ name, img, link, desc }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt='' className="p-img" />
      </a>
      <div className="p-desc">
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Product;
