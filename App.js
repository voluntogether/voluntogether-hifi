/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import state from './state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector, useDispatch } from 'react-redux';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from './pages/Home';
import MatchingIntro from './pages/Matching/MatchingIntro';
import 'react-native-gesture-handler';
import { testable } from 'react-native-ui-lib/generatedTypes/src/components/featureHighlight';
import GetMatchedIntro from './pages/Matching/GetMatchedIntro';
import ProfileAvailability from './pages/Matching/ProfileAvailability';
import ProfileVolunteerAreas from './pages/Matching/ProfileVolunteerAreas';
import GetMatched from './pages/Matching/GetMatched';
import MatchingAlgorithm from './pages/Matching/MatchingAlgorithm';
import MatchingChat from './pages/Matching/MatchingChat';
import MatchingCompelete from './pages/Matching/MatchingComplete';
import OrganizationMatch from './pages/Matching/OrganizationMatch';
import ReconsiderMatching from './pages/Matching/ReconsiderMatching';
import GetNewMatch from './pages/Matching/GetNewMatch';
import { Provider } from 'react-redux';
import { StyleSheet } from "react-native";
import { Button, View, Text, Colors, Card, Typography, Spacings } from "react-native-ui-lib";
import Intro from "./Intro";

import Onboarding from 'react-native-onboarding-swiper';



const App = () => {

  const { store, persistor } = state;

  Colors.loadColors({
    background: '#f4f4f4',
    deeperMatcha: '#9DB865',
    nonBlackBlack: '#10123D',
    fadedSubtext: '#413D45',
    lightBlue: '#A4C1E3',
    darkBlue: '#345F93',
    backgroundOffWhite: '#F7FDF8',
    nonWhiteWhite: '#F7FDF8',
    todo: '#FF0000'
  });

  Typography.loadTypographies({
    megaHeading: { fontSize: 35, fontWeight: '600' },
    heading: { fontSize: 25, fontWeight: '600' },
    subHeading: { fontSize: 18, fontWeight: '600' },
    buttonArrow: { fontSize: 18, fontWeight: "600" },
    buttonText: { fontSize: 16, fontWeight: '400' },
    body: { fontSize: 14, lineHeight: 21, fontWeight: '400' },
    bigBody: { fontSize: 16, lineHeight: 21, fontWeight: '600' },
    italic: { fontStyle: "italic" },
    bold: { fontWeight: "bold" }
  });

  Spacings.loadSpacings({
      page: 20,
      card: 12,
      gridGutter: 16
    });


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Intro />
      </PersistGate>
    </Provider>
  );
};

export default App;
