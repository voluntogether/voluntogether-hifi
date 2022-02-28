/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import state from './state/store';
import { PersistGate } from 'redux-persist/integration/react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from './pages/Home';
import MatchingIntro from './pages/Matching/MatchingIntro';
import 'react-native-gesture-handler';
import { testable } from 'react-native-ui-lib/generatedTypes/src/components/featureHighlight';
import GetMatchedIntro from './pages/Matching/GetMatchedIntro';
import ProfileAvailability from './pages/Matching/ProfileAvailability';
import ProfileVolunteerAreas from './pages/Matching/ProfileVolunteerAreas';
import { Provider } from 'react-redux'

const Tab = createBottomTabNavigator();

const App = () => {

  const { store, persistor } = state;

  let MatchingNavigator = createNativeStackNavigator();
  const UserContext = React.createContext({
    name: "",
  });

  let MatchingStack = () => {
    return (
      <MatchingNavigator.Navigator
        screenOptions={
          {
            headerShown: true,
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                  case 'Home':
                    iconName = 'house-user';
                    break;
                  case 'Journaling':
                    iconName = 'pen';
                    break;
                  case 'Matching':
                    iconName = 'users';
                    break;
                  case 'Challenges':
                    iconName = 'mountain';
                    break;

                }



                // You can return any component that you like here!
                return <FontAwesome5 name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'navy',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Matching" component={MatchingStack} />
            <Tab.Screen name="Journaling" component={Home} />
            <Tab.Screen name="Challenges" component={Home} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
