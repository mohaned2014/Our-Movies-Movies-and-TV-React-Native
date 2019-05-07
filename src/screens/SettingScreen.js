import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Comp extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
