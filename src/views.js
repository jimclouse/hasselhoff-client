import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import Home from './components/home'

const views = {
  home: new Route({
    path: '/',
    component: <Home/>
  })
  // iframe: new Route({
  //   path: `/iframe`,
  //   component: <Iframe/>
  // }),
  // product: new Route({
  //   path: '/product',
  //   component: <ProductDetails/>,
  //   beforeEnter: (route, params, store) => {
  //   }
  // }),
  // products: new Route({
  //   path: '/products',
  //   component: <ProductList/>
  // })
};
export default views;
