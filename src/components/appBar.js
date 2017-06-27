import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import _ from 'lodash';
import Group from 'material-ui/svg-icons/social/group'
import views from '../views'
import '../css/font.css'
import '../css/App.css';

// ui imports
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {value: "MASTER"};
  }

  home = (event) => {
    this.props.store.router.goTo(views.home)
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
    console.log("servers:", JSON.stringify(this.props.store.serverStore.servers));
  }

  render() {
    console.log('render called....');
    const servers = this.props.store.serverStore.servers;
    const databases = this.props.store.serverStore.databases;

    return (
      <div>
        <div className="clearfix" style={{backgroundColor: '#fff'}} onTouchTap={this.home.bind(this)}>
          <div className="container">
            <div style={{float: 'left', marginLeft:10, marginTop:5}}>
              <Group/>
              <span style={{marginLeft:10, fontWeight: 600, fontSize: '2em'}}>Data Bowie</span>
            </div>
            <div style={{float: 'right', marginRight: 10, marginTop: 10}}>
              <span style={{margin: 'auto'}} >
                <span>Options | </span>
                <span style={{fontWeight: 600}}>Server:</span>
                <DropDownMenu value={this.props.store.serverStore.selectedServer} onChange={this.serverChange}>
                {
                  servers.map( (s,i) => {
                    return (
                      <MenuItem value={s} primaryText={s} key={i}/>
                    )
                  })
                }
                </DropDownMenu>
              </span>

              <span style={{marginRight: 10, marginTop: 5}} >
                <span style={{fontWeight: 600, paddingBottom:2}}>| Database:</span>
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
          </div>
        </div>
        <div><hr style={{marginTop:'0', marginBottom:'0', border:'0', borderTop:'1px solid #e9ebed'}} /></div>
      </div>
    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(AppBar));
