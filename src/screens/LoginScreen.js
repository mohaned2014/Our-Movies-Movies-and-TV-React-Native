import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { Constants } from "expo";
import TextLogo from "../components/TextLogo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";

export default class LoginScreen extends Component {
  state = { email: "", password: "" };
  handleEmailChange = email => {
    this.setState({ email });
  };
  handlePasswordChange = password => {
    this.setState({ password });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.logoContainer}>
          <TextLogo />
        </View>

        <View style={styles.formStyle}>
          <MyTextInput
            placeholder="email"
            iconName="email-outline"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />

          <MyTextInput
            placeholder="password"
            iconName="onepassword"
            secureTextEntry
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
          />
          <TouchableOpacity>
            <Text style={styles.textStyle}>Forgot password?</Text>
          </TouchableOpacity>
          <MyButton>LOGIN</MyButton>

          <View style={styles.rowInputContainer}>
            <Text style={[styles.rowInput]}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={[styles.rowInput, { color: "#02c39a" }]}>
                Signup here
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.textStyle}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Constants.statusBarHeight,
    width: Dimensions.get("window").width
  },
  textStyle: {
    padding: 15,
    color: "#02c39a",
    fontSize: 16
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    // paddingBottom: "10%"
  },

  formStyle: {
    flex: 2.5,
    alignItems: "center",
    width: "100%"
  },
  rowInputContainer: {
    padding: 10,
    flexDirection: "row"
  },
  rowInput: {
    fontSize: 16
  }
});
