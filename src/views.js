import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import Home from './components/home'
import SystemInfo from './components/systemInfo'
import ToBeImplemented from './components/toBeImplemented'

let prefix=''
if (process.env.NODE_ENV === 'production')
  prefix = process.env.REACT_APP_DATA_BOWIE_MOUNT

console.log('in views... prefix: %s', prefix);

const views = {
  home: new Route({
    path: `${prefix}/`,
    component: <Home/>
  }),
  systemInfo: new Route({
    path: `${prefix}/systemInfo`,
    component: <SystemInfo/>
  }),
  systemInfoDetail: new Route({
    path: `${prefix}/systemInfoDetail`,
    component: <SystemInfo/>
  }),
  systemProcesses: new Route({
    path: `${prefix}/systemProcesses`,
    component: <ToBeImplemented/>
  }),
  connectionStats: new Route({
    path: `${prefix}/connectionStats`,
    component: <ToBeImplemented/>
  }),
  tables: new Route({
    path: `${prefix}/tables`,
    component: <ToBeImplemented/>
  }),
  dbSpace: new Route({
    path: `${prefix}/dbSpace`,
    component: <ToBeImplemented/>
  }),
  tableSpace: new Route({
    path: `${prefix}/tableSpace`,
    component: <ToBeImplemented/>
  }),
  catchall: new Route({
    path:`${prefix}/:def`,
    component: <Home/>
  })
};
export default views;
