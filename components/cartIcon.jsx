import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../context/cartContext";

const CartIcon = () => {
  let navigation = useNavigation();
  const { getTotalCart, getTotalAmount } = useContext(CartContext);
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        className="bg-primary mx-5 rounded-full p-4 flex-row justify-between items-center"
        onPress={() => navigation.navigate("cartScreen")}
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-semibold text-lg text-white">
            {getTotalCart()}
          </Text>
        </View>
        <View className="flex-row space-x-2">
          <Text className="font-semibold text-lg text-white">My Order</Text>
          <Icon name="fast-food" size={24} color="white" />
        </View>
        <Text className="font-semibold text-lg text-white">
          $ {getTotalAmount()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
