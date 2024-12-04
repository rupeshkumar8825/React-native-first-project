import React from "react";

// here we will be learning the react-native for this purpose 
// we will learn and then make some projects in order to get confidence and understand as well

// lot of react-native is built on the functionality of the react itself 
// this was done in order to make the web developers easy to make apps as well
import {
  View, /*This is same as div in the web */
  Text, 
  SafeAreaView
} from "react-native";


// defining the component of the app 
function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;

