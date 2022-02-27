/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './pages/Home';
import MatchingIntro from './pages/Matching/MatchingIntro';
import 'react-native-gesture-handler';
import { testable } from 'react-native-ui-lib/generatedTypes/src/components/featureHighlight';
import GetMatchedIntro from './pages/Matching/GetMatchedIntro';
import ProfileAvailability from './pages/Matching/ProfileAvailability';
import ProfileVolunteerAreas from './pages/Matching/ProfileVolunteerAreas';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {

  let MatchingNavigator = createNativeStackNavigator();

  let MatchingStack = () => {
    return (
      <MatchingNavigator.Navigator
        screenOptions={
          {
            headerShown: false,
          }
        }>
        <MatchingNavigator.Screen name="MatchingIntro" component={MatchingIntro} />
        <MatchingNavigator.Screen name="GetMatchedIntro" component={GetMatchedIntro} />
        <MatchingNavigator.Screen name="ProfileAvailability" component={ProfileAvailability} />
        <MatchingNavigator.Screen name="ProfileVolunteerAreas" component={ProfileVolunteerAreas} />
      </MatchingNavigator.Navigator>
    );

  }


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused
                ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              case 'Journaling':
                

            }

            if (route.name === 'Home') {
              
            } else if (route.name === 'Journaling') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Matching" component={MatchingStack} />
        <Tab.Screen name="Journaling" component={Home} />
        <Tab.Screen name="Challenges" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
