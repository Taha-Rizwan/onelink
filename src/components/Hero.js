import React from 'react'
import Video from '../assets/videos/herovid.mp4'
import { Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import './heroStyles.css'

const Hero = () => {
  return (
    <div className="container">
      <div className="bg">
        <video src={Video} autoPlay loop muted playsInline className="video"/>
      </div>
      <div className="content">
        <div className="items">
          <h1 className="title">Thousands of Destinations</h1>
          <h3 variant="h3" className="small-title">One Link</h3>
          <Button variant="outlined" className="button" color="primary" size="large" component={Link} to="/destinations">View Destinations</Button>
        </div>

      </div>

    </div>
  )
}

export default Hero
