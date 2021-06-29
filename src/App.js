import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import SignUp from "./views/Signup.jsx";

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login"> 
            <Login />
          </Route>
          <Route exact path="/signup"> 
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
