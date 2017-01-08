// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
//import styles from './Home.css';
import { Window, TitleBar, Text } from 'react-desktop/windows';

export class Home extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'dark'
  };

  render() {
    return (
      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        padding="12px"
      >
        <TitleBar title="Faradata" controls/>
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
      </Window>
    );
  }
}
