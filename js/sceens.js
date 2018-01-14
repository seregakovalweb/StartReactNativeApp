import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import Home from './containers/Login';


const routes = [
  { key: 'Home', component: Home, initial: true, },
];


export default Actions.create(<Scene key="root" hideNavBar={true}>
  {
    routes.map(routeProps => (<Scene {...routeProps} />))
  }
</Scene>);
