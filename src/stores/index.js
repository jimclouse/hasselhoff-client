import ServerStore from './serverStore';
import {RouterStore} from 'mobx-router';

const store = {
  serverStore: new ServerStore(),
  router: new RouterStore()
};

export default store;
