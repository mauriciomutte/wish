import React from 'react';
import './style.css';

const List = ({ title, products }) => {
  const getTotalPrice = () => 
    products.map(item => item.price).reduce((prev, next) => prev + next);

  return (
    <div className="listWrapper">
      <h2 className="listTitle">{title} - R$ {getTotalPrice()}</h2>
      <div className="productsList">
        {products.map(({img, name, price}, index) => (
          <div key={index} className="product" title={name}>
            <img src={img} alt={name} className="productImg"/>
            <h3 className="productName" >{name}</h3>
            <span className="productPrice">R$ {price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;