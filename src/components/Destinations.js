import React from 'react'
import Data from '../data/destinations.json'
import TripCard from './TripCard'
import {Typography} from '@material-ui/core'
import './destinationsStyles.css'

const Destinations = () => {
  const trips = Data.trips
  return (
    <div className="container">
      <Typography variant="h2" className="heading">Our Favorite Destinations</Typography>
      <div className="wrapper">
        {trips.map((trip, index) => (
          <TripCard trip={trip} key={index}/>
        ))}
      </div>
      
    </div>
  )
}

export default Destinations
