import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Header = (props) => {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "#d6d0f2" }}>
      <View
        style={{ flex: 0.3, marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <FontAwesome name="bars" size={32} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5 }}>
        <Text></Text>
      </View>
      <View
        style={{
          flex: 0.1,
          alignContent: "flex-end",
          justifyContent: "center",
        }}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ height: 40, width: 40, marginLeft: 20 }} />
      </View>
    </View>
  );
};

export default Header;
