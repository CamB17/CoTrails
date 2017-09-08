
'use strict';
 
import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import FadeInView from './FadeInView'; 
const logo = require('../Images/logo.jpg');
const CoTrail_logo = require ('../Images/CoTrail_logo.png')

//const logo = require('../images/CMC_logo_2010.png');

var styles = StyleSheet.create({
  description: {
    fontSize: 60,
    textAlign: 'center',
    color: '#2a363b',
    marginBottom: 60,
    fontFamily: 'Bodoni 72 Oldstyle',
  },
  description2: {
    fontSize: 30,
    textAlign: 'center',
    color: '#2a363b',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 70,
  },

  image2: {
    width: 290,
    height: 200,
    marginBottom: 10,
  }
});

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FadeInView>
          <Image style={styles. image2} source={CoTrail_logo} />
          <Image style={styles.image} source={logo} />
        </FadeInView>
      </View>
    );
  }
}
 
module.exports = Home;