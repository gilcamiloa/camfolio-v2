import "./projects.scss";
import React from 'react';
import Product from "./Product";
import { products } from "./productData";

const ProductList = () => {
  return (
    <div className='projects'>
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">&lt;&lt;<span>&nbsp;Projects&nbsp;</span>&gt;&gt;</h1>
          <p className="pl-desc">
            I am keen taking on projects in various capacities in order to expand my knowledge of programming as a whole..
            Below are some of the projects I have been able to create and collaborate on so far..
          </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} desc={item.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
