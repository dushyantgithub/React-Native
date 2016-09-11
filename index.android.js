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
var savePicker = [];


var Application = React.createClass({

    componentDidMount: function() {
      AsyncStorage.getItem("saveValue").then((value) => {
          this.setState({"savedValue": value});
      }).done();
      AsyncStorage.getItem("savePicker").then((value) => {
          this.setState({"savedPicker": value});
      }).done();
      AsyncStorage.getItem("savePicker2").then((value) => {
          this.setState({"savedPicker2": value});
      }).done();
    },

    getInitialState: function(){
    return({

    });


    this.state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      display: false,
      stateofpicker: false
    };

},

onPressHandle: function(){
    this.picker.toggle();
  },
  onState: function(value){
    this.setState({falseSwitchIsOn: value, display: true,});
    this.picker3.toggle();
    },



    render: function() {
        return (

    <View style={styles.container}>

      <View style={{height: Dimensions.get('window').height}}>
        <View style={styles.TapPortion}>
        <View style={styles.Tap1}>
            <TouchableOpacity style={styles.OpttionChoose} onPress={this.onPressHandle.bind(this)}>
					        <Text style={styles.saved}>Tap to Select</Text>
				    </TouchableOpacity>
        </View>
        <View style={styles.Tap2}>
            <Text style={styles.output1}>
                Selection: {this.state.savedPicker}
            </Text>
        </View>
      </View>
      <View style={styles.Portion2}>
        <View style={styles.text1}>
            <Text style={styles.saved}>
                {this.state.savedValue}
            </Text>
        </View>
                <TextInput
                    style={styles.formInput}
                    onChangeText={(text) => this.saveData(text)}
                    value={this.state.savedValue} />

                  <Text style={styles.saved}>
                Type above to Test
            </Text>
      </View>
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
<View style={styles.pickervalue}>
  <Text style={styles.leftalign}>
      Selection:
  </Text>
  <Text style={styles.rightalign}>
{this.state.savedPicker2}
  </Text>
</View>
          <Picker
            ref={picker3 => this.picker3 = picker3}
            style={{height: 320}}
            showDuration={300}
            pickerData={loop}
            selectedValue={selectedValues}
            onPickerDone={(text) => {this.saveData2(text)}}
            />

           <Picker
	          ref={picker => this.picker = picker}
	          style={{height: 320}}
	          showDuration={300}
	          pickerData={Data3}
            selectedValue={savePicker}
	          onPickerDone={(text) => {this.saveData1(text)}}
				    />




        </View>
      </View>
        );
    },

    saveData: function(value) {
        AsyncStorage.setItem("saveValue", value);
        this.setState({"savedValue": value});

        AsyncStorage.setItem("savePicker", pickedValue);
        this.setState({"savedPicker": pickedValue});

    },
    saveData1: function(value) {

        AsyncStorage.setItem("savePicker", value);
        this.setState({"savedPicker": value});

    },
    saveData2: function(value) {

        AsyncStorage.setItem("savePicker2", value);
        this.setState({"savedPicker2": value});

    }

});


AppRegistry.registerComponent('Application', () => Application);
