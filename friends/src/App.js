import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react';
import Login from "./Components/Login"
import Friends from "./Components/Friends"
import PrivateRoute from "./Components/PrivateRoute"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
}

function App() {
  const [location, setLocation] = useState('');

  const updateLocation = (location) => {
    setLocation(
      location
    )
  }

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography edge="start" variant="h6" className="navTitle">
              Friends App
    </Typography>
            {location == "http://localhost:3000/friends" && <Button onClick={() => logout()} color="inherit">Log Out</Button>}
          </Toolbar>
        </AppBar>
        <Switch>
          <PrivateRoute exact path="/friends" component={() => <Friends updateLocation={updateLocation} />} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
