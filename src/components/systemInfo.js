import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import AppBar from './appBar'
import views from '../views'

class SystemInfo extends Component {
  componentDidMount() {
    this.props.store.serverStore.getSystemInfo()
  }

  handleClick = (event) => {
    console.log('event: %s', event);
    let route = views.home

    switch(event) {
      case "systemInfoDetail":
          route = views.home
          break;
      case "systemProcesses":
          route = views.systemProcesses
          break;
      case "connectionStats":
          route = views.connectionStats
          break;
      case "tables":
          route = views.tables
          break;
      case "dbSpace":
          route = views.dbSpace
          break;
      case "tableSpace":
          route = views.tableSpace
          break;
      default:
          route = views.home
    }

    console.log('route: %s', JSON.stringify(route))
    this.props.store.router.goTo(route)
  }

  render() {
    return (
      <div>
        <AppBar style={{height: '50px'}}/>
        <section className='container' id='system-info'>
          <div className='component-wrap' style={{backgroundColor: '#fff', marginTop:10, marginBottom:10, paddingBottom:10}}>
            <span style={{fontWeight: 600, fontSize: '2em'}}>SystemInfo</span>
            <ul>
              <li><a href='#' onClick={this.handleClick.bind(this,'systemInfoDetail')}>System Information</a></li>
              <li><a href='#' onClick={this.handleClick.bind(this,'systemProcesses')}>System Processes</a></li>
              <li><a href='#' onClick={this.handleClick.bind(this,'connectionStats')}>Host/Program Connection Stats</a></li>
              <li><a href='#' onClick={this.handleClick.bind(this,'tables')}>All Tables</a></li>
              <li><a href='#' onClick={this.handleClick.bind(this,'dbSpace')}>DB Space Used</a></li>
              <li><a href='#' onClick={this.handleClick.bind(this,'tableSpace')}>Table Space Used</a></li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(SystemInfo));
