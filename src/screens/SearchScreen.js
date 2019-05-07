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
import SearchCard from "../components/SearchCard";
export default class SearchBarExample extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Search",
      headerTintColor: "#ffffff",
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
      headerRight: <View />,
      headerStyle: {
        shadowColor: "transparent", //ios
        elevation: 0, //android
        borderColor: "#eec643",
        borderBottomWidth: 1,
        backgroundColor: "#141414"
      }
    };
  };
  state = {
    value: ""
  };
  handleSpaces = s => {
    s.replace(" ", "%20");
    return s;
  };
  handleSearch = async text => {
    this.setState({ value: text });
    if (text.length === 0) return [];
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=9778501916f7669fa647087905e68025&language=en-US&query=${this.handleSpaces(
          this.state.value
        )}&page=1&include_adult=false`
      );
      const res = await response.json();
      let results = await res.results;
      results = results.map(res => ({ ...res, name: res.title || res.name }));
      this.setState({ data: results });
    } catch {}
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#141414" }}>
        <Header searchBar rounded style={{ backgroundColor: "#eec643" }}>
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
        <SearchCard data={this.state.data} />
      </Container>
    );
  }
}
