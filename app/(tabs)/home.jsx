import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Title */}
        <View className="bg-mindgreen w-full h-16 justify-between items-center flex flex-row rounded-b-xl">
          <View>
            <Text className=" text-white font-isemibold text-xl pl-6">
              Smart Trash
            </Text>
          </View>
          <View className="pr-6">
            <Image source={icons.whiteBell} />
          </View>
        </View>

        {/* Dashboard */}
        <View className="bg-whiteswan w-full h-52 flex-row items-start -mt-4 relative -z-10">
          <View className="flex-1">
            <Text className="ml-6 text-lg font-ibold pt-10">
              PERIODE DIPERPANJANG!!!
            </Text>
            <Text className="ml-6 text-xs font-ibold">
              Kompetisi Rumah Paling Bersih Dari Sampah
            </Text>
            <Text className="ml-6 text-sm font-imedium pt-3">
              Daftar sebelum 26 April 2024
            </Text>
            <Text className="ml-6 text-sm font-imedium pt-3">*S&K Berlaku</Text>
          </View>
          <Image
            source={icons.hand}
            className="w-[129px] h-[172px] ml-2 mt-9"
          />
        </View>

        {/* RankButton */}
        <View className="flex-1 justify-center items-center -mt-8">
          <View className="bg-white w-72 h-16 justify-center items-center rounded-xl shadow-md">
            <TouchableOpacity className="flex-row justify-between w-48">
              <View className="flex-row items-center">
                <Image source={icons.goldCrown} className="w-8 h-8" />
                <View className="ml-2">
                  <Text className="text-base font-semibold">Level</Text>
                  <Text className="text-sm">Gold</Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <Image source={icons.vip} className="w-8 h-8" />
                <View className="ml-2">
                  <Text className="text-base font-semibold">VIP</Text>
                  <Text className="text-sm">Benefit</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features */}
        <View className="justify-center items-center flex-row mt-12 w-full">
          <View className="items-center w-[122px] h-[165px]">
            <TouchableOpacity
              className="bg-white w-[65px] h-[68px] rounded-lg items-center justify-center"
              onPress={() => router.push("/home")}
            >
              <Image source={icons.recycle} />
            </TouchableOpacity>
            <Text className=" text-center font-isemibold mt-2">
              Pengambilan Sampah mingguan
            </Text>
          </View>
          <View className="items-center w-[122px] h-[165px]">
            <TouchableOpacity
              className="bg-white w-[65px] h-[68px] rounded-lg items-center justify-center"
              onPress={() => router.push("/home")}
            >
              <Image source={icons.callender} />
            </TouchableOpacity>
            <Text className="text-center font-isemibold mt-2">
              Pengambilan Sampah mingguan
            </Text>
          </View>
        </View>

        {/* News */}
        <View className="w-full">
          <View className="flex-row h-12 justify-between ml-5">
            <Text className="font-ibold text-base">BERITA TERKINI</Text>
            <TouchableOpacity className="bg-darkgreen w-[80px] rounded-3xl h-[30px] mr-5 items-center justify-center">
              <Text className="text-xs font-imedium text-white">View More</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center ">
            <View className="items-center px-2 mr-4">
              <View className="bg-white w-[170px] h-auto rounded-xl">
                <Image source={images.main2} />
                <Text className="font-isemibold text-xs text-black mx-1 mt-2 mb-2">
                  Keseruan Pandawara Ajak Relawan Bersihkan Selokan di Baleendah
                </Text>
              </View>
            </View>

            <View className="items-center px-2">
              <View className="bg-white w-[170px] h-auto rounded-xl">
                <Image source={images.main1} />
                <Text className="font-isemibold text-xs text-black mx-1 mt-2 mb-2">
                  Pemkot Tangsel Beberkan Strategi Atasi Masalah Sampah
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
