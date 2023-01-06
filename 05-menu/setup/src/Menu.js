import React from 'react';

const Menu = ({ filterMethod }) => {
  return <div className="btn-container">
    <button onClick={() => filterMethod('')} type="button" className="filter-btn">all</button>
    <button onClick={() => filterMethod('breakfast')} type="button" className="filter-btn">breakfast</button>
    <button onClick={() => filterMethod('lunch')} type="button" className="filter-btn">lunch</button>
    <button onClick={() => filterMethod('shakes')} type="button" className="filter-btn">shakes</button>
  </div>;
};

export default Menu;
