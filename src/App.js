import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import Event from './views/Event.jsx';

function App() {
  return (
    <>
      <Event />

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/Event'>event</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route path='/Event'>
              <Event />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
