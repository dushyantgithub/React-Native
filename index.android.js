import React, { Component } from 'react';
var styles = require('./Style.js');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Platform,
  Switch,
  AsyncStorage
} from 'react-native';
import Picker from 'react-native-picker';


let Data3 = [1,2,3];
let selectedValues3 = 2;
var b = 0;
let loop = [0,];
let selectedValues = 3;

for (var i=0;i < 5; i++)
{
  for(var j=1;j<=10; j++){

    b = (i*10 + j)/10;
     loop.push(b);

  }
}


var Application = React.createClass({

    componentDidMount: function() {
      AsyncStorage.getItem("saveValue").then((value) => {
          this.setState({"savedValue": value});
      }).done();
    },

    getInitialState: function(){
    return({

    });
    AsyncStorage.getItem("saveValue").then((value) => {
        this.setState({"savedValue": value});
    }).done();

    this.state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      display: false
    };
},

onPressHandle: function(){
    this.picker.toggle();
  },
  onState: function(value){
    this.setState({falseSwitchIsOn: value, display: true});
      this.picker3.toggle();
    },




    render: function() {
        return (

    <View style={styles.container}>

      <View style={{height: Dimensions.get('window').height}}>

            <TouchableOpacity style={styles.OpttionChoose} onPress={this.onPressHandle.bind(this)}>
					        <Text style={styles.saved}>Please Choose Option 1</Text>
				    </TouchableOpacity>



            <Text style={styles.saved}>
                {this.state.saveValue}
            </Text>
            <View>
                <TextInput
                    style={styles.formInput}
                    onChangeText={(text) => this.saveData(text)}
                    value={this.state.savedValue} />
            </View>
            <Text style={styles.instructions}>
                Type to Test
            </Text>
<View style={styles.OnOffSwitches}>
        <View style={styles.OnOff}>
          <Switch
          onValueChange={this.onState}
          onTintColor="#00ff00"
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.falseSwitchIsOn} />
        </View>

        <View style={styles.OnOff}>
          <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          onTintColor="#00ff00"
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.trueSwitchIsOn} />
        </View>

        <View style={styles.OnOff}>
          <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn2: value})}
          onTintColor="#00ff00"
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.falseSwitchIsOn2} />
        </View>
        <View style={styles.OnOff}>
          <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn2: value})}
          onTintColor="#00ff00"
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.trueSwitchIsOn2} />
        </View>
          </View>

          <Picker
            ref={picker3 => this.picker3 = picker3}
            style={{height: 320}}
            showDuration={300}
            pickerData={loop}
            selectedValue={selectedValues}
            onPickerDone={(pickedValue) => {}}
            />

           <Picker
	          ref={picker => this.picker = picker}
	          style={{height: 320}}
	          showDuration={300}
	          pickerData={Data3}
            selectedValue={selectedValues3}
	          onPickerDone={(pickedValue) => {}}
				    />




        </View>
      </View>
        );
    },

    saveData: function(value) {
        AsyncStorage.setItem("saveValue", value);
        this.setState({"savedValue": value});
    }

});


AppRegistry.registerComponent('Application', () => Application);
