import {Observable} from "rxjs";
import React from "react";
import {Text, TextInput, View} from "react-native";
import CustomLoginScreen from "./components/CustomLoginScreen";

export const applyCustomCode = externalCodeSetup => {
  externalCodeSetup.navigationApi.replaceScreenComponent("LoginScreen", CustomLoginScreen);

  // externalCodeSetup.profileScreenHooksApi.setAfterProfileHeader(
  //   props => {
  //     console.log(props);
  //     return <Text>showing user id after header, {props.user.id}</Text>
  //   }
  // ); 
};