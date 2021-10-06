import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { config } from "../../config/Config";

const ForYouSection = () => {
  return (
    <View style={styles.container}>
      <Text>Picked just for you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    paddingTop: config.hp("1%"),
    paddingBottom: config.hp("2%"),
    height: 400,
  },
});

export default ForYouSection;
