import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SettingScreen from "./src/screens/SettingScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);
const MainTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      title: "Movies",
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons name={"movie"} size={30} color={tintColor} />
        )
      }
    },
    Setting: {
      screen: SettingScreen,
      title: "Setting",
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name={"settings"}
            size={30}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#02c39a"
    }
  }
);
const AppNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Main: {
      screen: MainTab
    }
  },
  {
    initialRouteName: "Login"
  }
);

const App = createAppContainer(AppNavigator);
export default App;
