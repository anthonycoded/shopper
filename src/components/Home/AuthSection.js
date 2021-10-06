import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";
import Button from "../Button";

const AuthSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Shopper</Text>
      <View style={styles.buttonContainer}>
        <Button
          text="Sign up"
          radius={7}
          height={25}
          width={100}
          background={theme.colors.inActive}
        ></Button>
        <Button
          text="Log-in"
          radius={7}
          height={25}
          width={100}
          background={theme.colors.inActive}
        ></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: config.wp("75%"),
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: config.hp("5%"),
  },
  container: {
    height: config.hp("25%"),
    alignItems: "center",
    paddingTop: config.hp("2"),
  },
});

export default AuthSection;
