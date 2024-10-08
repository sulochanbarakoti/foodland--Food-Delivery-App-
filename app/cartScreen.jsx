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
  const { getTotalCart, getTotalAmount, cartItems, removeFromCart } =
    useContext(CartContext);
  const [orderItems, setOrderItems] = useState({});

  useEffect(() => {
    let newOrderItems = [];
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        const food = menuList.find((i) => i.id === Number(key));
        if (food) {
          newOrderItems = [
            ...newOrderItems,
            { ...food, quantity: cartItems[key] },
          ];
        }
      }
    }
    setOrderItems(newOrderItems);
  }, [cartItems, menuList]);

  return (
    <View className="flex-1 bg-white">
      {/* Header Section */}
      <View className="pt-7 px-5 flex-row justify-between items-center">
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

      {/* Delivery Information */}
      <View className="bg-secondary px-5 flex-row justify-between items-center">
        <Image source={images.delivery} className="w-24 h-24" />
        <Text className="font-bold">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold text-primary">Change</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Food List */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }} // Ensures no overlap with the fixed total view
        showsVerticalScrollIndicator={false}
      >
        <View>
          {orderItems.length > 0 ? (
            orderItems.map((item, index) => (
              <View
                key={index}
                className="p-4 bg-gray-200 rounded-lg flex-row justify-between items-center"
              >
                <Image source={item.image} className="w-16 h-16 rounded-xl" />
                <View>
                  <Text className="font-extrabold">
                    Quantity: {item.quantity}
                  </Text>
                </View>
                <View>
                  <Text className="text-lg font-bold">{item.name}</Text>
                  <Text className="text-sm text-gray-600">
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Text>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text className="p-5 h-96">No items in your order yet.</Text>
          )}
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 p-5 bg-secondary rounded-t-xl space-y-2">
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
