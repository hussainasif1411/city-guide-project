import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

const BrowseCategories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header heading="Browse Categories" />
      <ScrollView>

        <View style={styles.browseCategoryRowFlex}>
          <View style={styles.columnViewStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('BrowseRestaurant') }>
              <Image style={styles.browseImageIcon} source={require('../assets/restaurant-icon.png')} />
              <Text style={styles.categoriesText}>Restaurants</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.columnViewStyle}>
            <TouchableOpacity>
              <Image style={styles.browseImageIcon} source={require('../assets/hotel-icon.jpg')} />
              <Text style={styles.categoriesText}>Hotels</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.browseCategoryRowFlex}>
          <View style={styles.columnViewStyle}>
            <TouchableOpacity>
              <Image style={styles.browseImageIcon} source={require('../assets/nightlife-icon.jpg')} />
              <Text style={styles.categoriesText}>Nightlife</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.columnViewStyle}>
            <TouchableOpacity>
              <Image style={styles.browseImageIcon} source={require('../assets/shopping-icon.png')} />
              <Text style={styles.categoriesText}>Shopping</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.browseCategoryRowFlex}>
          <View style={styles.columnViewStyle}>
            <TouchableOpacity>
              <Image style={styles.browseImageIcon} source={require('../assets/culture-icon.png')} />
              <Text style={styles.categoriesText}>Culture</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.columnViewStyle}>
            <TouchableOpacity>
              <Image style={styles.browseImageIcon} source={require('../assets/heart-icon-blue.png')} />
              <Text style={styles.categoriesText}>Popular</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  browseCategoryRowFlex:
  {
    flexDirection: "row",
    paddingHorizontal: 40,
    marginTop: 20,
    justifyContent: "center",
  },
  columnViewStyle: {
    width: "50%",
    //height: "120%",
    backgroundColor: "#FDFEFE",
    paddingVertical: 20,
    marginLeft: 10,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 5,
  },
  browseImageIcon: {
    width: 80,
    height: 80,
  },
  categoriesText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 15
  }
});

export default BrowseCategories;