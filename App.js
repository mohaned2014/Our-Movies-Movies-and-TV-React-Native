import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";
const AppNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen,
      title: "Our Movies"
    },
    Main: {
      screen: MainScreen,
      title: "Our Movies"
    }
  },
  {
    initialRouteName: "Login"
  }
);

const App = createAppContainer(AppNavigator);
export default App;
