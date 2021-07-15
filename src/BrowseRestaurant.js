import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

const datas = [
  {
    id: 1,
    restaurantImageSource: require('../assets/pizza.jpg'),
    restaurantName: "Gramercy Tavern",
    gpsSource: require('../assets/location.jpg'),
    locationName: "42 E 20th St",
    heartIconSource: require('../assets/heart.jpeg'),
    likesText: "228",
    rightArrowSource: require('../assets/right-arrow.jpeg')
  },
  {
    id: 2,
    restaurantImageSource: require('../assets/burger.jpg'),
    restaurantName: "Blue Hill",
    gpsSource: require('../assets/location.jpg'),
    locationName: "75 Washington PI",
    heartIconSource: require('../assets/heart.jpeg'),
    likesText: "215",
    rightArrowSource: require('../assets/right-arrow.jpeg')
  },
  {
    id: 3,
    restaurantImageSource: require('../assets/pasta.png'),
    restaurantName: "Le Bernardin",
    gpsSource: require('../assets/location.jpg'),
    locationName: "155 W 51st St",
    heartIconSource: require('../assets/heart.jpeg'),
    likesText: "199",
    rightArrowSource: require('../assets/right-arrow.jpeg')
  },
  {
    id: 4,
    restaurantImageSource: require('../assets/french-fries.jpg'),
    restaurantName: "Jean-Georges",
    gpsSource: require('../assets/location.jpg'),
    locationName: "1 Central Park West",
    heartIconSource: require('../assets/heart.jpeg'),
    likesText: "183",
    rightArrowSource: require('../assets/right-arrow.jpeg')
  },
  {
    id: 5,
    restaurantImageSource: require('../assets/brownie.jpg'),
    restaurantName: "The Four Seasons",
    gpsSource: require('../assets/location.jpg'),
    locationName: "99 E 52md St",
    heartIconSource: require('../assets/heart.jpeg'),
    likesText: "178",
    rightArrowSource: require('../assets/right-arrow.jpeg')
  },
  {
    id: 6,
    restaurantImageSource: require('../assets/sandwich.jpeg'),
    restaurantName: "Ninja New York",
    gpsSource: require('../assets/location.jpg'),
    locationName: "25 Hudson St",
    heartIconSource: require('../assets/heart.jpeg'),
    likesText: "78",
    rightArrowSource: require('../assets/right-arrow.jpeg')
  },
];

function createData(data) {
  return (
    <View>
      <View style={styles.restaurantRowStyle}>

        <View style={{ width: "20%" }}>
          <Image style={styles.restaurantImage} source={data.restaurantImageSource} />
        </View>

        <View style={{ width: "70%", marginTop: 5 }}>
          <Text style={styles.restaurantText}>{data.restaurantName}</Text>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
              <Image style={styles.gpsIcon} source={data.gpsSource} />
              <Text style={styles.locationText}>{data.locationName}</Text>
              <Image style={styles.heartIcon} source={data.heartIconSource} ></Image>
              <Text style={styles.liketext}>{data.likesText}</Text>
            </View>
          </View>
        </View>

        <View style={{ width: "10%" }}>
          <Image style={styles.rightArrow} source={data.rightArrowSource}></Image>
        </View>

      </View>

      <View
        style={{
          borderBottomColor: '#A9A9A9',
          borderBottomWidth: 0.4,
          marginTop: 5
        }}
      />
    </View>
  )
}

const BrowseRestaurants = () => {
  return (

    <View style={styles.container}>
      <Header heading="Browse Restaurants"/>
      <ScrollView>
        {datas.map(createData)}
      </ScrollView>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  restaurantRowStyle: {
    flex: 1,
    flexDirection: "row",
    padding: 20, height: "10%"
  },
  restaurantHeading: {
    flexDirection: "row"
  },
  restaurantImage: {
    height: "130%",
    width: "100%",
    borderRadius: 5
  },
  restaurantText: {
    marginLeft: 10,
    fontSize: 16
  },
  rightArrow: {
    height: 12,
    width: 12,
    marginTop: 20,
  },
  gpsIcon: {
    height: 20,
    width: 20,
  },
  locationText: {
    color: '#A9A9A9'
  },
  heartIcon: {
    height: 18,
    width: 18,
    marginLeft: 10
  },
  liketext: {
    color: '#A9A9A9'
  }
});

export default BrowseRestaurants;