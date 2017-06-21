import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Info extends Component {
  render() {
    return (
      <Card style={{height: '100%'}}>
        <CardTitle title={this.props.title} />
        <CardText>
          {this.props.description}
        </CardText>
        <CardActions>
          <FlatButton label={this.props.title} />
        </CardActions>
      </Card>
    );
  }
}

export default Info;
