import React from "react";
import { TextInput } from "react-native";

const Textbox = (props) => {
  return (
    <TextInput
      secureTextEntry={props.secureText}
      style={props.textStyle}
      value={props.textValue}
      placeholder={props.placeHolderValue}
      onChangeText={props.onChangedTextHandler}
      keyboardType={props.keyBoardTypeValue}
    />
  );
};

export default Textbox;