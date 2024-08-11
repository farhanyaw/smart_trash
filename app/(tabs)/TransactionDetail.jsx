import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons, images } from "@/constants";

const TransactionDetail = () => {
  const { transaction } = useLocalSearchParams(); // This will grab the parameters from the route
  const transactionData = JSON.parse(transaction); // Parse back to object

  return (
    <SafeAreaView>
      <View className="bg-mindgreen w-full h-[100px] pt-2">
        {/* Back Button and Title */}
        <View className="flex-row items-center mt-4 ml-4">
          <TouchableOpacity onPress={() => router.back()} className="mr-2">
            <Image source={icons.leftarrow} className="w-6 h-6" />
          </TouchableOpacity>

          {/* Title */}
          <Text className="text-white font-ibold text-lg">
            Detail Transaksi
          </Text>
        </View>
      </View>
      <View className="bg-white mx-10 rounded-xl justify-center mt-8 pb-4 pt-4 h-auto">
        <View className="items-start ml-4">
          <Text className="text-black mb-3 font-semibold">
            {transactionData.date}
          </Text>
          <Text className="text-black mb-3 font-semibold">
            {transactionData.username}
          </Text>

          <View className="flex-row items-center mb-3">
            <Image source={icons.nik} />
            <Text className="text-black ml-2 font-semibold">
              NIK: {transactionData.nik}
            </Text>
          </View>

          <View className="flex-row items-center mb-3 ml-1">
            <Image source={icons.location} />
            <Text className="text-black ml-3 font-semibold">
              Location: {transactionData.location}
            </Text>
          </View>

          <View className="flex-row items-center mb-3">
            <Image source={icons.trash} />
            <Text className="text-black ml-3 font-semibold">
              Waste Type: {transactionData.wasteType}
            </Text>
          </View>

          <View className="flex-row items-center mb-3">
            <Image source={icons.mail} />
            <Text className="text-black ml-3 font-semibold">
              Email: {transactionData.email}
            </Text>
          </View>

          <View className="flex-row items-center mb-3">
            <Image source={icons.phone} />
            <Text className="text-black ml-3 font-semibold">
              Phone: {transactionData.phone}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Image source={icons.mail} />
            <Text className="text-black ml-3 font-semibold">
              Total: {transactionData.amount}
            </Text>
          </View>
        </View>
        <View className="bg-gray-300 w-[310px] h-[53px] ml-3 mt-4 justify-between flex-row items-center rounded-lg">
          <Text className="text-black ml-3 font-semibold">
            Total:
          </Text>
          <Text className="text-black mr-3 font-semibold">
              {transactionData.amount}
            </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetail;
