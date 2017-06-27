import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import views from '../views'
import '../css/font.css'
import '../css/App.css';

class Info extends Component {
  buttonClick = (event) => {
    console.log('event: %s', event);
    this.props.store.router.goTo(views.systemInfo)
  }

  render() {
    return (
      <Card className='opl-list'>
        <CardTitle style={{paddingTop:0, paddingBottom:5}} title={this.props.title} />
        <CardText style={{paddingTop:0}}>
          {this.props.description}
        </CardText>
        <CardActions>
          <FlatButton
            label={this.props.title}
            backgroundColor='#80d7e0'
            hoverColor='#40b5c5'
            onTouchTap={this.buttonClick.bind(this, this.props.view)}
          />
        </CardActions>
      </Card>
    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(Info));
