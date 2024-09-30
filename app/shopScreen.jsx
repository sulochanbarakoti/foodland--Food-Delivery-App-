import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import RecommendedDishes from "../components/recommendedDishes";
import { useNavigation, useRoute } from "@react-navigation/native";
import images from "../assets/images";
import CartIcon from "../components/cartIcon";

const ShopScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  console.log(params);
  return (
    <View>
      <CartIcon />
      <ScrollView className="bg-white">
        {/* Image with Black Overlay */}
        <ImageBackground
          source={images.foodBg} // Replace with your image
          className="w-full h-48 relative"
        >
          <View className="absolute inset-0 bg-black opacity-50" />

          <View className="absolute top-3 left-0 p-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-white p-1 rounded-full"
            >
              <Icon name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="absolute top-3 right-0 p-4">
            <Icon name="heart-outline" size={24} color="white" />
          </View>
          {/* Restaurant Information */}
          <View className="flex justify-center items-center absolute top-16 left-14">
            <Text className="text-white text-2xl font-bold">
              {item.restaurant}
            </Text>
            <Text className="text-white">Get 50% Offer</Text>
          </View>

          {/* Time and Delivery Information */}
          <View className="absolute bottom-4 left-5 flex-row items-center">
            <View className="bg-red-500 px-2 py-1 rounded-full">
              <Text className="text-white text-sm">{item.time}</Text>
            </View>
            <Text className="text-white ml-3">4.9 (100 reviews)</Text>
          </View>
        </ImageBackground>
        <Image source={item.image} className=" w-[90%] h-48 rounded-lg m-5" />
        {/* Product Details */}
        <View className="px-5 ">
          <Text className="text-xl font-bold">{item.name}</Text>
          <View className="flex-row items-center justify-between mt-2">
            <View className="flex-row justify-center items-center space-x-2">
              <Text className="text-red-500 text-lg">{item.price}</Text>
              <Text className="line-through text-gray-500">
                {item.oldPrice}
              </Text>
            </View>

            {/* Favorite & Quantity */}
            <View className="flex-row items-center">
              <TouchableOpacity>
                <Text className="text-pink-500 text-2xl mx-3">-</Text>
              </TouchableOpacity>
              <View className="flex-row items-center">
                <Text className="text-lg px-2">05</Text>
                <TouchableOpacity>
                  <Text className="text-red-500 text-2xl">+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* Description Section */}
        <View className="px-5">
          <Text className="text-lg font-semibold mb-2">Descriptions</Text>
          <Text className="text-gray-700 leading-6">
            Selecting the cookware for your kitchen implies a few certain points
            you should consider: budget, cooking and eating habits, your family
            size, etc. One of the most essential points in choosing cookware is
            the material it is made of...
          </Text>
        </View>
        {/* Popular Tags */}
        <View className="px-5 mt-4">
          <Text className="text-lg font-semibold mb-2">Popular Tags</Text>
          <View className="flex-row flex-wrap">
            <View className="bg-gray-200 py-1 px-2 rounded-full mr-2 mb-2">
              <Text className="text-gray-600">Food</Text>
            </View>
            <View className="bg-gray-200 py-1 px-2 rounded-full mr-2 mb-2">
              <Text className="text-gray-600">Popular</Text>
            </View>
            <View className="bg-gray-200 py-1 px-2 rounded-full mr-2 mb-2">
              <Text className="text-gray-600">Fresh</Text>
            </View>
          </View>
        </View>
        {/* Social Share */}
        {/* <View className="px-5 mt-4">
            <Text className="text-lg font-semibold mb-2">Social Share</Text>
    
          </View> */}
        <View className="p-4">
          <RecommendedDishes />
        </View>
      </ScrollView>
    </View>
  );
};

export default ShopScreen;
