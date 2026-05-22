import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import type { searchBarProps } from "../types";

const SearchBar = ({ placeholder }: searchBarProps) => {
    return (
        <>
            {/* SEARCH BAR */}
            <View className="flex-row items-center bg-gray-100 mt-4 px-4 py-3 rounded-xl gap-2">
                <MaterialCommunityIcons name="magnify" size={20} color="gray" />
                <TextInput
                    placeholder={placeholder}
                    className="flex-1 focus:outline-0"
                />
            </View>
        </>
    )
}

export default SearchBar;