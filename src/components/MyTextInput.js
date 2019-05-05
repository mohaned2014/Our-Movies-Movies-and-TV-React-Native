import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class MyTextInput extends Component {
  state = {
    color: "#BFC0C0"
  };
  onFocus = () => {
    this.setState({ color: "#02c39a" });
  };
  onBlur = () => {
    this.setState({
      color: "#BFC0C0"
    });
  };
  render() {
    return (
      <View style={[styles.inputContainer, { borderColor: this.state.color }]}>
        <MaterialCommunityIcons
          name={this.props.iconName || "email-outline"}
          style={[styles.icon, { color: this.state.color }]}
        />
        <TextInput
          value={this.props.value}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          placeholder={this.props.placeholder}
          style={styles.inputStyle}
          secureTextEntry={this.props.secureTextEntry || false}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    // flex: 1,
    // paddingHorizontal: 60,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#BFC0C0",
    borderBottomWidth: 2
  },
  icon: {
    fontSize: 30,
    fontWeight: "400",
    flex: 1,
    color: "#BFC0C0"
  },
  inputStyle: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingLeft: 10,
    marginBottom: 5,
    flex: 6,
    fontSize: 16
  }
});
