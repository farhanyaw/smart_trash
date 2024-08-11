import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter;

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-mindgreen w-full h-[150px] relative flex-1 pt-2">
          {/* Back Button and Title */}
          <View className="flex-row items-center mt-4 ml-4">
            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="mr-2"
            >
              <Image source={icons.leftarrow} className="w-6 h-6" />
            </TouchableOpacity>

            {/* Title */}
            <Text className="text-white font-ibold text-lg">Profile</Text>
          </View>
        </View>

        <View className="flex-row -mt-14">
          <View className="border-radius-40 overflow-hidden ml-10">
            <Image source={images.person} />
          </View>
          <Text className="text-white font-ibold text-xl mt-4 ml-4">
            @farhanyaw
          </Text>
        </View>
        <View className="px-6 py-10">
          <TouchableOpacity>
            <View className="w-full h-12 px-4 bg-mindgreen rounded-t-lg flex flex-row items-center border border-white">
              <Image source={icons.person} className="w-auto" />
              <Text className="text-white text-base font-isemibold ml-8">
                Profile
              </Text>
              <Image source={icons.rightarrow} className="ml-auto" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>
              router.push({
                pathname: `/history`,
              })
            }>
            <View className="w-full h-12 px-4 bg-mindgreen flex flex-row items-center border border-white">
              <Image source={icons.blackPaper} className="w-auto ml-1" />
              <Text className="text-white text-base font-isemibold ml-7">
                Riwayat Transaksi
              </Text>
              <Image source={icons.rightarrow} className="ml-auto" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="w-full h-12 px-4 bg-mindgreen flex flex-row items-center border border-white">
              <Image source={icons.ticket} className="w-auto" />
              <Text className="text-white text-base font-isemibold ml-8">
                Voucher
              </Text>
              <Image source={icons.rightarrow} className="ml-auto" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="w-full h-12 px-4 bg-mindgreen flex flex-row items-center border border-white">
              <Image source={icons.setting} className="w-auto" />
              <Text className="text-white text-base font-isemibold ml-8">
                Pengaturan
              </Text>
              <Image source={icons.rightarrow} className="ml-auto" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="w-full h-12 px-4 bg-mindgreen flex flex-row items-center border border-white">
              <Image source={icons.security} className="w-auto" />
              <Text className="text-white text-base font-isemibold ml-8">
                Keamanan Akun
              </Text>
              <Image source={icons.rightarrow} className="ml-auto" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="w-full h-12 px-4 bg-mindgreen flex flex-row items-center border border-white">
              <Image source={icons.information} className="ml-2" />
              <Text className="text-white text-base font-isemibold ml-10">
                Pusat Bantuan
              </Text>
              <Image source={icons.rightarrow} className="ml-auto" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="w-full h-12 px-4 bg-mindgreen rounded-b-lg flex flex-row items-center border border-white">
              <Image source={icons.change} />
              <Text className="text-white text-base font-isemibold ml-8">
                Log Out
              </Text>
              <Image source={icons.rightarrow} className="ml-auto" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
