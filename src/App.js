import React from 'react';
import 'antd/dist/antd.css';
import LandingPage from './AppPages/LandingPage/LandingPage';
import DetailsPage from './AppPages/DetailsPage/DetailsPage';
import { Switch, Route } from 'react-router';



const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/details/:id' component={DetailsPage} />
    </Switch>
  )
};

export default App;
