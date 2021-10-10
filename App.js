import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

import store from "./src/store/Store";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { config } from "./src/config/Config";
import { theme } from "./src/config/Theme";

import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
