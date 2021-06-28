import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './views/Home.jsx';
import Login from './views/Login.jsx';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="/login"> 
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
