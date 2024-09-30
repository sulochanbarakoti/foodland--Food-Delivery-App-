import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import Iconentypo from "react-native-vector-icons/Entypo";

const FoodList = ({ menu }) => {
  return (
    <View>
      {menu.map((item) => (
        <View
          key={item.id}
          className="flex-row justify-between items-center bg-gray-50 p-4 mb-4 rounded-lg shadow"
        >
          <Image
            source={item.image}
            style={{ width: 80, height: 80, borderRadius: 10 }}
          />
          <View className="flex-1 ml-4">
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text className="text-gray-500">{item.restaurant}</Text>
            <View className="flex-row justify-between items-center mt-1">
              <View className="flex-row items-center">
                <Text className="text-lg font-bold">{item.price}</Text>
                <Text className="text-sm text-gray-400 line-through ml-2">
                  {item.oldPrice}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon name="star" size={14} color="orange" />
                <Text className="text-gray-500">{item.rating}</Text>
              </View>
            </View>
            <View className="flex-row justify-start items-center space-x-2 text-gray-500">
              <Iconentypo name="time-slot" size={14} color="#ff3131" />
              <Text>{item.time}</Text>
            </View>
            {/* <Text className="text-sm text-gray-500">{item.time}</Text> */}
          </View>
          {/* <TouchableOpacity className="bg-red-500 p-2 rounded-full">
            <Text className="text-white">Order</Text>
          </TouchableOpacity> */}
        </View>
      ))}
    </View>
  );
};

export default FoodList;
