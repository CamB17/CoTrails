'use strict'

import React, { Component } from 'react';
import { 
	StyleSheet,
	View,
	Text,
	ListView,
	TouchableHighlight,
	ScrollView,
	TextInput,
	Image,
} from 'react-native';

import Button from 'react-native-button';

import SearchBar from './SearchBar';
import Footer from './Footer'; 
import trails from './traillist';

import axios from 'axios';

import { Separator } from 'react-native-form-generator';

import Icon from 'react-native-vector-icons/Entypo';
const myIcon = (<Icon name="thumbs-up" size={30} color="#2f62bf" />);
const back = (<Icon name="chevron-left" size={60} color="black" />);



const ds = {};

var styles = StyleSheet.create({
  description: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: '#6C5B7B',
    fontFamily: 'Copperplate-Bold',
    //fontFamiliy:
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 200,
    backgroundColor: '#FFFFFF', //main background
    marginTop: 20,
  },
  trail: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  exit: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'black',
    marginTop: 0,
    marginLeft: 30,
    borderRadius: 2
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 12,
    // height: 20,
    flex: 1,
    //backgroundColor: '#234F33',
    alignItems: 'center',
    //color: 'white',
  },
  rowText: {
    marginLeft: 12,
    fontSize: 16,
  },
  rowCity: {
    // marginLeft: 40,
    left: 40,
    
  },
  textCity: {
    color: 'black',
    textAlign: 'right',
  },
  
  textMiles: {
  	color: '#355c7D',
  	right: -25,

  },

  textDifficulty: {
  	color: '#E84A5F'
  },

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  completed: {
    // flex: 2,
  },
  textInput: {
    height: 30,
    borderWidth: 1,
    borderColor: '#8E8E8E',
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
});


class Trail extends Component {
	

	constructor(props) {
	super(props);

		ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(trails),

			text: ''
		};
	}


	rowClick = (data) => {
		console.log("row clicked");
		console.log(data);
		let oneTrail = data;

		this.setState({
			selectedTrail: oneTrail,
			showTrail: true});
	}

	filterSearch(text){
		const newData = trails.filter(function(item ){
			const itemData = item.city.toUpperCase()
			const textData = text.toUpperCase()
			return itemData.indexOf(textData) > -1
		})
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(newData),
			text: text
		})
	}

	render() {
		console.log(this.state.selectedTrail);
		if (this.state.selectedTrail) {
			let picture = this.state.selectedTrail.picture;
			console.log(picture);
		}

		return (
			
			<View style={styles.container}>
			  {this.state.showTrail &&
				<View style={styles.container}>
				<ScrollView>
					<Button style={styles.exit} onPress={() => {this.setState({showTrail: false})}}>
					{back}
					</Button>


					<View style={styles.trail}>
						
						<Text style={{fontSize: 30, color: '#6C5B7B', marginBottom: 10, marginTop: 10, fontFamily: 'Copperplate-Bold' }}>{this.state.selectedTrail.name}</Text>
						<Image source={{uri: this.state.selectedTrail.picture}} style={{width: 270, height: 270, borderRadius: 50}}/>
						<View>
						<Text style={{fontSize: 18, marginTop: 5}}> {this.state.selectedTrail.city}, CO </Text>
						</View>
						
						<Text style={{padding: 5, width: 270, marginTop: 5, backgroundColor: 'white'}}>Difficulty: {this.state.selectedTrail.difficulty}</Text>
						<Text style={{padding: 5, width: 270, marginTop: 5, backgroundColor: 'white'}}>Directions: {this.state.selectedTrail.directions}</Text>
						<Text style={{padding: 5, width: 270, marginTop: 5, backgroundColor: 'white'}}>Description: {this.state.selectedTrail.description}</Text>


						<View>
					  		<TouchableHighlight>
					  			<View style={{marginLeft:110, marginRight:110}}>
	
								</View>
							</TouchableHighlight>

						</View>

					</View>
					</ScrollView>
				</View>
				||
			<View style={styles.container}>
				<Text style={styles.description}>
					Find Your Path
				</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={(text) => this.filterSearch(text)}
					value={this.state.text}
					placeholder= " Search by City..."
					placeholderTextColor="black"
				/>
				<ScrollView>
				<ListView
					enableEmptySections={true}
					dataSource={this.state.dataSource}
					renderRow={(data) =>
						<View style={styles.rowContainer}>
							<View style={{flex: 1}}>
                				<Image source={{uri: data.picture}} style={{width: 40, height: 40, borderRadius: 20}} />
              				</View>
							<View style={{flex: 2, marginRight: 80}}>
								<Text stlye={styles.rowText} onPress={() => {this.rowClick(data)}}>{data.name}</Text>
								<Text style={styles.textDifficulty}> {data.difficulty} </Text>
							</View>
							<View style={{flex: 2}}>
								<Text style={styles.textCity}> {data.city}, CO</Text>
								<Text style={styles.textMiles}> {data.miles}</Text>
							</View>
						</View>
					}
					renderSeparator={(data) => <View key={data.city} style={styles.separator}/>}
					/>
					</ScrollView>
				</View>
				}
				</View>
			);
	}
}


module.exports = Trail;
