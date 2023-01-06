import React from 'react';

const List = ({ elements }) => {
  return (
    <div className='listContainer'>
      {elements.map(({id, name, age, image}) => (
        <figure className='person' key={id}>
          <img src={image}/>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default List;
