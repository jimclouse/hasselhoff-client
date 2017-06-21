import {extendObservable, action} from 'mobx';
import _ from 'lodash';
import {post} from '../lib/http';

class ServerStore {
  constructor() {
    extendObservable(this, {
      selectedServer: "",
      setSelectedDatabase: "",
      databases: [],
      servers: [],
      serverInfo: {}
    });
  }

  getServers = action( () => {
  	this.servers = ["PROD", "DATAHUB"];
  	this.selectedServer = this.servers[0];
  	this.getDatabases();
  });

  getDatabases = action( () => {
  	if(this.selectedServer === "PROD") {
  		this.databases = ["GLGLIVE", "FINANCE", "MASTER"]
  	}
  	else {
  		this.databases = ["fusion", "SFDC", "CDR"]
  	}

  	console.log("selected server is ", this.selectedServer);
  	console.log("datbases are ", JSON.stringify(this.databases));
  	this.selectedDatabase = this.databases[0];
  });

  setSelectedServer = action( (server) => {
  	this.selectedServer = server;
  	this.getDatabases();
  });

  setSelectedDatabase = action( (db) => {
  	this.selectedDatabase = db;
  });


  getServerInfo = action( () => {
  	const opts = {
		template: "serverStats",
		data: {
			server: "DATAHUB"
		}
  	}
	return post('query', opts)
        .then( response => {
			this.serverInfo.name = response[0][0].SERVERNAME;
			this.serverInfo.version = response[1][0].VERSION;
			this.serverInfo.startDate = response[2][0].sqlserver_start_time;
          	return this.serverInfo;
        })
        .catch( () => {
          return 'Error hitting the hoff'
        })

  });

}

export default ServerStore;