import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import { UserProvider } from './UserContext';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <UserProvider>
      <Navigation />
    </UserProvider>
  </Router>,
  rootElement
);
