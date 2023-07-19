// Navigation.js

import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import NotFound from './NotFound';
import { UserProvider } from './UserContext';

const Navigation = () => {
  const [circleCount, setCircleCount] = useState(0); 
  return (
    <UserProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Task 1</Link></li>
              <li><Link to="/task2">Task 2</Link></li>
              {/* Add links to other tasks */}
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Task1 setCircleCount={setCircleCount} /> 
            </Route>
            <Route exact path="/task2">
              <Task2 circleCount={circleCount} /> 
            </Route>
            <Route exact path="/user/:userId">
              <Task3 />
            </Route>
           
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};

export default Navigation;
