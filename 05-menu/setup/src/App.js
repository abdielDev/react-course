import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [filterItems, setFilterItems] = useState(items);

  const filterItemsByCategory = (filter) => {
    if(filter) {
      return setFilterItems(items.filter(item => item.category === filter));
    }
    setFilterItems(items)
  };
  return <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline">
          </div>
        </div>
        <Menu filterMethod={filterItemsByCategory} />
        <Categories filterItems={filterItems} />
      </section>
    </main>;
}

export default App;
