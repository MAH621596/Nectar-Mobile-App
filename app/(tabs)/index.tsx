import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { CartButton, ProductCard, SearchBar } from "../components";
import { categoriesAPI, popularItemsAPI } from "../utils/data";

export default function Home() {
  return (
    <View className="flex-1 bg-white">

      <ScrollView
        className="px-4 pt-14"
        contentContainerStyle={{ paddingBottom: 120 }}
      >

        {/* HEADER / LOCATION */}
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-gray-500 text-sm">Deliver to</Text>
            <View className="flex-row items-center gap-1">
              <MaterialCommunityIcons name="map-marker" size={18} color="#94CAA6" />
              <Text className="text-lg font-bold text-black">Karachi</Text>
            </View>
          </View>

          <MaterialCommunityIcons name="bell-outline" size={26} color="#000" />
        </View>

        {/* TITLE */}
        <Text className="text-3xl font-bold mt-4 text-[#94CAA6]">
          Nectar 🛒
        </Text>

        <Text className="text-gray-500 mt-1">
          Fresh groceries delivered fast
        </Text>

        {/* SEARCH BAR */} 
        <SearchBar placeholder="Search vegetables, fruits..." />

        {/* PROMO BANNER */}
        <View className="bg-[#94CAA6] mt-5 p-5 rounded-2xl flex-row justify-between items-center">
          <View>
            <Text className="text-white text-lg font-bold">
              30% OFF
            </Text>
            <Text className="text-white text-sm mt-1">
              First order discount
            </Text>
          </View>

          <MaterialCommunityIcons name="cart" size={40} color="white" />
        </View>

        {/* CATEGORIES HEADER */}
        <View className="flex-row justify-between items-center mt-6">
          <Text className="text-xl font-bold">Categories</Text>
          <Text className="text-[#94CAA6]">See All</Text>
        </View>

        {/* CATEGORY CARDS */}
        <View className="flex-row flex-wrap gap-3 mt-3">
          {categoriesAPI.map((item, index) => (
            <View key={index} className={`w-[47%] p-4 rounded-2xl flex-row items-center justify-between ${item.background_color}`}>
              <Text className={`font-bold ${item.text_color}`}>{item.brand_name}</Text>
              <MaterialCommunityIcons name={item.icon_name as any} size={24} color={item.icon_color} />
            </View>
          ))}
        </View>

        {/* POPULAR HEADER */}
        <View className="flex-row justify-between items-center mt-6">
          <Text className="text-xl font-bold">Popular Items 🔥</Text>
          <Text className="text-[#94CAA6]">See All</Text>
        </View>

        {/* PRODUCTS */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3">
          <ProductCard data={popularItemsAPI} />
        </ScrollView>

      </ScrollView>

      {/* FLOATING CART BUTTON */}
      <CartButton />
    </View>
  );
}