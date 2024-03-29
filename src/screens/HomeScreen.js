import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ForYouSection from "../components/Home/ForYouSection";
import Trending from "../components/Home/Trending";
import Womans from "../components/Home/Womans";
import AuthSection from "../components/Home/AuthSection";

import { config } from "../config/Config";
import { theme } from "../config/Theme";
import Mens from "../components/Home/Mens";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <AuthSection config={config}></AuthSection>
      <Womans></Womans>
      <Mens></Mens>
      <ForYouSection></ForYouSection>
      <Trending></Trending>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: config.hp("1%"),
    paddingBottom: config.hp("2%"),
  },
});

export default HomeScreen;
