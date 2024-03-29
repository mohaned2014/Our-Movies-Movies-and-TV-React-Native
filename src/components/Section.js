import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MovieCard from "./MovieCard";
export default class Section extends Component {
  state = {
    data: null,
    isFetching: false
  };

  componentWillMount() {
    this.updateData();
  }
  _keyExtractor = (item, index) => item.id.toString();

  updateData = async () => {
    const data = await this.props.APIData();
    this.setState({ data, isFetching: false });
  };

  onRefresh = () => {
    this.setState({ isFetching: true }, function() {
      this.updateData();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TitleStyle}>{this.props.title}</Text>
        {this.state.data && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={dataElement => (
              <MovieCard
                data={dataElement.item}
                navigation={this.props.navigation}
              />
            )}
          />
        )}
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
    marginLeft: 0,
    paddingLeft: 15,
    marginBottom: 5,
    backgroundColor: "#141414",
    borderColor: "#eec643",
    borderBottomWidth: 1,
    borderRadius: 5
  },
  TitleStyle: {
    fontSize: 20,
    fontWeight: "400",
    padding: 5,
    color: "#ffffff",
    letterSpacing: 1.2
  }
});
