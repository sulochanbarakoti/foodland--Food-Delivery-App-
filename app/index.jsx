import { View, Text, Image, Animated, ActivityIndicator } from "react-native";
import images from "../assets/images";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "expo-router";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const fadeAnim = new Animated.Value(0); // Initial opacity value for logo

  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      router.replace("/useLocation");
    }, 1200);

    // Start the fade-in animation for the logo
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800, // Adjust the duration of the animation
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View className="flex-1 bg-primary justify-center items-center">
      {/* Animated Logo */}
      <Animated.View className="mb-6" style={{ opacity: fadeAnim }}>
        <Image
          source={images.foodlandpng}
          className="w-36 h-36"
          resizeMode="contain"
        />
      </Animated.View>
      <Text className="text-white text-4xl font-bold">FoodLand</Text>
      <Text className="text-white font-semibold">
        Number one food delivery app
      </Text>
      {/* Loading Spinner */}
      {loading && (
        <ActivityIndicator size="large" color="white" className="mt-4" />
      )}
    </View>
  );
};

export default Index;
