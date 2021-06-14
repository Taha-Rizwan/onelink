import React from 'react'
import './tripPage.css'

const TripPage = ({trip}) => {
    var user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="tripPage">
      <div className="pageBg">
        <img src={trip.bg} alt={trip.name} className="tripBg"/>
      </div>
      <div className="tripContent">
        <div className="tripItems">
          <h1>Trip to {trip.name}</h1>
          <p>{trip.place_desc}</p>
          <ul>
          {trip.trip_desc.map((yeah) => (
            <li>{yeah}</li>
          ))}
          </ul>
          <h2 style={{textAlign: 'left'}} >Locations Covering :- </h2>
          <ul>
            {trip.locations.map((location) => (
              <li>{location}</li>
            ))}
          </ul>
          <h3>Days: {trip.days[0]}, {trip.days[1]}, {trip.days[2]}</h3>
          <h1>Price: Rs {trip.price[0]}, Rs {trip.price[1]}, Rs {trip.price[2]}</h1>
          <a href={(user) ? `/review/${trip.slug}`: `/signup`}>
            <button>Book Tickets</button>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default TripPage
