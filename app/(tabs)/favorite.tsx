import { ScrollView, Text, View } from "react-native";
import { CartButton, CategoryCard, SearchBar } from "../components";
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
        <SearchBar placeholder="Search Store..." />

        
        {/* CATEGORY CARDS */}
        <View className="flex-row flex-wrap gap-4 mt-3">
          <CategoryCard data={favProductsAPI} />
        </View>
      </ScrollView>

      {/* FLOATING CART BUTTON */}
      <CartButton />

    </View>
  );
}