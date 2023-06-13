import React from 'react';

import Header from "./components/Header"
import Body from "./components/Body"

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

function Index(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
      <SafeAreaView style={backgroundStyle}>

        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <Body />

        </ScrollView>
      </SafeAreaView>
    );
  }
  
  export default Index;