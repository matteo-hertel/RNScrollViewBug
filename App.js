import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Component from './Component';


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
});


const App = (props) => {
  return(
  <View style={styles.container}>
      <Component>
        <Text>Item</Text>
        <Text>Item</Text>
        <Text>Item</Text>
      </Component>
    </View>

  );
};
export default App;
