import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Linking } from "react-native";
import LoginScreen from "@src/containers/Custom/LoginScreen";
import AppButton from "@src/components/AppButton";

const CustomLoginScreen = (props) => {
  return <View style={{flex: 1}}>
    <LoginScreen {...props} />
    <View style={styles.textcontainer}>
      <Text style={styles.text} onPress={() => Linking.openURL('https://re-besty.com/join')}>掲載をご希望の方はこちら</Text>
    </View>
  </View>
}

CustomLoginScreen.navigationOptions = {header: null};

export default CustomLoginScreen;

const styles = StyleSheet.create({
  textcontainer: {
    // flex: 1,
    height: 80,
    // paddingTop: 5,
    // paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#1E42DD',
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    // flex: 1,
    // height: 60,
    // alignSelf: 'stretch',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
});