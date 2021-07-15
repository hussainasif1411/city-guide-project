import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

//Header Page
const Header = (props) => {
    return (
        <View style={styles.header}>
            <View style={{ width: "10%" }}>
                <TouchableOpacity>
                    <Image style={styles.leftArrowIcon} source={require('../assets/left-arrow-icon.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ width: "80%" }}>
                <Text style={styles.headerText}>{props.heading}</Text>
            </View>
            <View style={{ width: "10%" }}>
                <TouchableOpacity>
                    <Image style={styles.searchIcon} source={require('../assets/Search_Icon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

//Styling Header Page
const styles = StyleSheet.create({
    header: {
        height: 90,
        width: "100%",
        backgroundColor: '#1E90FF',
        flexDirection: "row",
        alignItems: "center",
        padding: 20
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: "center"
    },
    leftArrowIcon: {
        height: 18,
        width: 25,
    },
    searchIcon: {
        // height: "40%",
        // width: "6%",
        height: 18,
        width: 25,
    },
});

export default Header;