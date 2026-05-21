import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, View } from 'react-native';

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
          source={{ uri: 'https://res.cloudinary.com/deuefwh7b/image/upload/v1747840000/logo_lqog87.png' }}
          style={{ width: 260, height: 60, alignSelf: 'center' }}
          resizeMode="contain"
        />
    </View>
  );
}