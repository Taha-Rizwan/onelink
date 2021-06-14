import React, {useState} from 'react'
import {Grid, Button} from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './Form/CustomTextField'
import {Link} from 'react-router-dom'
import axios from 'axios'
import validator from 'validator';
import './signup.css'

const Signup = () => {
  const methods = useForm()
  const [errorMessage, setErrorMessage] = useState("")
  return (
    <div className="signup">
      <div className="signupBg">
        <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="bgSignup"/>
      </div>
      <div className="signupForm">
        <h1 className="signupTitle">Signup</h1>
        <p className="poopie">Already have an account? Sign in <a href="/signin" className="blueLink">here</a></p>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(async (data) => {
          if(!validator.isMobilePhone(data.phoneNumber, ['en-PK'])) {
            setErrorMessage("Wrong Phone Number")
          }
          else{
            
            const response = await axios.post('https://sleepy-plains-63774.herokuapp.com/signup', {
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              address: data.address,
              city: data.city,
              phoneNumber: data.phoneNumber,
              password: data.password,
              date: new Date()
            })
            if(response.data.error) {
              setErrorMessage(response.data.error)
            }
            else if (response.data.user){
              setErrorMessage("")
              localStorage.setItem('user', JSON.stringify(response.data.user))
              window.location.href = '/'
             
            }
          }
        })}>
          <Grid className='bigShaq'>
          {errorMessage ? <h1 className="errorMessage">{errorMessage}</h1> : null}
          <FormInput required name="firstName" label="First Name" type={"String"}/>
          <FormInput required name="lastName" label="Last Name" type={"String"}/>
          <FormInput required name="email" label="Email" type={"Email"}/>
          <FormInput required name="password" label="Password" type={"Password"}/>
          <FormInput required name="address" label="Address" type={"String"}/>
          <FormInput required name="city" label="City" type={"String"}/>
          <FormInput required name="phoneNumber" label="Phone Number" type={"Number"}/>
        </Grid>
        <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="contained" to="/" color="secondary">Back</Button>
            <Button type="submit" variant="contained" color="primary"   >Next</Button>
          </div>
        </form>

        </FormProvider>
      </div>
    </div>
  )
}

export default Signup
