import React from 'react'
import './confirmation.css'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

const Confirmation = () => {
  var user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="confirmationPage">
      <div className="confirmationBg">
        <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background" className="confirmationImage"/>
      </div>
      <div className="confirmation">
        <h1>Thank You for the booking {user.firstName} {user.lastName}</h1>
        <h3>You will be contacted shortly on the given phone number (+92 {user.phoneNumber})</h3>
        <Button variant="contained" component={Link} to="/destinations" color="secondary" className="backTo">View More Destinations</Button>
      </div>
    </div>
  )
}

export default Confirmation
