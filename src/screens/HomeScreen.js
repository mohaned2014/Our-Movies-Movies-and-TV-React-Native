import React, { Component } from "react";
import {
  View,
  RefreshControl,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
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
  state = {
    refreshing: false
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Our Movies",
      headerTintColor: "#fff",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        letterSpacing: 1.2
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

  _onRefresh = () => {
    this.setState({ refreshing: false });
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
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
    backgroundColor: "#141414"
  }
});
