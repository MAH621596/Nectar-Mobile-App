import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import type { categoryCardProps, productCardProps } from "../types";

export const CategoryCard = ({ data }: categoryCardProps) => {
    return (
        <>
            {data.map((item, index) => (
                <View key={index} className={`w-[47%] h-[170px] p-4 rounded-2xl flex-col gap-3 items-center justify-center border ${item.border_color} ${item.background_color}`}>
                    <Image
                        source={{ uri: item.image_uri }}
                        className="w-20 h-20 rounded-xl"
                    />
                    <Text className={`text-base font-bold text-black`}>{item.brand_name}</Text>
                </View>
            ))}
        </>
    )
}

export const ProductCard = ({ data }: productCardProps) => {
    return (
        <>
            {data.map((item, index) => (
                <View key={index} className="bg-white border border-gray-200 p-3 rounded-2xl mr-3 w-40">

                    <Image
                        source={{ uri: item.image_uri }}
                        className="w-full h-24 rounded-xl"
                    />

                    <Text className="font-bold mt-2">{item.item_name}</Text>
                    <Text className="text-[#94CAA6] font-semibold">{item.item_price}/{item.item_quantity}</Text>

                    {/* ADD BUTTON */}
                    <View className="absolute bottom-2 right-2 bg-[#94CAA6] p-2 rounded-full">
                        <MaterialCommunityIcons name="plus" size={18} color="white" />
                    </View>

                </View>
            ))}
        </>
    )
}

