import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const PopularCategory = () => {
  const popularCategories = [
    { id: "1", name: "Burger", icon: "fast-food-outline" },
    { id: "2", name: "Pizza", icon: "pizza-outline" },
    { id: "3", name: "Chicken", icon: "restaurant-outline" },
    { id: "4", name: "Seafood", icon: "fish-outline" },
    { id: "5", name: "Ice Cream", icon: "ice-cream-outline" },
    { id: "6", name: "Coffee", icon: "cafe-outline" },
  ];
  return (
    <View>
      <Text className="text-lg font-semibold mt-6 mb-2">Popular Category</Text>
      <Text className="text-sm text-gray-500 mb-4">
        Choose your goods from here
      </Text>
      <View className="flex flex-wrap flex-row justify-between">
        {popularCategories.map((category) => (
          <View key={category.id} className="items-center mb-3">
            <View className="w-24 h-24 rounded-full bg-gray-100 justify-center items-center mb-2">
              <Icon name={category.icon} size={24} color="#f43f5e" />
            </View>
            <Text className="text-gray-700">{category.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PopularCategory;
