import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useSegments } from "expo-router"; // Import useSegments to identify the current route

import { images, icons } from "../../constants";
import { TextInput } from "react-native";

import CustomButton from "@/components/CustomButton";

const SignIn = () => {
  const router = useRouter();
  const segments = useSegments(); // Get the current route segments

  const isSignInPage = segments.includes('sign-in'); // Check if the current page is Sign In
  const isSignUpPage = segments.includes('sign-up'); // Check if the current page is Sign Up

  return (
    <SafeAreaView className="bg-mindgreen h-full">
      <ScrollView>
        {/* Navbar */}
        <View className={`px-6 pt-5`}>
          <View className="w-full h-14 px-2 bg-white rounded-lg flex flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              activeOpacity={0.7}
              className={`px-10 rounded-md h-12 justify-center items-center w-44 ${isSignInPage ? 'bg-darkgreen' : ''}`}
            >
              <Text className={`font-ibold text-lg ${isSignInPage ? 'text-white' : 'text-darkgreen'}`}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/sign-up")}
              activeOpacity={0.7}
              className={`px-10 ${isSignUpPage ? 'bg-darkgreen' : ''}`}
            >
              <Text className={`font-ibold text-lg ${isSignUpPage ? 'text-white' : 'text-darkgreen'}`}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Title */}
        <View className="w-full justify-center px-4 my-6">
          <Text className="text-4xl text-white text-semibold mt-10 font-ibold">
            Selamat Datang!
          </Text>
          <Text className="text-white text-semibold font-isemibold">
            Kami senang melihat anda kembali
          </Text>
        </View>

        {/* username */}
        <View className="px-6 py-5">
          <Text className="pl-3 mb-2 text-base text-black font-ibold">
            Username
          </Text>
          <View className="w-full h-16 px-4 bg-white rounded-lg flex flex-row items-center justify-between">
            <Image source={icons.person} />
            <TextInput className="flex-1 ml-4 text-black font-isemibold text-base" />
          </View>
        </View>

        {/* password */}
        <View className="px-6">
          <Text className="pl-3 mb-2 text-base text-black font-ibold">
            Password
          </Text>
          <View className="w-full h-16 px-4 bg-white rounded-lg flex flex-row items-center justify-between">
            <Image source={icons.lock} />
            <TextInput className="flex-1 ml-4 text-black font-isemibold text-base" />
            <Image source={icons.view} />
          </View>
        </View>

        {/* ForgotPass */}
        <TouchableOpacity
          // onPress={() => router.push("/")}
          activeOpacity={0.7}
          className="w-full items-end pr-7 pt-2"
        >
          <Text className="text-black font-isemibold text-xs">
            Lupa Password?
          </Text>
        </TouchableOpacity>

        {/* Button */}
        <View className="w-full items-center pb-5 px-6 pt-10">
          <TouchableOpacity
            onPress={() => router.push("/home")}
            activeOpacity={0.7}
            className="bg-darkgreen rounded-2xl h-[50px] w-full max-w-[400px] justify-center items-center"
          >
            <Text className="text-white font-ibold text-lg">Sign In</Text>
          </TouchableOpacity>
        </View>

        {/* Account */}
        <View className="w-full justify-center items-center flex flex-row pb-5 pt-10 space-x-12">
          <TouchableOpacity
            // onPress={() => router.push("/")}
            activeOpacity={0.7}
            className="bg-white rounded-xl h-[60px] w-[60px] justify-center items-center"
          >
            <Image source={icons.google}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => router.push("/")}
            activeOpacity={0.7}
            className="bg-white rounded-xl h-[60px] w-[60px] justify-center items-center"
          >
            <Image source={icons.facebook}></Image>
          </TouchableOpacity>
        </View>

        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-sm text-black font-pregular">
            Tidak punya akun?
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/sign-up")}
            className="text-lg font-psemibold text-secondary"
          >
            <Text className="text-sm text-orange-600 font-isemibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
