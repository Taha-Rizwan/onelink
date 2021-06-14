import React, {useState} from 'react'
import {IconButton, Typography, Drawer, List,  ListItem} from '@material-ui/core'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import './navStyles.css'

const Nav = () => {
  var user = JSON.parse(localStorage.getItem("user"))
  const [state, setState] = useState({
   top: false
  })
  const toggleDrawer = (anchor,open) => (event) => {
    if (event.type ==='keydown'  && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [anchor]: open})
  } 
  const list = (anchor) => (
    <div
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem  component={Link} to="/destinations">
          <h1 className="linky">
          Destinations
          </h1>
        </ListItem>
        <ListItem component={Link} to="/contact">
          <h1 className="linky">
          Contact Us
          </h1>
        </ListItem>
        <ListItem  component={Link} to="/about">
          <h1 className="linky">
          About Us
          </h1>
        </ListItem>
       {(!user) ? (<ListItem  component={Link} to="/signup">
        <h1 className="linky">
        Signup
        </h1>
      </ListItem>) : (<ListItem  component={Link} to="/account">
      <h1 className="linky">
      Account
      </h1>
    </ListItem>)}
      </List>
    </div>

  )
  return (
    <div className="nav">
      <Typography variant="h4" className="link" component={Link} to="/">OneLink</Typography>
      <div className="links">
        <Typography variant="h5" className="link" component={Link} to="/destinations">Destinations</Typography>
        <Typography variant="h5" className="link" component={Link} to="/contact">Contact Us</Typography>
        <Typography variant="h5" className="link" component={Link} to="/about">About Us</Typography>
        {(!user) ? <Typography variant="h5" className="link" component={Link} to="/signup">Signup</Typography> : <Typography variant="h5" className="link" component={Link} to="/account">Account</Typography>}
      </div> 
      <div>
      {['top'].map((anchor, categories ) => (
        <div>
        <React.Fragment key={anchor}>
        <IconButton onClick={toggleDrawer(anchor, true)} >
          <MenuIcon fontSize="large"/>
        </IconButton>
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
          {list(anchor, categories )}
        </Drawer>
        </React.Fragment> 
       </div>
    ))}
      
      </div>
    </div>
  )
}

export default Nav
