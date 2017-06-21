import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import _ from 'lodash';
import Cake from 'material-ui/svg-icons/social/cake'

// ui imports
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import '../App.css';

class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {value: "MASTER"};
  }

  databaseChange = (event, index, value) => {
    this.props.store.serverStore.getDatabases()
  }

  serverChange = (event, index, value) => {
    console.log("server changed ", value, event)
    this.props.store.serverStore.setSelectedServer(value)
  }

  componentDidMount() {
    this.props.store.serverStore.getServers()
    //this.props.store.serverStore.getDatabases()
    console.log("servers:", JSON.stringify(this.props.store.serverStore.servers));
  }
  //

  render() {
    const servers = this.props.store.serverStore.servers;
    const databases = this.props.store.serverStore.databases;

    return (
      <div style={{borderBottom: 'solid 1px #000'}}>
        <span style={{float: 'left', marginLeft: '10px'}}>
          <Cake/>
          <span style={{fontWeight: 600, fontSize: '2em'}}>Data Hasselhoff</span>
        </span>
        <span style={{float: 'right', marginRight: '10px'}}>
          <DropDownMenu value={this.props.store.serverStore.selectedServer} onChange={this.serverChange}>
          {
            servers.map( (s,i) => {
              return (
                <MenuItem value={s} primaryText={s} key={i}/>
              )
            })
          }
          </DropDownMenu>

          <DropDownMenu value={this.props.store.serverStore.selectedDatabase} onChange={this.databaseChange}>
          {
            databases.map( (db,i) => {
              return (
                <MenuItem value={db} primaryText={db} key={i}/>
              )
            })
          }
          </DropDownMenu>
        </span>
      </div>

    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(AppBar));
