import React, {useState} from 'react'
import './form.css'
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField'
import {Grid, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import validator from 'validator';

const Form = () => {
  var trip = JSON.parse(localStorage.getItem("trip"))
  var people = JSON.parse(localStorage.getItem("people"))
  var userData = JSON.parse(localStorage.getItem("userData"))
  const [errorMessage, setErrorMessage] = useState("")
  const methods = useForm()
  return (
    <div className="formPage">
    <div className="formBg">
      <img src="https://images.pexels.com/photos/615348/forest-fog-sunny-nature-615348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background" className="bgForm"/>
    </div>
    <div className="form">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => {
            if(!validator.isMobilePhone(data.ph, ['en-PK'])) {
              setErrorMessage("Wrong Phone Number")
              localStorage.removeItem('userData')
            }
            else{
            localStorage.setItem('userData', JSON.stringify(data))
            setErrorMessage("")
            window.location.href = '/payment'
            }
          })}>
          {(errorMessage)? <h1 className="error">{errorMessage}</h1> : null}
            <Grid container spacing={3}>
            
              <FormInput required name="firstName" label="First Name" type={"String"}/>
              <FormInput required name="lastName" label="Last Name" type={"String"}/>
              <FormInput required name="email" label="Email" type={"Email"}/>
              <FormInput required name="address" label="Address" type={"String"}/>
              <FormInput required name="city" label="City" type={"String"}/>
              <FormInput required name="ph" label="Phone Number" type={"Number"}/>
              
            </Grid>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="contained" to={`/review/${trip.slug}`} color="secondary">Back</Button>
            <Button type="submit" variant="contained" color="primary"   >Next</Button>
          </div>
          </form>
         
        </FormProvider>
    </div>
     
    </div>
  )
}

export default Form
