import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Linking } from "react-native";
import LoginScreen from "@src/containers/Custom/LoginScreen";
import AppButton from "@src/components/AppButton";
import { getExternalCodeSetup } from '@src/externalCode/externalRepo';

const externalCodeSetup = getExternalCodeSetup();

// console.log(LoginScreen.hideTitle);


const CustomLoginScreen = (props) => {
  // LoginScreen.hideTitle = true;
  // props.hid
  
  return <>
    <LoginScreen {...props} />
    <View style={styles.textcontainer}>
      <Text style={styles.text} onPress={() => Linking.openURL('https://google.com')}>掲載をご希望の方はこちら</Text>
    </View>
  </>
}

export default CustomLoginScreen;

const styles = StyleSheet.create({
  textcontainer: {
    // flex: 1,
    height: 60,
    // paddingTop: 5,
    // paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  text: {
    // flex: 1,
    height: 60,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
});