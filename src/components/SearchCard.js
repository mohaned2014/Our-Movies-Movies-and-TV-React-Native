import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class SearchCard extends Component {
  state = {
    data: null
  };
  renderEle = elementIn => {
    element = elementIn.item;
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyle}
          resizeMode={"cover"}
          source={{
            uri: "https://image.tmdb.org/t/p/w92/" + element.poster_path
          }}
        />
        <View style={styles.dataStyle}>
          <Text style={styles.titleStyle}>{element.name}</Text>
          <Text style={styles.subTitleStyle}>
            {element.media_type === "movie" && element.release_date + "  |  "}
            {element.media_type}
          </Text>
          <Text
            ellipsizeMode={"tail"}
            numberOfLines={1}
            style={styles.subTitleStyle}
          >
            {element.media_type !== "person" && element.overview}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <View>
        {this.props.data && (
          <FlatList
            data={this.props.data}
            keyExtractor={this._keyExtractor}
            renderItem={ele => this.renderEle(ele)}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    padding: 8,
    flexDirection: "row",
    borderColor: "#eec643",
    borderBottomWidth: 1
  },
  titleStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "300",
    letterSpacing: 1.2
  },
  subTitleStyle: {
    color: "#ddd",
    fontSize: 12,
    fontWeight: "100"
  },
  imageStyle: {
    height: 85,
    width: 47
  },
  dataStyle: {
    paddingLeft: 20,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap"
  },
  imageContainer: {}
});
