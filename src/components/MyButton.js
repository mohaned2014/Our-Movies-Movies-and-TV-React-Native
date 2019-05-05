import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
        <Text style={styles.fontStyle}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = {
  buttonStyle: {
    flexDirection: "column",
    width: "80%",
    backgroundColor: "#02c39a",
    borderColor: "#02c39a",
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 5
  },
  fontStyle: {
    color: "#ffffff",
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
    fontWeight: "600"
    // justifyContent: "center"
  }
};

export default MyButton;
