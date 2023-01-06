import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return <div className='container'>
    <div className='mainContainer'>
      <h2>{people.length} Birthdays today</h2>
      <List elements={people} />
      <button onClick={() => setPeople([])}>Clear all</button>
    </div>
  </div>;
}

export default App;
