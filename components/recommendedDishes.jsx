import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Iconentypo from "react-native-vector-icons/Entypo";
import { recommendedDishes } from "../data/data";
import { useNavigation } from "@react-navigation/native";

const RecommendedDishes = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text className="text-lg font-semibold mb-2">Recommended Dishes</Text>
      <Text className="text-sm text-gray-500 mb-4">
        Choose your goods from here
      </Text>
      <FlatList
        data={recommendedDishes}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("shopScreen", { ...item })}
            className="w-56 bg-white mr-4 rounded-lg shadow"
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: 120, borderRadius: 8 }}
            />
            <Text className="text-lg font-semibold mt-2">{item.name}</Text>
            <Text className="text-gray-500">{item.restaurant}</Text>
            <View className="flex-row justify-between items-center mt-2">
              <Text className="text-lg font-bold">{item.price}</Text>
              <Text className="text-sm text-gray-400 line-through">
                {item.oldPrice}
              </Text>
              <Text className="text-sm text-red-500">{item.discount}</Text>
            </View>
            <View className="flex-row justify-between items-center mt-1">
              <View className="flex-row justify-between items-center space-x-2 text-gray-500">
                <Iconentypo name="time-slot" size={14} color="#ff3131" />
                <Text>{item.time}</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon name="star" size={14} color="orange" />
                <Text className="text-gray-500">{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecommendedDishes;
