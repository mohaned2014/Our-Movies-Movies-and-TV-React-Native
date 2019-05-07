import React, { Component } from "react";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  View
} from "native-base";
import { Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
export default class SearchBarExample extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Search",
      headerTintColor: "#02c39a",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center"
      },
      headerRightContainerStyle: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        paddingRight: 5
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.push("Search")}>
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
  };
  state = {
    value: ""
  };
  handleSearch = text => {
    this.setState({ value: text });
    if (this.state.value.length >= 3) {
      // fetch("")
    }
  };
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: "#02c39a" }}>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              value={this.state.value}
              onChangeText={this.handleSearch}
            />
            <FontAwesome
              name="tv"
              size={25}
              style={{ margin: 10, padding: 5 }}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}
