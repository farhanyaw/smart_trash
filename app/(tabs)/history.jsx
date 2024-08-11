import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; 
import { icons, images } from "@/constants";
import React from "react";

const transactions = [
  {
    id: 1,
    title: "Pengambilan Sampah Mingguan",
    date: "August 10, 2024",
    amount: "-$2.50",
    username: "Joe Biden",
    nik: "123456789",
    location: "Singapore",
    wasteType: "Organic",
    email: "joebiden@example.com",
    phone: "+1234567890",
  },
  {
    id: 2,
    title: "Pengambilan Sampah Bulanan",
    date: "August 10, 2024",
    amount: "-$4.50",
    username: "John Doe",
    nik: "123456789",
    location: "Grand Indonesia",
    wasteType: "Plastic",
    email: "johndoe@example.com",
    phone: "+1234567890",
  },
  // Add more transactions here
];

const History = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-mindgreen w-full h-[80px] pt-2">
        {/* Back Button and Title */}
        <View className="flex-row items-center mt-4 ml-4">
          <TouchableOpacity onPress={() => router.back()} className="mr-2">
            <Image source={icons.leftarrow} className="w-6 h-6" />
          </TouchableOpacity>

          {/* Title */}
          <Text className="text-white font-ibold text-lg">
            Riwayat Transaksi
          </Text>
        </View>
      </View>

      <ScrollView className="mt-4">
        {transactions.map((transaction) => (
          <TouchableOpacity
            key={transaction.id}
            className="flex-row items-center justify-between p-4 border-b border-gray-200"
            onPress={() =>
              router.push({
                pathname: `/TransactionDetail`,
                params: {
                  transaction: JSON.stringify(transaction),
                },
              })
            }
          >
            <View>
              <Text className="font-semibold text-gray-800">
                {transaction.title}
              </Text>
              <Text className="text-gray-500 text-sm">{transaction.date}</Text>
            </View>
            <Text
              className={`font-semibold ${
                transaction.amount.startsWith("+")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transaction.amount}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
