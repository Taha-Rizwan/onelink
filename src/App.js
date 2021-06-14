import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import TripPage from './components/TripPage'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css'
import data from './data/destinations.json'
import Footer from './components/Footer'
import DestinationsPage from './pages/DestinationPage/DestinationsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import Review from './pages/Review/Review'
import Confirmation from './pages/Confirmation/Confirmation'
import Form from './components/Form/Form'
import PaymentForm from './components/PaymentForm'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Account from './components/Account'

const App = () => {
  const trips = data.trips
  


  const theme = createMuiTheme({
    palette: {
      primary:{
        main:  '#4caf50'
      },
      secondary: {
        main: '#23395d'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/">
          
            <Hero />
            <Destinations />
          </Route>
          <Route exact path="/destinations">
           
            <DestinationsPage />
          </Route>
          {trips.map((trip, index) => (
            <Route exact path={`/destinations/${trip.slug}`}>
              <TripPage key={index} trip={trip} />
            </Route>
          ))}
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          {trips.map((trip, index) => (
            <Route exact path={`/review/${trip.slug}`}>
              <Review trip={trip}/>
            </Route>
          ))}
          <Route exact path="/checkout">
            <PaymentForm />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/account">
          <Account />
        </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
   
    
  )
}

export default App
