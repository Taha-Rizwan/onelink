import React from 'react'
import './styles.css'
import data from '../../data/destinations.json'
import TripCards from './TripCards'

const DestinationsPage = () => {
  const trips = data.trips
  return (
    <div className="page">
      
      <h1 className="destinationHeader">Destinations</h1>
      <div className="tripWrapper">
      {trips.map((trip, index) => (
        <TripCards trip={trip} key={index}/>
      ))}
    </div>
    </div>
  )
}

export default DestinationsPage
