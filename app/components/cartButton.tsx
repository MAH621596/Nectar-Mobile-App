import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

const CartButton = () => {
    return (
        <>
            <View className="absolute bottom-6 right-6 bg-[#94CAA6] p-4 rounded-full shadow-lg">
                <MaterialCommunityIcons name="cart" size={26} color="white" />
            </View>
        </>
    )
}

export default CartButton;