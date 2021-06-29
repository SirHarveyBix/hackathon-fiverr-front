import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import CardDetails from './views/CardDetails';
import CardDetailsContext from './contexts/CardDetailsContext';
import LoginContext from './contexts/LoginContext';
import './App.css';
import { useState } from 'react';

function App() {
  const [cardDetails, setCardDetails] = useState({});
  const [isLog, setIsLog] = useState(false);
  return (
    <Router>
      <div className='app'>
        {isLog ? (
          <>
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
              <Route path='/signup'>
                <Signup />
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
          </>
        ) : (
          <LoginContext.Provider
            value={{
              setIsLog: setIsLog,
            }}
          >
            <Login />
          </LoginContext.Provider>
        )}
      </div>
    </Router>
  );
}

export default App;
