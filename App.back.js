import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView 
      horizontal
      contentContainerStyle={styles.scrollView}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
            <Text>Item 3</Text>

      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    borderColor: 'transparent',
    borderBottomColor:"grey",
    borderWidth: 1,
    flexDirection:"row"
},
});
