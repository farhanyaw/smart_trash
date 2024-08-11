import { View, Text } from "react-native";
import React from "react";

const FormField = ({ title, otherStyles }) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-white font-imedium">{title}</Text>
    </View>
  );
};

export default FormField;
