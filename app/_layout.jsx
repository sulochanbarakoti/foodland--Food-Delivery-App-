import { Stack } from "expo-router";
import CartContextProvider from "../context/cartContext";
const RootLayout = () => {
  return (
    <CartContextProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="useLocation" options={{ headerShown: false }} />
        <Stack.Screen name="shopScreen" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen
          name="cartScreen"
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="orderScreen"
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="deliveryScreen"
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack>
    </CartContextProvider>
  );
};

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator();
// const RootLayout = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="index" component={Index} />
//         <Stack.Screen name="useLocation" component={UseLocation} />
//         <Stack.Screen name="shopScreen" component={ShopScreen} />
//         <Stack.Screen name="home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default RootLayout;
