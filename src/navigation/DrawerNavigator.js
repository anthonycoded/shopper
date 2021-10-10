import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerContent from "./DrawerContent";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../config/Theme";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "Threadly",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => console.log("shopping cart")}
          >
            <Fontisto name="shopping-bag-1" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Shopper"
        component={BottomTabNavigator}
        options={({ navigation }) => ({
          headerShown: true,
        })}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
