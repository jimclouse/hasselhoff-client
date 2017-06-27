import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Group from 'material-ui/svg-icons/social/group'
import {observer, inject} from 'mobx-react';
import '../css/font.css'
import '../css/App.css';
import AppBar from './appBar'
import Info from './info'

class Home extends Component {
  componentDidMount() {
    this.props.store.serverStore.getServerInfo()
  }

  render() {
    const serverInfo = this.props.store.serverStore.serverInfo;

    return (
      <div>
        <AppBar style={{height: '50px'}}/>
        <section className='container' id='system-info'>
          <div className='component-wrap' style={{backgroundColor: '#fff', marginTop:30, marginBottom:30}}>
            <Group/>
            <span style={{marginLeft:10, fontWeight: 600, fontSize: '2em'}}>Data Bowie</span>
            <p>While the Hoff is gone to the beach, Ziggy Stardust will watch over your databases</p>
            <div><hr style={{marginTop:5, marginBottom:15, border:0, borderTop:'1px solid #e9ebed'}} /></div>
            <div><b>Server:</b> {serverInfo.name }</div>
            <div><b>Version:</b> {serverInfo.version !== undefined ? serverInfo.version : null}</div>
            <div><b>Last Start Time:</b> {serverInfo.startDate !== undefined ? serverInfo.startDate : null}</div>
          </div>

          <GridList className='component-wrap'
              cols={3}
              cellHeight={300}
              style={{backgroundColor: '#fff', margin:'auto'}}
          >
            <GridTile className='component-wrap' style={{paddingTop:1, paddingBottom:0, paddingLeft:1, paddingRight:16}}>
              <Info
                title="System Info"
                description="View info such as current processes, tables, database sizes, etc."
                view="systemInfo"/>
            </GridTile>
            <GridTile className='component-wrap' style={{paddingTop:1, paddingBottom:10,  paddingLeft:16, paddingRight:16}}>
              <Info
                title="Maintenance"
                description="Here you'll find tools to help you tune your database. This section includes information such as unused indexes, unused stored procedures, fragmented indexes, etc."
                view="maintenance"/>
            </GridTile>
            <GridTile className='component-wrap' style={{paddingTop:1, paddingBottom:10, paddingLeft:16, paddingRight:16}}>
              <Info
                title="Data Dictionary"
                description="What the heck is that table even used for? Read through the data dictionary and find out. Even better, if you know, edit the dictionary and share your knowledge."
                view="dictionary"/>
            </GridTile>
          </GridList>
        </section>
      </div>
    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(Home));
