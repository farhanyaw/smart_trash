import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';

const onboard3 = () => {
  const router = useRouter();


  return (
    <SafeAreaView className='bg-mindgreen h-full'>
        <View className='flex-1'>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className='relative mt-10 ml-10'>
              <Text className='text-3xl text-white font-ibold text-left'>
                Clean Earth
              </Text>
            </View>
            <View className='w-full mt-20 items-center px-4'>
              <Image
              source={images.onboarding3}
              className='w-[300px] h-[300px]'
              resizeMode='contain'
              />
              <Text className='text-sm font-iregular text-white mt-7 text-center'>
                Menciptakan Bumi yang lebih bersih dan sehat dengan memanfaatkan fitur-fitur kami yang ramah lingkungan
              </Text>
            </View>
          </ScrollView>
        <View className='w-full items-center pb-5 px-4 mb-7'>
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            activeOpacity={0.7}
            className='bg-darkgreen rounded-xl h-[50px] w-full max-w-[300px] justify-center items-center'
          >
            <Text className='text-white font-ibold text-lg'>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar backgroundColor='#6AB49B' style='light' />
    </SafeAreaView>
  )
}

export default onboard3