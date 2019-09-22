import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './spacex-logo.jpg';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="SpaceX" style={{
              maxWidth: '200px',
              display: 'block',
              margin: 'auto'
            }} />
          </Link>
          <Route exact path="/" component={Launches}></Route>
          <Route path="/launch/:flight_number" component={Launch}></Route>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
