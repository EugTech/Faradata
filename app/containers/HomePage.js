// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import { NavPane, NavPaneItem, Text,TextInput,Button,View } from 'react-desktop/windows';


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

  saveData = e => console.log(this.state.inputValue);

  handleChange = e =>  {
     console.log(e.target.value);
		  this.setState({inputValue: e.target.value});
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
        <View layout="vertical">
        <Text>stuff here</Text>
        <TextInput
        ref="input"
        key='datainput'
        theme={this.props.theme}
        color={this.props.color}
        
        label="Some Data"
        placeholder="My data"
        value={this.state.inputValue}
        onChange={this.handleChange}
      />
      <Button push color={this.props.color} 
        onClick={()=>console.log(this.state.inputValue)}>
        Save the data
      </Button>
      </View>
      </NavPaneItem>
      </NavPane>
    );
  }
}
