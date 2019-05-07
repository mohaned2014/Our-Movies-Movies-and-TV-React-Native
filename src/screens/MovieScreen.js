import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default class MovieScreen extends Component {
  componentWillReceiveProps(newProps) {
    this.setState({ data: newProps.data });
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center"
      },
      headerRightContainerStyle: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        paddingRight: 5
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.push("Search")}>
          <Ionicons name={"ios-search"} size={30} color={"#eec643"} />
        </TouchableOpacity>
      ),
      headerStyle: {
        shadowColor: "transparent", //ios
        elevation: 0, //android
        borderColor: "#eec643",
        borderBottomWidth: 1,
        backgroundColor: "#141414"
      }
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam("title")}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
