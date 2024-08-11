import { View, Text, Image, ImageSourcePropType, Animated } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React, { useEffect, useRef } from "react";

import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: focused ? -15 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View
      style={[
        {
          transform: [{ translateY }],
          alignItems: "center",
          justifyContent: "center",
          padding: focused ? 8 : 0,
          backgroundColor: focused ? "#156147" : "",
          borderRadius: 30,
        },
      ]}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color, width: 24, height: 24 }}
      />
      <Text
        className={`${focused ? "font-ibold" : "font-iregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </Animated.View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#156147",
            borderTopWidth: 1,
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Beranda"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.paper}
                color={color}
                name="History"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.user}
                color={color}
                name="Akun"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="TransactionDetail"
          options={{
            title: "TransactionDetail",
            headerShown: false,
            tabBarButton: () => null, // Hide this tab from the tab bar
            tabBarVisible: false, // Optional: Hide the tab bar when this screen is active
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
