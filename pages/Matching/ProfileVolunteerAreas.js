import React, { useState } from "react";
import { TouchableHighlight, Keyboard, ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { View, Text, Image, Button, Incubator, Card, TouchableHigh } from "react-native-ui-lib";
import Svg, { Path, G, Rect } from 'react-native-svg';
import { useSelector, useDispatch } from "react-redux";
import _, { map, size } from "underscore";
import { setInterestArea } from "../../state/userSlice";
import Styles from "../../Style.js";
import BackArrow from "../../components/BackArrow.js";

let Toast = Incubator.Toast
let ChipsInput = Incubator.ChipsInput

let ProfileVolunteerAreas = ({ navigation }) => {

    let dispatch = useDispatch();


    let interestsLeft = [
        '       🏀 Sports       ',
        '   💻 Technology   ',
        '🐳 Animal Welfare',
        '    📚 Education     ',

    ]

    let interestsRight = [
        '      🏥 Health        ',
        '     🎭 The Arts      ',
        '     📋 Politics        ',
        '  🥗 Sustainability  '
    ]

    const [selected, setSelected] = React.useState([]);
    const [interestAreaLocal, setInterestAreaLocal] = React.useState('');
    const [toast, setToast] = React.useState(false);

    // const [chosen, setChosen] = React.useState([false, false, false, false,]);
    const handlePress = interest => {

        selected.includes(interest) ? setSelected(selected.filter(s => s !== interest)) : setSelected([...selected, interest]);
        setInterestAreaLocal(interest);
        console.log(selected);
        // console.log(interestAreaLocal);
        // console.log(selected);
    }

    return (

        <View flex padding-page>
            <BackArrow navigation={navigation} />

            <Text heading center nonBlackBlack marginB-s4>Make Your Profile</Text>
            <Text center={true} body fadedSubtext marginB-s4>Tap to select the volunteer areas that interest you.</Text>


            <View center marginB-s4 style={[Styles.boxShadow]}>
                <Svg width="339" height="154" viewBox="0 0 339 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G filter="url(#filter0_d_192_6612)">
                        <Rect x="4" width="331" height="146" rx="12" fill="#A4C1E3" />
                    </G>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M69.1667 31.2602C81.3332 28.5157 95.4451 29.9605 104.424 38.5156C113.489 47.1521 115.205 61.0213 113.305 73.3141C111.649 84.026 103.409 91.8284 95.0899 98.8998C87.5794 105.284 78.9872 112.161 69.1667 110.834C59.9323 109.586 55.4706 99.7908 49.4868 92.7377C44.3411 86.6727 37.8048 81.211 37.3343 73.3141C36.8426 65.0626 42.0151 58.085 47.0274 51.4631C53.2808 43.2017 58.981 33.5579 69.1667 31.2602Z" fill="#C1E3A4" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M164.134 39.0016C176.665 38.8379 183.896 51.4649 187.763 63.3163C191.624 75.1465 192.513 88.6832 182.972 96.7272C170.972 106.844 152.952 112.825 140.74 102.961C129.496 93.879 137.39 77.4458 142.341 63.9095C146.523 52.476 151.898 39.1614 164.134 39.0016Z" fill="#EAF3D7" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M211.2 76.22C209.325 65.0634 221.005 55.6742 229.959 48.6758C237.445 42.8251 247.838 43.9256 256.762 40.6102C264.841 37.6085 271.314 28.7434 279.824 30.1501C288.342 31.5582 291.489 42.1432 298.254 47.4689C305.458 53.1395 318.594 53.4809 320.734 62.3546C322.907 71.3623 310.987 77.6266 307.612 86.2617C304.647 93.8449 307.787 103.556 302.274 109.575C296.677 115.687 287.376 116.402 279.113 117.38C271.011 118.34 262.626 118.579 255.236 115.146C247.881 111.729 244.386 103.791 238.322 98.4308C229.389 90.5339 213.169 87.9306 211.2 76.22Z" fill="#A4E3C6" />
                </Svg>
            </View>
            <View>

                <View marginB-50 />


                <View style={Flex.container}>
                    <View style={Flex.leftCol}>
                        {_.map(interestsLeft, (interest) => (
                            <View marginT-s3 centerH width={'100%'} margin={5}>
                                <Button fullWidth={false} size={Button.sizes.xSmall} onPress={() => handlePress(interest)} backgroundColor={selected.includes(interest) ? '#C4C4C4' : '#F4F4F4'} outlineColor={'black'}>
                                    <Text key={interest.value}>{interest}</Text>
                                </Button>
                            </View>
                        ))}
                    </View>

                    <View style={Flex.rightCol}>
                        {_.map(interestsRight, interest => (
                            <View marginT-s3 centerH width={'100%'} margin={5}>
                                <Button fullWidth={false} size={Button.sizes.xSmall} onPress={() => handlePress(interest)} backgroundColor={selected.includes(interest) ? '#C4C4C4' : '#F4F4F4'} outlineColor={'black'}>
                                    <Text key={interest.value}>{interest}</Text>
                                </Button>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            <View flex right bottom alignItems={'center'}>
                {
                    selected.length > 0 ? <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={'➔'} onPress={() => {
                        navigation.navigate('ProfileAvailability');
                        dispatch(setInterestArea({ interestArea: interestAreaLocal.trim() }));
                    }

                    } /> :
                        <Button buttonArrow nonBlackBlack style={[Styles.grayButton]} label={'➔'} onPress={() => {

                            setToast(true);


                        }
                        } />
                }
            </View>
            <Toast
                visible={toast}
                position={'top'}
                backgroundColor={"#FF9494"}
                autoDismiss={5000}
                message={'Please select at least one interest area'}
                centerMessage={true}
                onDismiss={() => setToast(false)}
            />
            {/* <Text>{"Please select at least one interest area"}</Text> */}
            {/* </Toast> */}

        </View>
    );
}

const Flex = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    leftCol: {
        flex: 3
    },
    rightCol: {
        flex: 3
    }
});


export default ProfileVolunteerAreas;
