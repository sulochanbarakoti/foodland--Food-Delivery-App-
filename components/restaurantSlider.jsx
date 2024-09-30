import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import images from "../assets/images";

const RestaurantSlider = () => {
  const featuredRestaurants = [
    {
      id: "1",
      name: "Burger King",
      image: images.burgerKing,
      delivery: "With Free Delivery",
    },
    {
      id: "2",
      name: "Pizza Hut",
      image: images.pizzaHut,
      delivery: "Free Delivery Available",
    },
  ];
  return (
    <View>
      <FlatList
        data={featuredRestaurants}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="mr-4">
            <Image
              source={item.image}
              style={{
                width: 250,
                height: 150,
                borderRadius: 10,
              }}
            />
            <View className="absolute bottom-2 left-2">
              <Text className="text-white bg-black rounded-full text-center text-lg font-semibold">
                {item.name}
              </Text>
              <Text className="text-white">{item.delivery}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default RestaurantSlider;
