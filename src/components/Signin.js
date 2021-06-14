import React, {useState} from 'react'
import {Grid, Button} from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './Form/CustomTextField'
import {Link} from 'react-router-dom'
import axios from 'axios'
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
        <p className="poopie">Don't have an account? Sign up <a href="/signup" className="blueLink">here</a></p>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(async (data) => {
         const response = await axios.post('https://sleepy-plains-63774.herokuapp.com/signin', {
            email: data.email,
            password: data.password
          })
          if (response.data.error) {
            return setErrorMessage(response.data.error)
          }
            setErrorMessage("")
            localStorage.setItem('user', JSON.stringify(response.data))
            window.location.href = '/'
          
        })}>
          <Grid className='bigShaq'>
          {errorMessage ? <h1 className="errorMessage">{errorMessage}</h1> : null}
          <FormInput required name="email" label="Email" type={"Email"}/>
          <FormInput required name="password" label="Password" type={"Password"}/>     
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
