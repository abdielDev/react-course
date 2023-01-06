import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getTours()
  }, [])
  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id))
  }
  const getTours = () => {
    fetch(url).then(response => {
      setLoading(true)
      response.json().then(data => {
        setTours(data)
        setLoading(false)
      })
    })
  }
  if(tours.length) {
    return <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  }
  if(loading) return <main><Loading /></main>
  if(tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>No tours left</h2>
        <button className='btn' onClick={getTours}>refresh</button>
      </div>
    </main>
  }
}

export default App
