import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import womansFall from "../../../assets/womans-fall.jpg";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";
import Button from "../Button";

const Womans = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={womansFall}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Womans Fall Fashion</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Shop Womans"
            fontSize={18}
            background={theme.colors.primary}
            height={50}
            width={150}
            radius={7}
          ></Button>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "green",
    height: 600,
    marginBottom: 25,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: config.hp("2%"),
    paddingHorizontal: config.wp("2%"),
    marginBottom: 200,
  },
});

export default Womans;
