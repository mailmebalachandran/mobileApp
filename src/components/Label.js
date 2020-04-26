import React from "react";
import { Text } from "react-native";

const Label = (props) => {
  return <Text style={props.styleValue}>{props.textValue}</Text>;
};

export default Label;
