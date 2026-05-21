import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { favProductsAPI } from "../utils/data";

export default function Favorite() {
  return (
    <View className="flex-1 bg-white">

      <ScrollView
        className="px-4 pt-14"
        contentContainerStyle={{ paddingBottom: 120 }}
      >

        {/* TITLE */}
        <Text className="text-xl font-bold mt-4 text-black text-center">
          Favorite Items
        </Text>

        {/* SEARCH BAR */}
        <View className="flex-row items-center bg-gray-100 mt-4 px-4 py-2 rounded-xl gap-2">
          <MaterialCommunityIcons name="magnify" size={20} color="gray" />
          <TextInput
            placeholder="Search Store..."
            className="flex-1"
          />
        </View>

        {/* CATEGORY CARDS */}
        <View className="flex-row flex-wrap gap-4 mt-3">
          {favProductsAPI.map((item, index) => (
            <View key={index} className={`w-[47%] h-[170px] p-4 rounded-2xl flex-col gap-3 items-center justify-center border ${item.border_color} ${item.background_color}`}>
              <Image
                source={{ uri: item.image_uri }}
                className="w-20 h-20 rounded-xl"
              />
              <Text className={`text-lg font-bold text-black`}>{item.brand_name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* FLOATING CART BUTTON */}
      <View className="absolute bottom-6 right-6 bg-[#94CAA6] p-4 rounded-full shadow-lg">
        <MaterialCommunityIcons name="cart" size={26} color="white" />
      </View>

    </View>
  );
}