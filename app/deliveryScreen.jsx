import { View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";
import images from "../assets/images";
import FontA from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const DeliveryScreen = () => {
  let navigation = useNavigation();
  const latitude = 63.674163;
  const longitude = 22.705384;
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
      <View className="bg-secondary rounded-2xl">
        <View className="flex-row justify-between items-center">
          <View className="p-5">
            <Text className="text-xl font-semibold">Estimated Arival</Text>
            <Text className="text-3xl font-extrabold">20-30 Minutes</Text>
            <Text className="font-bold">Your order is on its way!</Text>
          </View>
          <View>
            <Image source={images.deliveryService} className="h-32 w-32" />
          </View>
        </View>
        <View className="m-2 bg-primary rounded-full flex-row justify-between items-center">
          <View className="p-5 flex-row items-center space-x-3">
            <View>
              <Image
                source={images.profile}
                className="h-12 w-12 rounded-full border-white border-2"
              />
            </View>
            <View>
              <Text className="text-xl font-extrabold text-white">
                Sulochan
              </Text>
              <Text className="text-md font-semibold text-white">
                Delivery Rider
              </Text>
            </View>
          </View>
          <View className="p-5 flex-row items-center space-x-3">
            <View>
              <FontA name="phone-square" size={38} color="white" />
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("home")}>
                <Entypo name="squared-cross" size={38} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
