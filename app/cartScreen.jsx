import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import images from "../assets/images";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../context/cartContext";
import { menuList } from "../data/data";

const CartScreen = () => {
  let navigation = useNavigation();
  const { getTotalCart, getTotalAmount, cartItems } = useContext(CartContext);
  const [orderItems, setOrderItems] = useState({});
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    let newOrderItems = [];
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        const food = menuList.find((i) => i.id === Number(key));
        if (food) {
          newOrderItems = [...newOrderItems, food];
        }
      }
    }
    setOrderItems(newOrderItems);
  }, [cartItems, menuList]);

  console.log(cartItems, orderItems);
  return (
    <View className=" pt-7  space-y-2">
      <View className=" px-5 flex-row justify-between items-center">
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-circle-sharp" size={34} color="#ff3131" />
          </TouchableOpacity>
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
      >
        <View>
          {orderItems.length > 0 ? (
            orderItems.map((item, index) => (
              <View
                key={index}
                className="mb-4 p-4 bg-gray-200 rounded-lg flex-row justify-between items-center"
              >
                <View>
                  <Image source={item.image} className="w-16 h-16 rounded-xl" />
                </View>
                <View>
                  <Text className="font-extrabold">Quantity</Text>
                  <Text></Text>
                </View>
                <View>
                  <Text className="text-lg font-bold">{item.name}</Text>
                  <Text className="text-sm text-gray-600">
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text className="p-5 h-96">No items in your order yet.</Text>
          )}
        </View>
      </ScrollView>
      <View className="p-5 space-y-2 bg-secondary rounded-xl">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold">Subtotal</Text>
          <Text className="font-bold text-gray-700">${getTotalAmount()}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold">Delivery Fee</Text>
          <Text className="font-bold text-gray-700">$2.00</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold ">Order Total</Text>
          <Text className="font-extrabold">
            ${Number(getTotalAmount()) + 2}
          </Text>
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
