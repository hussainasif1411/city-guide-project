import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
//import { useNavigation } from "@react-navigation/core";

//const navigation = useNavigation();

const Footer = ({navigation}) => {
    return (

            <View style={styles.footer} >
                <View style={styles.seperateFoooterTab}>
                    <TouchableOpacity>
                        <Image style={styles.footerIcon} source={require('../assets/world-icon.jpeg')}></Image>
                        <Text style={styles.footerTabText}>Location</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.seperateFoooterTab}>
                    <TouchableOpacity onPress={() => navigation.navigate('BrowseCategories')}>
                        <Image style={styles.footerIcon} source={require('../assets/hamburger-menu-icon.png')}></Image>
                        <Text style={styles.footerTabText}>Browse</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.seperateFoooterTab}>
                    <TouchableOpacity>
                        <Image style={styles.footerIcon} source={require('../assets/heart.jpeg')}></Image>
                        <Text style={styles.footerTabText}>Favorites</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.seperateFoooterTab}>
                    <TouchableOpacity>
                        <Image style={styles.footerIcon} source={require('../assets/profile-icon.png')}></Image>
                        <Text style={styles.footerTabText}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        height: 80,
        backgroundColor: '#FBFCFC',
        flexDirection: "row",
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    footerIcon: {
        height: 30,
        width: 30,
    },
    seperateFoooterTab: {
        width: "25%",
        flexDirection: "column",
        opacity: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    footerTabText: {
        color: '#585858',
    }
});

export default Footer;