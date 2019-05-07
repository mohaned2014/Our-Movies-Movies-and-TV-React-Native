import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MovieCard from "../components/MovieCard";

import Ionicons from "react-native-vector-icons/Ionicons";
import Section from "../components/Section";
import { ScrollView } from "react-native-gesture-handler";
import {
  getTrandingTVShows,
  getTrandingMovies,
  getTopRatedTVShows,
  getTopRatedMovies
} from "../API";

const data = [
  {
    title: "Trending Movies",
    APIData: getTrandingMovies
  },
  {
    title: "Trending TV Shows",
    APIData: getTrandingTVShows
  },
  {
    title: "Top Rated Movies",
    APIData: getTopRatedMovies
  },
  {
    title: "Top Rated TV Shows",
    APIData: getTopRatedTVShows
  }
];
export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Our Movies",
      headerTintColor: "#02c39a",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center"
      },
      headerLeft: <View />,
      headerRightContainerStyle: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        paddingRight: 5
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.push("Search")}>
          <Ionicons name={"ios-search"} size={30} color={"#02c39a"} />
        </TouchableOpacity>
      ),
      headerStyle: {
        shadowColor: "transparent", //ios
        elevation: 0, //android
        borderColor: "#02c39a",
        borderRadius: 5,
        borderBottomWidth: 1
      }
    };
  };

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {data.map((section, index) => (
          <Section
            title={section.title}
            APIData={section.APIData}
            navigation={this.props.navigation}
            key={index.toString()}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});
