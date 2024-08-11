import { Text, View, Image} from 'react-native';
import {useEffect} from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { images } from '../constants';

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboard-one');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <GestureHandlerRootView>
      <SafeAreaView className='bg-mindgreen h-full'>
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className='w-full justify-center items-center h-[85vh] px-4'>
            <Image
              source={images.logo}
              className='w-[300px] h-[300px]'
              resizeMode='contain'
            />
          </View>
        </ScrollView>

        <StatusBar backgroundColor='#6AB49B' style='light' />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}


