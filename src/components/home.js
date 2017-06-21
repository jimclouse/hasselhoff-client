import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {observer, inject} from 'mobx-react';

import '../App.css';
import AppBar from './appBar'
import Info from './info'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {serverInfo: {}}
  }

  componentDidMount() {
    let that = this;
    this.props.store.serverStore.getServerInfo()
    .then ( function(serverInfo) {
      console.log("post htp call" , serverInfo);
      that.setState({serverInfo: serverInfo});
    })


  }

  render() {

    const serverInfo = this.state.serverInfo;

    console.log("foo: ", serverInfo)

    return (
      <div className="App">
        <AppBar style={{height: '50px'}}/>

        <div>
          <div>Server: {serverInfo.name }</div>
          <div>Version: {serverInfo.version !== undefined ? serverInfo.version : null}</div>
          <div>Last Start Time: {serverInfo.startDate !== undefined ? serverInfo.startDate : null}</div>
        </div>

        <GridList
            cols={3}
            cellHeight={200}
            padding={1}
            style={{height: '100%'}}
          >
              <GridTile>
                <Info title="System Info"
                      description="View info such as current processes, tables, database sizes, etc."
                      view="systemInfo"/>
              </GridTile>
              <GridTile>
                <Info title="Maintenance"
                      description="Here you'll find tools to help you tune your database. This section includes information such as unused indexes, unused stored procedures, fragmented indexes, etc."
                      view="maintenance"/>
              </GridTile>
              <GridTile>
                <Info title="Data Dictionary"
                      description="What the heck is that table even used for? Read through the data dictionary and find out. Even better, if you know, edit the dictionary and share your knowledge."
                      view="dictionary"/>
              </GridTile>
          </GridList>


      </div>
    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(Home));
