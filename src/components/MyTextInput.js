import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class MyTextInput extends Component {
  state = {
    color: "#141414"
  };
  onFocus = () => {
    this.setState({ color: "#eec643" });
  };
  onBlur = () => {
    this.setState({
      color: "#ffffff"
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
          secureTextEntry={this.props.secureTextEntry || false}
          placeholder={this.props.placeholder}
          placeholderTextColor={"#141414"}
          style={styles.inputStyle}
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
    borderBottomWidth: 1,
    backgroundColor: "#ffffff"
  },
  icon: {
    fontSize: 25,
    fontWeight: "200",
    flex: 1,
    paddingLeft: 5,
    color: "#141414"
  },
  inputStyle: {
    height: 50,
    color: "#141414",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    marginBottom: 5,
    flex: 6,
    fontSize: 16
  }
});
