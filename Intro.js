/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import { Incubator, Text, View, Button } from "react-native-ui-lib";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import ChallengeJoined from './pages/Challenges/ChallengeJoined';
import ExpandChallenge from './pages/Challenges/ExpandChallenge';
import ViewChallenges from './pages/Challenges/ViewChallenges';
import Home from './pages/Home';
import CreateThread from './pages/Journaling/CreateThread';
import ExpandThread from './pages/Journaling/ExpandThread';
import JournalHome from './pages/Journaling/JournalHome';
import ViewPromptCategories from './pages/Journaling/ViewPromptCategories';
import ViewPrompts from './pages/Journaling/ViewPrompts';
import ViewThreads from './pages/Journaling/ViewThreads';
import GetMatched from './pages/Matching/GetMatched';
import GetMatchedIntro from './pages/Matching/GetMatchedIntro';
import GetNewMatch from './pages/Matching/GetNewMatch';
import InviteFriend from './pages/Matching/InviteFriend';
import MatchingAlgorithm from './pages/Matching/MatchingAlgorithm';
import MatchingChat from './pages/Matching/MatchingChat';
import MatchingComplete from './pages/Matching/MatchingComplete';
import MatchingIntro from './pages/Matching/MatchingIntro';
import OrganizationMatch from './pages/Matching/OrganizationMatch';
import ProfileAvailability from './pages/Matching/ProfileAvailability';
import ProfileVolunteerAreas from './pages/Matching/ProfileVolunteerAreas';
import ReconsiderMatching from './pages/Matching/ReconsiderMatching';
import { rename, toggleOnboarding } from './state/userSlice';

import OnboardBlob1 from "./assets/blobs/onboard1.svg"
import OnboardBlob2 from "./assets/blobs/onboard2.svg"
import OnboardBlob3 from "./assets/blobs/onboard3.svg"
import OnboardBlob4 from "./assets/blobs/onboard4.svg"
import OnboardBlob5 from "./assets/blobs/onboard5.svg"
import { Circle } from 'react-native-svg';
import Styles from "./Style"


const { TextField } = Incubator;





const Intro = () => {

    const Tab = createBottomTabNavigator();

    let MatchingStack = () => {

        let MatchingNavigator = createNativeStackNavigator();

        return (
            <MatchingNavigator.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    // gestureResponseDistance: 150
                }}
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

    let JournalingStack = () => {

        let JournalingNavigator = createNativeStackNavigator();

        return (

            <JournalingNavigator.Navigator
                screenOptions={() => ({
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    header: ({ navigation, route, options, back }) => {

                        return (
                            <View>
                                <Text> HELLO</Text>
                                {/* <Button label={'<'} bold nonBlackBlack style={[Styles.yellowButton]} onPress={ navigation.goBack} /> */}
                            </View>

                        );
                    }
                })}
            >
                <JournalingNavigator.Screen name="JournalHome" component={JournalHome} />
                <JournalingNavigator.Screen name="ViewThreads" component={ViewThreads} />
                <JournalingNavigator.Screen name="ViewPromptCategories" component={ViewPromptCategories} />
                <JournalingNavigator.Screen name="ViewPrompts" component={ViewPrompts} />
                <JournalingNavigator.Screen name="CreateThread" component={CreateThread} />
                <JournalingNavigator.Screen name="ExpandThread" component={ExpandThread} />

            </JournalingNavigator.Navigator >
        );

    }

    let ChallengesStack = () => {

        let ChallengesNavigator = createNativeStackNavigator();

        return (

            <ChallengesNavigator.Navigator
                screenOptions={() => ({
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                })}
            >
                <ChallengesNavigator.Screen name="ViewChallenges" component={ViewChallenges} />
                <ChallengesNavigator.Screen name="ExpandChallenge" component={ExpandChallenge} />
                <ChallengesNavigator.Screen name="ChallengeJoined" component={ChallengeJoined} />

            </ChallengesNavigator.Navigator >
        );

    }

    const MainNavigation = () => (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    keyboardHidesTabBar: false,
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
                    tabBarActiveTintColor: '#345f93',
                    tabBarInactiveTintColor: 'gray',
                    // THIS IS CAUSING WEIRD LINE BUG
                    tabBarStyle: {
                        paddingTop: 10,
                        backgroundColor: '#fff',
                    }
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Matching" component={MatchingStack} />
                <Tab.Screen name="Journaling" component={JournalingStack} />
                <Tab.Screen name="Challenges" component={ChallengesStack} />
            </Tab.Navigator>
        </NavigationContainer>);


    let Onboarder = () => {

        let dispatch = useDispatch();

        return (<Onboarding
            onDone={() => {
                setIsOnboarding(false)
                dispatch(toggleOnboarding())
            }}
            showSkip={false}
            // DotComponent={({ selected }) => {
            //     console.log(selected)
            //     return selected ? <Button style={[Styles.yellowButton, Styles.boxShadow]} size={1} onPress={() => { }} /> : <Text>N</Text>
            // }}
            DoneButtonComponent={(sumthin) => {
                console.log(sumthin)
                return <Button style={[Styles.yellowButton, Styles.boxShadow]} label={"✓"} size={1} onPress={sumthin.onPress} />
            }}
            pages={[
                {
                    backgroundColor: '#f4f4f4',
                    title: 'Welcome to voluntogether!',
                    image: <OnboardBlob1 width={250} height={250} />,
                    subtitle: <Text style={{ color: '#4A4A4A', fontSize: 16 }} center marginH-s4 >We are happy to see you taking a step towards bettering your community.</Text>,
                },
                {
                    backgroundColor: '#f4f4f4',
                    subtitle: <Text style={{ color: '#4A4A4A', fontSize: 16 }} center marginH-s4 >In voluntogether, you get matched with a partner who has similar goals as you.</Text>,
                    image: <OnboardBlob2 width={250} height={250} />,
                },
                {
                    backgroundColor: '#f4f4f4',
                    subtitle: <Text style={{ color: '#4A4A4A', fontSize: 16 }} center marginH-s4 >Then, work together to volunteer at an organization related to your interests, and come back to the app to reflect on your experience.</Text>,
                    image: <OnboardBlob3 width={250} height={250} />,
                },
                {
                    backgroundColor: '#f4f4f4',
                    subtitle: <Text style={{ color: '#4A4A4A', fontSize: 16 }} center marginH-s4>If you are looking for some inspiration, you can find community challenges to join!</Text>,
                    image: <OnboardBlob4 width={250} height={250} />,
                },
                {
                    backgroundColor: '#345F93',
                    subtitle: <Text style={{ color: '#FFFFFF', fontSize: 16 }} center marginH-s4>Partner journal to better connect, reflect, and serve your community.</Text>,
                    image: <><Text style={{ color: '#FFFFFF', fontSize: 16 }} center marginH-s4>Now go voluntogether!</Text><OnboardBlob5 width={250} height={250} /></>,
                },
                {
                    backgroundColor: '#345F93',
                    //title: '',
                    image: <><Text style={{ color: '#FFFFFF', fontSize: 20 }} center marginH-s4>Welcome!</Text><OnboardBlob5 width={250} height={250} /></>,
                    subtitle: (<View>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }} center marginH-s4>How would you liked to be called?</Text>
                        <TextField
                            style={{ color: '#FFFFFF', fontSize: 16 }} center marginH-s4
                            placeholder={'Your Name'}
                            floatingPlaceholder
                            onChangeText={(message) => dispatch(rename(message))}

                        />
                    </View>),
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
