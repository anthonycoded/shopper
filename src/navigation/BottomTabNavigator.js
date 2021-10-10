import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { config } from "../config/Config";
import { theme } from "../config/Theme";

import HomeNavigator from "./MainNavigator";
import ProfileSettingsNavigator from "./ProfileSettingsNavigator";
import ExploreScreen from "../screens/ExploreScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        activeTintColor: theme.colors.primary,
        activeBackgroundColor: theme.colors.primary,
        inactiveTintColor: theme.colors.inActive,
        tabStyle: {
          backgroundColor: "#FFFFFF",
        },
        labelStyle: {
          fontSize: config.hp("1.75%"),
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="homeTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? theme.colors.primary : theme.colors.inActive,
                fontSize: 14,
              }}
            >
              Home
            </Text>
          ),
          tabBarColor: theme.colors.primary,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={focused ? 24 : 22}
              color={focused ? theme.colors.primary : theme.colors.inActive}
              backgroundColor={focused ? theme.colors.primary : "none"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? theme.colors.primary : theme.colors.inActive,
                fontSize: 14,
              }}
            >
              Explore
            </Text>
          ),
          tabBarColor: theme.colors.primary,
          tabBarIcon: ({ focused }) => (
            <Feather name="search" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="blank"
        component={HomeNavigator}
        options={{
          tabBarColor: "black",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? theme.colors.primary : theme.colors.inActive,
                fontSize: 14,
              }}
            >
              Rewards
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-star-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileSettingsNavigator}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? theme.colors.primary : theme.colors.inActive,
                fontSize: 14,
              }}
            >
              Profile
            </Text>
          ),
          tabBarColor: theme.colors.primary,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
