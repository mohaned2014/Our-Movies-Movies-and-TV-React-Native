import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Left, Body } from "native-base";

export default class MovieCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push("Movie", this.props.data)}
      >
        <Card style={styles.container}>
          <CardItem cardBody>
            <Image
              resizeMode={"stretch"}
              source={{
                uri:
                  "https://image.tmdb.org/t/p/w92/" +
                  this.props.data.poster_path
              }}
              style={styles.imageStyle}
            />
          </CardItem>
          <CardItem style={styles.textContainer}>
            <Text
              ellipsizeMode={"tail"}
              numberOfLines={3}
              style={styles.titleStyle}
            >
              {this.props.data.title}
            </Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 225,
    width: 150,
    padding: 3,
    margin: 7,
    borderRadius: 5,
    backgroundColor: "#eec643"
  },
  imageStyle: {
    height: 150,
    width: null,
    flex: 1
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: "#ffffff"
    // alignSelf: "center"
  },
  textContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#141414"
  }
});
