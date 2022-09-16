import {Observable} from "rxjs";
import React from "react";
import {Text, TextInput, View} from "react-native";
import CustomLoginScreen from "./components/CustomLoginScreen";

export const applyCustomCode = (externalCodeSetup: any) => {
	externalCodeSetup.navigationApi.replaceScreenComponent("LoginScreen", CustomLoginScreen);
};