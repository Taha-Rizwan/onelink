import React from 'react'
import './about.css'

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="aboutBg">
        <img src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background" className="aboutImage"/>
      </div>
      <div className="aboutTitle">
        <h1>About Us</h1>
      </div>
      <div className="aboutUs">
        <h1>━━About Us━━</h1>
        <p>One Link was established 2 years ago in Islamabad, Pakistan and is one of the oldest and well known travel and tourism companies in Pakistan. It all started in a small office run by a young Saeed Tariq and Rizwan Haleem who, fascinated by travelling from a young age on, knew that this profession was their calling in life. A whole new world in tourism opened up and over the years they was able to create a variety of new ideas in the field of travel in Pakistan. The company grew steadily under his guidance and his will to continuously promote the importance of tourism in and for Pakistan has remained steadfast to this day. They has represented Pakistan in various worldwide exhibitions and conventions, giving him the chance to promote this country as a tourist destination on an international platform as well.</p>
        <div className="flex">
        <div className="establish">
          <h1>One</h1>
          <h1>Link</h1>
          <h1>Established</h1>
          <h1>2 years</h1>
          <h1>ago</h1>
        </div>
          
          <div className="legacy">
            <h1>Our Legacy</h1>
            <p>One Link is one of Pakistan’s largest tour sellers and specializes in organizing tours tailored to the specific interests, needs and requirements of every in and outbound client. The One Link head office is in Karachi, with branches in Islamabad, Lahore as well as Hunza, and together we have more than 60 employees, who ensure that a wide range of services are made available to all of our customers.

            One Link has a team of professionals who have been in the tourism industry for many years and who are extremely determined to provide a different vision for travelling to all clients so that they may experience the best and then return satisfied with our service. One Link management philosophy is based on the simple concept of delivering the highest quality customer services at the best possible price. Today we serve an ever growing number of clients, travel agents and tour operators around the world. All of our partners remain exceedingly happy with our services, especially by the number of value added services we have on offer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
