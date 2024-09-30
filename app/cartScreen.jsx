import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import images from "../assets/images";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  let navigation = useNavigation();
  return (
    <View className=" pt-7  space-y-2">
      <View className=" px-5 flex-row justify-between items-center">
        <View>
          <Icon name="arrow-back-circle-sharp" size={34} color="#ff3131" />
        </View>
        <View className="flex-col justify-center items-center">
          <Text className="text-lg font-extrabold">Your Cart</Text>
          <Text className="font-semibold text-gray-600">Foodland</Text>
        </View>
        <View></View>
      </View>
      <View className="bg-secondary px-5 flex-row justify-between items-center">
        <View>
          <Image source={images.delivery} className="w-24 h-24" />
        </View>
        <View>
          <Text className="font-bold">Delivery in 20-30 minutes</Text>
        </View>
        <View>
          <Text className="font-bold text-primary">Change</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      ></ScrollView>
      <View className="p-5 space-y-2 bg-secondary rounded-xl">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold">Subtotal</Text>
          <Text className="font-bold text-gray-700">$10.00</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold">Delivery Fee</Text>
          <Text className="font-bold text-gray-700">$2.00</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold ">Order Total</Text>
          <Text className="font-extrabold">$12.00</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("orderScreen")}>
            <Text className="bg-primary text-white text-center py-2 rounded-full text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default CartScreen;
