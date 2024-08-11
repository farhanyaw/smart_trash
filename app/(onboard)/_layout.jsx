import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const OnboardLayout = () => {
    return (
        <>
          <Stack>
            <Stack.Screen
              name="onboard-one"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="onboard-two"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="onboard-three"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
    
          <StatusBar backgroundColor="#6AB49B" style="light" />
        </>
    );
};

export default OnboardLayout;
