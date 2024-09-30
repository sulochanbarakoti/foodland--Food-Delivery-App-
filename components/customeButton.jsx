import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomeButton = ({ title, width }) => {
  return (
    <View className={`bg-primary rounded-xl ${width} items-center`}>
      <TouchableOpacity>
        <Text className="m-4 text-white font-bold text-xl">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomeButton;
