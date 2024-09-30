import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "../assets/images";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const UseLocation = () => {
  let navigation = useNavigation();
  const latitude = 63.674163;
  const longitude = 22.705384;
  return (
    <View className="flex-1 justify-center items-center bg-gray-50">
      {/* Logo */}
      <View className="mb-6">
        <Image
          source={images.foodlandpng}
          style={{ width: 150, height: 150 }}
        />
      </View>

      {/* Title */}
      <Text className="text-2xl font-bold text-gray-800 mb-2">Food Land</Text>
      <Text className="text-gray-600 mb-8">Number one food delivery app</Text>

      {/* Map Image */}
      <View className="w-48 h-36 mb-6">
        <Image
          source={images.googleMap}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
        {/* <MapView
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
        </MapView> */}
      </View>

      {/* Info Text */}
      <Text className="text-center text-gray-700 mb-4">
        FoodLand uses your location to show restaurants.
      </Text>

      {/* Button */}
      <TouchableOpacity
        className="bg-red-500 px-6 py-3 rounded-full mb-4"
        onPress={() => navigation.navigate("home")}
      >
        <Text className="text-white text-base font-semibold">
          Use Current Location
        </Text>
      </TouchableOpacity>

      {/* Alternative Link */}
      <Text className="text-red-500 text-base underline">
        Select Another Location
      </Text>
    </View>
  );
};

export default UseLocation;
