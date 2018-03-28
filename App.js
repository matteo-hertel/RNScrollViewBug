import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollView: {
    borderColor: "transparent",
    borderBottomColor: "black",
    borderWidth: 1,
    flexGrow: 1,
    justifyContent: "space-around",
    flexDirection: "row"
  }
});

const App = props => {
  return (
    <View style={styles.container}>
      <ScrollView
        alwaysBounceHorizontal={false}
        contentContainerStyle={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Text>Item</Text>
        <Text>Item</Text>
        <Text>Item</Text>
      </ScrollView>
    </View>
  );
};
export default App;
