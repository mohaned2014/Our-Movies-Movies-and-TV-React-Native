import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MovieCard from "./MovieCard";
export default class Section extends Component {
  state = {
    data: null
  };
  componentWillReceiveProps(newProps) {
    this.setState({ data: newProps.data });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TitleStyle}>{this.props.title}</Text>
        <ScrollView horizontal>
          {this.state.data &&
            this.state.data.map((dataElement, index) => (
              <MovieCard data={dataElement} key={index} />
            ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 285,
    padding: 5,
    margin: 10,
    marginBottom: 3,
    backgroundColor: "#FFFFFF",
    borderColor: "#ddd",
    borderWidth: 0.8,
    borderRadius: 10
  },
  TitleStyle: {
    fontSize: 20,
    fontWeight: "400",
    padding: 5,
    marginLeft: 5
  }
});
