import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import Home from './components/home'

let prefix=''
if (process.env.NODE_ENV === 'production')
  prefix = process.env.REACT_APP_DATA_BOWIE_MOUNT

console.log('in views...', prefix);
console.log('path: %s', path);

const views = {
  home: new Route({
    path: `${prefix}/`,
    component: <Home/>
  }),
  catchall: new Route({
    path:`${prefix}/:def`,
    component: <Home/>
  })
};
export default views;
