import { Image } from 'expo-image';
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/(tabs)");
    }, 2000);

    return () => clearTimeout(t);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#94CAA6" }}>
      <Image
          source={require('@/assets/images/logo.png')}
          style={{ width: 260, height: 60, alignSelf: 'center' }}
        />
    </View>
  );
}