import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    borderColor: 'transparent',
    borderBottomColor: "black",
    borderWidth: 1,
    flexGrow:1,
    justifyContent: "space-around",
    flexDirection: 'row',
  },
});

const Component = (props) => {
  const {
    children,
  } = props;

  return (
    <ScrollView
      alwaysBounceHorizontal={false}
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      { children }
    </ScrollView>
  );
};

export default Component;
