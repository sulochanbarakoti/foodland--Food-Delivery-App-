import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
// import React from "react";
// import { useLocalSearchParams } from "expo-router";

// const ShopDetail = () => {
//   const { id, name, restaurant, price, oldPrice, rating, image, time } =
//     useLocalSearchParams();
//   const ShopDetailData = {
//     id: id,
//     name: name,
//     restaurant: restaurant,
//     price: price,
//     oldPrice: oldPrice,
//     rating: rating,
//     image: image,
//     time: time,
//   };
//   return (
//     <View>
//       {/* Food Items */}
//       <FlatList
//         data={foodData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View className="flex-row justify-between items-center mb-4 bg-gray-100 p-4 rounded-lg">
//             <View className="flex-row items-center">
//               <Image
//                 source={item.image}
//                 style={{ width: 60, height: 60, borderRadius: 10 }}
//               />
//               <View className="ml-4">
//                 <Text className="font-semibold">{item.name}</Text>
//                 <Text className="text-sm text-gray-500">
//                   {item.price}{" "}
//                   <Text className="line-through">{item.oldPrice}</Text>
//                 </Text>
//                 <View className="flex-row items-center">
//                   <Icon name="star" size={14} color="orange" />
//                   <Text className="ml-1 text-sm text-gray-500">
//                     {item.rating}
//                   </Text>
//                 </View>
//               </View>
//             </View>
//             <View className="flex-row items-center">
//               <TouchableOpacity className="bg-gray-300 py-1 px-2 rounded-full">
//                 <Text className="text-lg">-</Text>
//               </TouchableOpacity>
//               <Text className="mx-2">02</Text>
//               <TouchableOpacity className="bg-gray-300 py-1 px-2 rounded-full">
//                 <Text className="text-lg">+</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default Food;
