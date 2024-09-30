import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { recommendedDishes, menuList } from "../data/data";
import RecommendedDishes from "../components/recommendedDishes";
import PopularCategory from "../components/popularCategory";
import RestaurantSlider from "../components/restaurantSlider";
import FoodList from "../components/foodList";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if (activeTab == "Popular") {
      setMenu(menuList);
    } else if (activeTab == "Free Delivery") {
      setMenu(recommendedDishes);
    }
  }, [activeTab]);
  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-white p-5">
        {/* header */}
        <View className="flex-row items-center justify-between my-5">
          {/* <View>
            <Icon name="menu" size={24} color="#f43f5e" />
          </View> */}
          <View className="flex-row items-center space-x-2">
            <Icon name="location-outline" size={24} color="#f43f5e" />
            <Text className="text-lg font-semibold">FoodLand</Text>
          </View>
          <View>
            <Icon name="fast-food" size={24} color="#f43f5e" />
          </View>
        </View>
        {/* search bar */}
        <View className="flex-row items-center bg-gray-100 p-3 rounded-full mb-6">
          <Icon name="search-outline" size={20} color="gray" />
          <TextInput
            placeholder="Type food or restaurant name"
            className="ml-2 flex-1 text-gray-700"
          />
        </View>
        <RecommendedDishes />
        <PopularCategory />
        <RestaurantSlider />
        {/* Tab Navigation */}
        <View className="flex-row justify-center my-4">
          {["Popular", "Free Delivery", "Recent Added"].map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`px-4 py-2 ${
                activeTab === tab ? "opacity-100" : " opacity-40"
              } mx-2 rounded-full`}
              onPress={() => setActiveTab(tab)}
            >
              <Text className="text-sm font-semibold">{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <FoodList menu={menu} />
      </SafeAreaView>
      <StatusBar style="light" />
    </ScrollView>
  );
};

export default Home;
