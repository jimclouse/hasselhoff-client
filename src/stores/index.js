import {RouterStore} from 'mobx-router';
import ServerStore from './serverStore'

const store = {
  router: new RouterStore(),
  serverStore: new ServerStore()
};

export default store;
