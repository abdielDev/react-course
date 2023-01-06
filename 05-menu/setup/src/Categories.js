 import React from 'react';

const Categories = ({ filterItems }) => {
  return <div className="section-center">
    {filterItems.map(item => (<article className="menu-item">
      <img src={item.img} alt="buttermilk pancakes" className="photo"/>
      <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <h4 className="price">${item.price}</h4>
        </header>
        <p className="item-text">{item.desc}</p>
      </div>
    </article>))}
  </div>;
};

export default Categories;
