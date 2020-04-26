import React from "react";
import { Button } from "react-native";

const ButtonSubmit = (props) => {
  return (
    <Button
      title={props.titleValue}
      onPress={props.onPressHandler}
      style={props.styleValue}
    />
  );
};

export default ButtonSubmit;
