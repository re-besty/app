// import {Observable} from "rxjs";
import React from "react";
import {Text, TextInput, View} from "react-native";
import {NativeModules} from 'react-native'
import CustomLoginScreen from "./components/CustomLoginScreen";
import ShowMemberReview from "./components/ShowMemberReview";
import CustomMembersScreen from "./components/CustomMembersScreen";
import FilterRow from "./components/FilterRow";

// const {RNCustomCode} = NativeModules;

export const applyCustomCode = externalCodeSetup => {
  externalCodeSetup.navigationApi.replaceScreenComponent("LoginScreen", CustomLoginScreen);

  // externalCodeSetup.filterScreenApiHooks.setFilterComponent(props => {
  //   return <FilterRow {...props} />
  // })

  // externalCodeSetup.navigationApi.replaceScreenComponent("MembersScreen", CustomMembersScreen);
  // externalCodeSetup.navigationApi.replaceScreenComponent("ConnectionScreen", CustomMemberScreen);
  // externalCodeSetup.navigationApi.replaceScreenComponent("FriendsScreen", CustomMemberScreen);

  externalCodeSetup.profileScreenHooksApi.setAfterProfileHeader(props => {
      console.log(props);
      return <ShowMemberReview {...props} />
  }); 
};