/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from '@react-navigation/elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import state from './state/store';
import { PersistGate } from 'redux-persist/integration/react'
import { useSelector, useDispatch } from 'react-redux'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from './pages/Home';
import MatchingIntro from './pages/Matching/MatchingIntro';
import 'react-native-gesture-handler';
import { testable } from 'react-native-ui-lib/generatedTypes/src/components/featureHighlight';
import GetMatchedIntro from './pages/Matching/GetMatchedIntro';
import ProfileAvailability from './pages/Matching/ProfileAvailability';
import ProfileVolunteerAreas from './pages/Matching/ProfileVolunteerAreas';
import GetMatched from './pages/Matching/GetMatched'
import MatchingAlgorithm from './pages/Matching/MatchingAlgorithm'
import MatchingChat from './pages/Matching/MatchingChat'
import MatchingComplete from './pages/Matching/MatchingComplete'
import OrganizationMatch from './pages/Matching/OrganizationMatch'
import ReconsiderMatching from './pages/Matching/ReconsiderMatching'
import GetNewMatch from './pages/Matching/GetNewMatch'
import InviteFriend from './pages/Matching/InviteFriend'

import { Provider } from 'react-redux'
import { Button, View, Text } from "react-native-ui-lib";

import { toggleOnboarding } from './state/userSlice';

import Onboarding from 'react-native-onboarding-swiper';


const Intro = () => {

    const Tab = createBottomTabNavigator();

    let MatchingStack = () => {

        let MatchingNavigator = createNativeStackNavigator();

        return (
            <MatchingNavigator.Navigator
            // screenOptions={() => ({
            //   // headerShown: false,
            //   header: ({ navigation, route, options, back }) => {


            //     return (
            //       <View>
            //         <Text>
            //           {route.name}asdfasdfadsssssssssssssssssssssssssssssssssssssss

            //         </Text>
            //         { back ? <Button onPress={navigation.goBack} /> : undefined}
            //       </View>
            //     );
            //   }
            // })}

            >

                <MatchingNavigator.Screen name="MatchingIntro" component={MatchingIntro} />
                <MatchingNavigator.Screen name="InviteFriend" component={InviteFriend} />
                <MatchingNavigator.Screen name="GetMatchedIntro" component={GetMatchedIntro} />
                <MatchingNavigator.Screen name="ProfileAvailability" component={ProfileAvailability} />
                <MatchingNavigator.Screen name="ProfileVolunteerAreas" component={ProfileVolunteerAreas} />
                <MatchingNavigator.Screen name="GetNewMatch" component={GetNewMatch} />
                <MatchingNavigator.Screen name="GetMatched" component={GetMatched} />
                <MatchingNavigator.Screen name="MatchingAlgorithm" component={MatchingAlgorithm} />
                <MatchingNavigator.Screen name="MatchingChat" component={MatchingChat} />
                <MatchingNavigator.Screen name="MatchingComplete" component={MatchingComplete} />
                <MatchingNavigator.Screen name="OrganizationMatch" component={OrganizationMatch} />
                <MatchingNavigator.Screen name="ReconsiderMatching" component={ReconsiderMatching} />
            </MatchingNavigator.Navigator >
        );

    }

    const MainNavigation = () => (<NavigationContainer>
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
    </NavigationContainer>);


    let Onboarder = () => {

        let dispatch = useDispatch();

        return (<Onboarding
            onDone={() => {
                setIsOnboarding(false)
                dispatch(toggleOnboarding())
            }}
            pages={[
                {
                    backgroundColor: '#fff',
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fe6e58',
                    title: 'The Title',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor: '#999',
                    title: 'Triangle',
                    subtitle: "Beautiful, isn't it?",
                },
            ]}
        />)

    }









    let initOnboarding = useSelector(state => state.user.isOnboarding);
   let [isOnboarding, setIsOnboarding] = useState(true);


    useEffect(() => {

        setIsOnboarding(initOnboarding)

    }, [initOnboarding])

    return (<>
        {
            isOnboarding ? <Onboarder /> : <MainNavigation />
        }
    </>);

}



export default Intro