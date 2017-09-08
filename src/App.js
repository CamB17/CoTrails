'use strict';

import React, { Component } from 'react';
import {    
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

import axios from 'axios';

import Icon from 'react-native-vector-icons/Entypo';
const myIcon = (<Icon name="rocket" size={30} color="#900" />);

let Home = require('./components/home.ios');
let Trail = require('./components/Trail');
//let Register = require('./components/Register');
//let More = require('./components/more.ios');

export default class CoTrails extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	selectedTab: 'home'
	  };
	}

	handleSaveTrail(data) {
    //console.log("save button clicked");
    console.log(data.name);
    this.setState({trailInfo: data});
    //axios.post('http://localhost:3000/peak/', {
    axios.post('https://cmcdata.herokuapp.com/peak/', {  
        name: data.name
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

	render() {
      return (
        <TabBarIOS 
          unselectedTintColor="#2a363b"
          tintColor="#2a363b"
          unselectedItemTintColor="#FFFFFF"
          barTintColor="#83AE9B"
          selectedTab={this.state.selectedTab}>
          <Icon.TabBarItemIOS
            selected={this.state.selectedTab === 'home'}
            //systemIcon="featured"
            title="Home"
            iconName="home"
            onPress={() => {
                this.setState({
                    selectedTab: 'home',
                });
            }}>
              <Home/>
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            selected={this.state.selectedTab === 'trail'}
            //icon={{uri:'contacts'}}
            //systemIcon="search"
            title="Trails"
            iconName="address"
            onPress={() => {
                  this.setState({
                      selectedTab: 'trail',
                  });
            }}>
            <Trail
            onSaveTrail={this.handleSaveTrail.bind(this)}
            />
            
          </Icon.TabBarItemIOS>
          
        </TabBarIOS>
      );
    }
}

