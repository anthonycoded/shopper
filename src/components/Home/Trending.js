import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { config } from "../../config/Config";

const Trending = () => {
  return (
    <View style={styles.container}>
      <Text>Trending Right Now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    paddingTop: config.hp("1%"),
    paddingBottom: config.hp("2%"),
    height: 400,
  },
});

export default Trending;
