import React from 'react'

const SingleColor = ({ color }) => {
  return <article className="color false" style={{backgroundColor: `rgb(${color.rgb})`}}>
    <p className="percent-value">{color.weight}%</p>
    <p className="color-value">{color.hexString()}</p>
  </article>
}

export default SingleColor
