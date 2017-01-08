// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';


export default class HomePage extends Component {

  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  constructor() {
    super();
    this.state = {
      selected: 'dataentry'
    }
  }

  render() {
    return (
        <NavPane openLength={200} push color={this.props.color} theme={this.props.theme}>
       <NavPaneItem
        title="Data Entry"
        theme="light"
        background="#ffffff"
        selected={true}
        padding="10px 20px"
        push
      >
        <Text>stuff here</Text>
      </NavPaneItem>
      </NavPane>
    );
  }
}
