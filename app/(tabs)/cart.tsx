import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

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
      <View className="absolute bottom-6 right-6 bg-[#94CAA6] p-4 rounded-full shadow-lg">
        <MaterialCommunityIcons name="cart" size={26} color="white" />
      </View>

    </View>
  );
}