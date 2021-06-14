import React, {useState} from 'react'
import './review.css'

const Review = ({trip}) => {

  const [count, setCount] = useState(1)
  const [days, setDays] = useState(trip.days[0])
  const [price, setPrice] = useState(trip.price[0])
  const handleConfirm = (trip, count, days, price) => {
    localStorage.setItem("trip", JSON.stringify(trip))
    localStorage.setItem("people", count)
    localStorage.setItem("days", days)
    localStorage.setItem("price", price)
  }
  const decrease = () => { 
    setCount(count-1)
    if(count <= 1) {
      setCount(1)  
    } 
  }
  const increase = () => {
    setCount(count+1)
    if(price*count===990000) {
      setCount(count)
    }
   
  } 
  if(price* count >= 999999) {
    setCount(count-1)
  }
  console.log(days)
  return (
        <div className="revow">
        <div className="revowBg">
          <img src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background" className="revowImage"/>
        </div>
        <div className="review">
          <h1>{trip.name}</h1>
          <h3>People: {count}</h3>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
          
          <h5>Days: </h5>
          <div className="days">
            <h6 onClick={() => {
              document.getElementById('1').style.backgroundColor = '#4caf50'
              document.getElementById('1').style.color = '#fff'
              document.getElementById('2').style.backgroundColor = '#fff'
              document.getElementById('2').style.color = '#000'
              document.getElementById('3').style.backgroundColor = '#fff'
              document.getElementById('3').style.color = '#000'
              setDays(trip.days[0])
              setPrice(trip.price[0])
            }} id="1" style={{backgroundColor: '#4caf50', color: '#fff'}} >{trip.days[0]}</h6>
            <h6 id="2"
              onClick={() => {
                document.getElementById('1').style.backgroundColor = '#fff'
                document.getElementById('1').style.color = '#000'
                document.getElementById('2').style.backgroundColor = '#4caf50'
                document.getElementById('2').style.color = '#fff'
                document.getElementById('3').style.backgroundColor = '#fff'
              document.getElementById('3').style.color = '#000'
              setDays(trip.days[1])
              setPrice(trip.price[1])
              }}
            >{trip.days[1]}</h6>
            <h6 id="3"
            onClick={() => {
              document.getElementById('1').style.backgroundColor = '#fff'
              document.getElementById('1').style.color = '#000'
              document.getElementById('2').style.backgroundColor = '#fff'
              document.getElementById('2').style.color = '#000'
              document.getElementById('3').style.backgroundColor = '#4caf50'
                document.getElementById('3').style.color = '#fff'
                setDays(trip.days[2])
                setPrice(trip.price[2])
            }}
            >{trip.days[2]}</h6>
          </div>
          <h1>Total:  Rs {price * count}</h1>
          <a href="/checkout" className="confirm" onClick={handleConfirm(trip, count, days, price)}>Confirm</a>
        </div>
     
        </div>
    
  )
}

export default Review
