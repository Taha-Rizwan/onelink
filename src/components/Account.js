import { Button } from '@material-ui/core'
import React from 'react'
import './account.css'

const Account = () => {
  var user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  return (
    <div className="accountPage">
      <div className="accountBg">
        <img src="https://preview.redd.it/gapbfkm58bv31.jpg?auto=webp&s=2d8fd5fe446e0e144d9c8ca2648c24214fda32a4" className="bgAccount" />
      </div>
      <div className="accountInfo">
        <h1 className="userName">{user.firstName} {user.lastName}</h1>
        <h1 className="moreInfo">Email: {user.email}</h1>
        <h1 className="moreInfo">City: {user.city}</h1>
        <h1 className="moreInfo">Address: {user.address}</h1>
        <h1 className="moreInfo">Phone Number: +92 {user.phoneNumber}</h1>
        <Button color="primary" variant="contained" className="logout" onClick={() => {
          localStorage.removeItem('user')
          window.location.href = '/'
        }}>Logout</Button>
      </div>
      
    </div>
  )
}

export default Account
