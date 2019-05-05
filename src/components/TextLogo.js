import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
export default class TextLogo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.headerStyle]}>OU</Text>
        <Text style={[styles.headerStyle, { color: "#02c39a" }]}>R </Text>
        <Text style={[styles.headerStyle]}>MOVIE</Text>
        <Text style={[styles.headerStyle, { color: "#02c39a" }]}>S</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
    // flex: 1
  },

  headerStyle: {
    fontWeight: "600",
    fontSize: 40,
    letterSpacing: 1.5,
    textShadowRadius: 2,
    fontStyle: "italic"
  }
});
