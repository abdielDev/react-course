import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [stateIdx, setStateIdx] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const generateText = (e) => {
    e.preventDefault()
    setParagraphs(data.slice(0, stateIdx));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form">
        <label for="amount">paragraphs:</label>
        <select name="number" onChange={(e) => setStateIdx(Number(e.target.value))}>
          {data.map((option, idx) => <option value={idx + 1}>{idx + 1}</option>)}
        </select>
        <button className="btn" onClick={generateText}>generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map(paragraph => <p>{paragraph}</p>)}
      </article>
    </section>
    )
}

export default App;
