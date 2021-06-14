import React from 'react'
import './payment.css'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const PaymentForm = () => {
  var user = JSON.parse(localStorage.getItem('user'))
  var trip = JSON.parse(localStorage.getItem("trip"))
  var people = JSON.parse(localStorage.getItem("people"))
  var spice = JSON.parse(localStorage.getItem("price"))
  var days = JSON.parse(localStorage.getItem("days"))
  const price = spice * people
  const api = 'https://sleepy-plains-63774.herokuapp.com/checkout'
  async function handleToken(token) {
    document.getElementById('waiting').style.display = 'block'
    const response = await axios.post(api, {
      token,
      trip,
      people,
      user,
      price,
      days,
      date: new Date()
    })
    const {status} = response.data
    if (status === 'success') {
      window.location.href = '/confirmed'
    } else {
      window.location.href = '/error'
    }
  }
  return (
    <div className="paymentPage">
      <h1 id="waiting">Loading Confirmation...</h1>
      <div className="paymentBg">
        <img src="https://images.pexels.com/photos/1590114/pexels-photo-1590114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background" className="paymentImage"/>
      </div>
    <div className="payment">
      <div className="details">
          <h1>Name: {user.firstName} {user.lastName}</h1>
          <h1>Email: {user.email}</h1>
          <h1>Phone Number: {user.ph}</h1>
          <h1>City of Residence: {user.city}</h1>
          <h1>Address: {user.address}</h1>
          <h1>Purchase: Tour to {trip.name} for {people} people</h1>
      </div>

        <StripeCheckout 
        stripeKey = {process.env.REACT_APP_STRIPE_PUBLIC_KEY}
        token={handleToken}
        amount={price*100}
        currency="PKR"
        email={user.email}
        name={`Trip to ${trip.name}`}
        image={trip.image}
        />

      
    </div>
    
    </div>
  )
}

export default PaymentForm
