import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Image style={styles.leftArrowIcon} source={require('../assets/left-arrow-icon.png')} />
            <Text style={styles.headerText}>{props.heading}</Text>
            <Image style={styles.searchIcon} source={require('../assets/Search_Icon.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: "10%",
        width: "100%",
        backgroundColor: '#1E90FF',
        flexDirection: "row",
        alignItems: "center"
    },
    headerText: {
        color: '#FFFFFF',
        marginLeft: 70,
        fontSize: 18
    },
    leftArrowIcon: {
        height: "40%",
        width: "6%",
        marginLeft: 15,
        marginTop: 7
    },
    searchIcon: {
        height: "40%",
        width: "6%",
        marginLeft: 55,
        marginTop: 5
    },
});

export default Header;