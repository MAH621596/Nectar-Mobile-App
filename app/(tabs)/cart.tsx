import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { CartButton } from "../components";

export default function Cart() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
        {/* TITLE */}

        <MaterialCommunityIcons name="cart" size={80} color="#94CAA6" />

        <Text className="text-3xl font-bold mt-4 text-[#94CAA6]">
          Cart is empty
        </Text>

        <Text className="text-gray-500 mt-1">
          Want to add your favorite items?
        </Text>
        
      {/* FLOATING CART BUTTON */}
      <CartButton />

    </View>
  );
}