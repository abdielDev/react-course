import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("")
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  return <>
    <section className="container">
      <h3>color generator</h3>
      <input type="text" placeholder="#f15025" className="null" defaultValue={color} onChange={(e) => setColor(e.target.value)} />
      <button type="button" className="btn" onClick={() => setColors(new Values(color).all(10))}>submit</button>
    </section>
    <section className="colors">
      {colors.map(colorEl => <SingleColor color={colorEl} />)}
    </section>
  </>
}

export default App
