import React from 'react';
import { View, Text } from "react-native";
import MembersScreen from "@src/containers/Custom/MembersScreen";

const CustomMembersScreen = (props) => {
  // const { navigation } = props;
  // console.log(navigation?.state);

  return <View style={{flex: 1}}>
    <View style={{flex: 0.1}}>
      <Text>X: {props.navigation}</Text>
    </View>
    <View style={{flex: 0.9}}>
      <MembersScreen {...props} />
    </View>
  </View>
}

// CustomMembersScreen.navigationOptions = {
//   header: null
// }

export default CustomMembersScreen;
