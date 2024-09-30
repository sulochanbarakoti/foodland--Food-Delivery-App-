import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CartIcon = () => {
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity className="bg-primary mx-5 rounded-full p-4">
        <View className="px-4 rounded-full">
          <Text className="font-semibold text-lg text-white">3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
