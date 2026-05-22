import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View } from "react-native";
import { CartButton, ProductCard } from "../components";
import { popularItemsAPI } from "../utils/data";

export default function Profile() {
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
          Nectar Profile
        </Text>

        <Text className="text-gray-500 mt-1">
          Fresh groceries delivered fast
        </Text>

        <View className="flex-row justify-between items-center mt-6">
          <Text className="text-xl font-bold">Address</Text>
          <Text className="text-[#94CAA6]">Edit</Text>
        </View>
        <View>
          <Text className="text-gray-500 mt-1">
            Street # 30, Plot # 20 Gulshan e Iqbal, Karachi
          </Text>
        </View>

        {/* PROMO BANNER */}
        <View className="bg-[#94CAA6] mt-5 p-5 rounded-2xl flex-row justify-between items-center">
          <View>
            <Text className="text-white text-lg font-bold">
              Williamson Holard
            </Text>
            <Text className="text-white text-sm mt-1">
              03367854129
            </Text>
          </View>

          <MaterialCommunityIcons name="face-man" size={40} color="white" />
        </View>

        {/* CATEGORIES HEADER */}
        <View className="flex-row justify-between items-center mt-6">
          <Text className="text-xl font-bold">Search Payment Method</Text>
          <Text className="text-[#94CAA6]">Add Voucher</Text>
        </View>

        {/* SEARCH BAR */}
        <View className="flex-row items-center bg-gray-100 mt-4 px-4 py-2 rounded-xl gap-2">
          <MaterialCommunityIcons name="magnify" size={20} color="gray" />
          <TextInput
            placeholder="e.g. Meezan Master Card..."
            className="flex-1"
          />
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