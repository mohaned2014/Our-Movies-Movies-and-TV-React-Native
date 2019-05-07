import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MovieCard from "../components/MovieCard";

import Ionicons from "react-native-vector-icons/Ionicons";
import Section from "../components/Section";
import { ScrollView } from "react-native-gesture-handler";
import fetchTrendingMovies from "../API";
export default class HomeScreen extends Component {
  static navigationOptions = {
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
      <TouchableOpacity>
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
  state = {
    trendingMovies: null,
    trendingTVShows: null,
    topRatedMovies: null,
    topRatedTVShows: null,
    popularPeople: null
  };
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=9778501916f7669fa647087905e68025"
    )
      .then(respone => respone.json())
      .then(({ results }) => {
        this.setState({ trendingMovies: results });
      });

    fetch(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=9778501916f7669fa647087905e68025"
    )
      .then(respone => respone.json())
      .then(({ results }) => {
        results = results.map(res => ({ ...res, title: res.name }));
        this.setState({ trendingTVShows: results });
      });
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9778501916f7669fa647087905e68025&language=en-US&page=1"
    )
      .then(response => response.json())
      .then(({ results }) => {
        this.setState({ topRatedMovies: results });
      });
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=9778501916f7669fa647087905e68025&language=en-US&page=1"
    )
      .then(response => response.json())
      .then(({ results }) => {
        results = results.map(res => ({ ...res, title: res.name }));
        this.setState({ topRatedTVShows: results });
      });
    fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=9778501916f7669fa647087905e68025&language=en-US&page=1"
    )
      .then(response => response.json())
      .then(({ results }) => {
        results = results.map(res => ({
          ...res,
          poster_path: res.profile_path,
          title: res.name
        }));

        this.setState({ popularPeople: results });
      });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Section title="Tending Movies" data={this.state.trendingMovies} />
        <Section title="Topular TV Shows" data={this.state.trendingTVShows} />
        <Section title="Top Rated Movies" data={this.state.topRatedMovies} />
        <Section title="Top Rated TV Shows" data={this.state.topRatedTVShows} />
        <Section title="Popular People" data={this.state.popularPeople} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6"
  }
});
