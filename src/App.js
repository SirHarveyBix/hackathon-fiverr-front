import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import CardDetails from './views/CardDetails';
import CardDetailsContext from './contexts/CardDetailsContext';
import LoginContext from './contexts/LoginContext';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import fiverrlogo from './img/fiverrlogo2.png';

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
                  <img
                    className='logo-fiverr'
                    src={fiverrlogo}
                    alt='Fiverr Icon'
                  />
                </li>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/profil'>Profil</Link>
                </li>
                <li>
                  <Link to='/map'>Map</Link>
                </li>
              </ul>
              <Button
                style={{
                  marginTop: '-13px',
                  marginRight: '30px',
                  backgroundColor: '#1ebe73',
                  border: 'none',
                }}
              >
                Log out
              </Button>
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
            <Signup />
            <Login />
          </LoginContext.Provider>
        )}
      </div>
    </Router>
  );
}

export default App;
