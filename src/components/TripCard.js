import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom'
import {Typography} from '@material-ui/core'
import './destinationsStyles.css'

const TripCard = ({trip}) => {
  if(!trip.favorite) return null
  return ( 
    <div className="card">
      <Link to={`/destinations/${trip.slug}`}>
        <img src={trip.image} alt={trip.name} className="img"/>
      </Link>
      
      <div className="info">
        <div className="wrap">
          <LocationOnIcon />
          <Typography variant="h6">{trip.name}</Typography>
          
        </div>
       
      </div>
    </div>
   
  )
}

export default TripCard
