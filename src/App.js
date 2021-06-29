import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import CardDetails from './views/CardDetails';
import CardDetailsContext from './contexts/CardDetailsContext';
import './App.css';
import { useState } from 'react';

function App() {
  const [cardDetails, setCardDetails] = useState({});
  return (
    <Router>
      <div className='app'>
        <nav className='navigation-bar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <CardDetailsContext.Provider
              value={{
                setCardDetails: setCardDetails,
              }}
            >
              <Home />
            </CardDetailsContext.Provider>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/carddetails'>
            <CardDetailsContext.Provider
              value={{
                cardDetails: cardDetails,
              }}
            >
              <CardDetails />
            </CardDetailsContext.Provider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
