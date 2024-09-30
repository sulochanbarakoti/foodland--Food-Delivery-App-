import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import images from "../assets/images";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  let navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("deliveryScreen");
    }, 3000);
  });
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={images.deliveryBoy} className="h-80 w-full" />
    </View>
  );
};

export default OrderScreen;
