import React from "react";
import { Image, Text, useColorScheme, View } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Styles from "./styles"

const image = require("../../assets/gabz-picture.jpg")

function Header(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View>
            <View style={Styles.headerContainer}>
                <Text style={Styles.headerTitleText}>Gabriel "Gabz" Todaro</Text>
                <Text style={Styles.headerSubtitleText}>iOS Developer</Text>
            </View>
            <Image style={Styles.headerImage} source={image}></Image>
        </View>
    )
}

export default Header;