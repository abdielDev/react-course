import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return <>
    <div className='title'>
      <h2>Tours Project Setup</h2>
      <div className='underline'></div>
    </div>
    <div className='tours'>
      {tours.map((tour, idx) => <Tour key={idx} {...tour} removeTour={removeTour} />)}
    </div>
  </>;
};

export default Tours;
