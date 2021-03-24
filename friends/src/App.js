import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login"
import Friends from "./Components/Friends"
import PrivateRoute from "./Components/PrivateRoute"


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
