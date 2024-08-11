import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";

const onboard1 = () => {
  const router = useRouter();

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-mindgreen h-full">
        <View className="flex-1">
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="relative mt-10 ml-10">
              <Text className="text-3xl text-white font-ibold text-left">
                Zero Plastic
              </Text>
            </View>
            <View className="w-full mt-20 items-center px-4">
              <Image
                source={images.onboarding1}
                className="w-[300px] h-[300px]"
                resizeMode="contain"
              />
              <Text className="text-sm font-iregular text-white mt-7 text-center">
                Memprioritaskan penggunaan bahan ramah lingkungan untuk
                mengurangi jejak plastik di lingkungan kita
              </Text>
            </View>
          </ScrollView>

          <View className="w-full items-center pb-5 px-4 mb-7">
            <TouchableOpacity
              onPress={() => router.push("/onboard-two ")}
              activeOpacity={0.7}
              className="bg-darkgreen rounded-xl h-[50px] w-full max-w-[300px] justify-center items-center"
            >
              <Text className="text-white font-ibold text-lg">NEXT</Text>
            </TouchableOpacity>
          </View>

          {/* <View className="w-full items-center pb-5 px-4 mb-7">
            <CustomButton
              title="NEXT"
              handlePress={() => router.push("/home")}
              containerStyles="w-full mt-7"
            />
          </View> */}
        </View>

        <StatusBar backgroundColor="#6AB49B" style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default onboard1;
