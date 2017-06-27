import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import _ from 'lodash';

// ui imports
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import '../css/font.css'
import '../css/App.css';

const styles = {
  customWidth: {
    width: 200,
  },
};

class ServerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {value: "MASTER"};
  }

  handleChange = (event, index, value) => this.setState({value});


  componentDidMount() {
    this.props.store.serverStore.getDatabases()
    console.log("databases:", JSON.stringify(this.props.store.serverStore.databases));
  }
  //

  render() {
    const databases = this.props.store.serverStore.databases;
    // forEach(db in databases) {
    //   console.log(db);
    // }

    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        {
          databases.map( (db,i) => {
            return (
              <MenuItem value={db} primaryText={db} key={i}/>
            )
          })
        }
        </DropDownMenu>
      </div>

    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(ServerDetails));
