import React from 'react';
import AppRoute from './routes/AppRoutes';

const App = () => {
  return(
    //Routes for the pages of app
    <AppRoute />
  )
}
export default App;


// import React from "react";
// import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

// const App = () => {
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image style={styles.leftArrowIcon} source={require('./assets/left-arrow-icon.png')} />
//         <Text style={styles.headerText}>Browse restaurants</Text>
//         <Image style={styles.searchIcon} source={require('./assets/Search_Icon.png')} />
//       </View>

//       <View style={{ flexDirection: "row", padding: 20, height: "10%" }}>
//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={require('./assets/pizza.jpg')} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>Gramercy Tavern</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/location.jpg')} />
//               <Text style={styles.locationText}>42 E 20th St</Text>
//               <Image style={styles.heartIcon} source={require('./assets/heart.jpeg')} ></Image>
//               <Text style={styles.liketext}>228</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={require('./assets/right-arrow.jpeg')}></Image>
//         </View>



//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />


//       <View style={{ flexDirection: "row", padding: 20, height: "10%" }}>
//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={require('./assets/pasta.png')} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>The Four Seasons</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/location.jpg')} />
//               <Text style={styles.locationText}>99 E 52nd St</Text>
//               <Image style={styles.heartIcon} source={require('./assets/heart.jpeg')} ></Image>
//               <Text style={styles.liketext}>22855</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={require('./assets/right-arrow.jpeg')}></Image>
//         </View>
//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />

//       <View style={{ flexDirection: "row", padding: 20, height: "10%" }}>
//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={require('./assets/burger.jpg')} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>Blue Hill</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/location.jpg')} />
//               <Text style={styles.locationText}>75 Washington PI</Text>
//               <Image style={styles.heartIcon} source={require('./assets/heart.jpeg')} ></Image>
//               <Text style={styles.liketext}>215</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={require('./assets/right-arrow.jpeg')}></Image>
//         </View>
//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />

//       <View style={{ flexDirection: "row", padding: 20, height: "10%" }}>
//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={require('./assets/pasta.png')} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>Le Bernardin</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/location.jpg')} />
//               <Text style={styles.locationText}>155 W 51th St</Text>
//               <Image style={styles.heartIcon} source={require('./assets/heart.jpeg')} ></Image>
//               <Text style={styles.liketext}>199</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={require('./assets/right-arrow.jpeg')}></Image>
//         </View>



//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />

//       <View style={{ flexDirection: "row", padding: 20, height: "10%" }}>
//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={require('./assets/pizza.jpg')} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>Jean-Georges</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/location.jpg')} />
//               <Text style={styles.locationText}>1 Central Park West</Text>
//               <Image style={styles.heartIcon} source={require('./assets/heart.jpeg')} ></Image>
//               <Text style={styles.liketext}>183</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={require('./assets/right-arrow.jpeg')}></Image>
//         </View>



//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />

//       <View style={{ flexDirection: "row", padding: 20, height: "10%" }}>
//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={require('./assets/burger.jpg')} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>Ninja New York</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/location.jpg')} />
//               <Text style={styles.locationText}>25 Hudson St</Text>
//               <Image style={styles.heartIcon} source={require('./assets/heart.jpeg')} ></Image>
//               <Text style={styles.liketext}>78</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={require('./assets/right-arrow.jpeg')}></Image>
//         </View>



//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />

// <View style={{ flexDirection: "row", padding: 20, height: "10%" }}>
//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={require('./assets/burger.jpg')} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>Ninja New York</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/location.jpg')} />
//               <Text style={styles.locationText}>25 Hudson St</Text>
//               <Image style={styles.heartIcon} source={require('./assets/heart.jpeg')} ></Image>
//               <Text style={styles.liketext}>78</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={require('./assets/right-arrow.jpeg')}></Image>
//         </View>



//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />

// <View style={{ flexDirection: "row", padding: 20, height: "10%" }}>
//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={require('./assets/burger.jpg')} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>Ninja New York</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/location.jpg')} />
//               <Text style={styles.locationText}>25 Hudson St</Text>
//               <Image style={styles.heartIcon} source={require('./assets/heart.jpeg')} ></Image>
//               <Text style={styles.liketext}>78</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={require('./assets/right-arrow.jpeg')}></Image>
//         </View>



//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />


// <View style={{ flexDirection: "row", padding: 20, height: "10%" }}>
//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={require('./assets/burger.jpg')} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>Ninja New York</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/location.jpg')} />
//               <Text style={styles.locationText}>25 Hudson St</Text>
//               <Image style={styles.heartIcon} source={require('./assets/heart.jpeg')} ></Image>
//               <Text style={styles.liketext}>78</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={require('./assets/right-arrow.jpeg')}></Image>
//         </View>



//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />

//     </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   header: {
//     height: "10%",
//     width: "100%",
//     backgroundColor: '#1E90FF',
//     flexDirection: "row",
//     alignItems: "center"
//   },
//   headerText: {
//     color: '#FFFFFF',
//     marginLeft: 70,
//     fontSize: 18
//   },
//   leftArrowIcon: {
//     height: "40%",
//     width: "6%",
//     marginLeft: 15,
//     marginTop: 7
//   },
//   searchIcon: {
//     height: "40%",
//     width: "6%",
//     marginLeft: 55,
//     marginTop: 5
//   },
//   restaurantHeading: {
//     flexDirection: "row"
//   },
//   restaurantImage: {
//     height: "130%",
//     width: "100%",
//     borderRadius: 5
//   },
//   restaurantText: {
//     marginLeft: 10,
//     fontSize: 16
//   },
//   rightArrow: {
//     height: 12,
//     width: 12,
//     marginTop: 20,
//   },
//   gpsIcon: {
//     height: 20,
//     width: 20,
//   },
//   locationText: {
//     color: '#A9A9A9'
//   },
//   heartIcon: {
//     height: 18,
//     width: 18,
//     marginLeft: 10
//   },
//   liketext: {
//     color: '#A9A9A9'
//   },
// });

// export default App;
