import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [idx, setIdx] = React.useState(0)

  const nextSlide = () => {
    setIdx((prevIdx) => {
      let idx = prevIdx + 1
      if (idx > people.length - 1) {
        idx = 0
      }
      return idx
    })
  }
  const prevSlide = () => {
    setIdx((prevIdx) => {
      let idx = prevIdx - 1
      if (idx < 0) {
        idx = people.length - 1
      }
      return idx
    })
  }

  useEffect(() => {
    let sliderTimer = setInterval(() => {
      setIdx((prevIdx) => {
        let idx = prevIdx + 1
        if (idx > people.length - 1) {
          idx = 0
        }
        return idx
      })
    }, 7000)
    return () => {
      clearInterval(sliderTimer)
    }
  }, [idx])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIdx) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIdx === idx) {
            position = 'activeSlide'
          }
          if (
            personIdx === idx - 1 ||(idx === 0 && personIdx === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
