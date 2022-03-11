import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Circle, G, Rect } from 'react-native-svg';
import { Button, Text, View, Incubator } from "react-native-ui-lib";
import _ from "underscore";
import BackArrow from "../../components/BackArrow.js";
import Styles from "../../Style.js";

let Toast = Incubator.Toast

let ProfileAvailability = ({ navigation }) => {

    const options = [
        { label: 'JavaScript', value: 'js', disabled: false },
        { label: 'Java', value: 'java', disabled: false },
        { label: 'Python', value: 'python' },
        { label: 'C++', value: 'c++', disabled: true },
        { label: 'Perl', value: 'perl' }
    ];


    // let timesMorning = [
    //     'Mon morning',
    //     'Tue morning',
    //     'Wed morning',
    //     'Thu morning',
    //     'Fri morning',
    //     'Sat morning',
    //     'Sun morning',
    // ]

    let daysLeft = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
    ]

    let daysMid = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
    ]

    let daysRight = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
    ]

    const [selectedLeft, setSelectedLeft] = React.useState([]);
    const [selectedMid, setSelectedMid] = React.useState([]);
    const [selectedRight, setSelectedRight] = React.useState([]);
    const [toast, setToast] = React.useState(false);


    const handlePressLeft = day =>
        selectedLeft.includes(day) ? setSelectedLeft(selectedLeft.filter(s => s !== day)) : setSelectedLeft([...selectedLeft, day]);

    const handlePressMid = day =>
        selectedMid.includes(day) ? setSelectedMid(selectedMid.filter(s => s !== day)) : setSelectedMid([...selectedMid, day]);

    const handlePressRight = day =>
        selectedRight.includes(day) ? setSelectedRight(selectedRight.filter(s => s !== day)) : setSelectedRight([...selectedRight, day]);

    return (
        <View flex padding-page>
            <BackArrow navigation={navigation} />

            <Text heading center nonBlackBlack marginB-s4>Make Your Profile</Text>
            <Text center={true} body fadedSubtext marginB-s4>Tap to select the times that you are generally free.</Text>

            <View center marginB-s4 style={[Styles.boxShadow]}>
                <Svg width="339" height="154" viewBox="0 0 339 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G filter="url(#filter0_d_192_7040)">
                        <Rect x="4" width="331" height="146" rx="12" fill="#A4C1E3" />
                    </G>
                    <Circle cx="74.5" cy="75.5" r="33.5" fill="#C1E3A4" />
                    <Circle cx="266.5" cy="75.5" r="33.5" fill="#A4E3C6" />
                    <Circle cx="170.5" cy="75.5" r="33.5" fill="#EAF3D7" />
                </Svg>
            </View>

            <View paddingLeft={16} paddingRight={15} flexDirection={'row'} justifyContent={'space-between'}>
                <View flexDirection={'column'} centerH>
                    <Text subHeading>Morning</Text>
                    <View>
                        {_.map(daysLeft, day => (
                            <View marginT-s3 centerH>
                                <Button fullWidth={false} size={Button.sizes.small} onPress={() => handlePressLeft(day)} backgroundColor={selectedLeft.includes(day) ? '#C4C4C4' : '#F4F4F4'} outlineColor={'black'}>
                                    <Text key={day.value}>{day}</Text>
                                </Button>
                            </View>
                        ))}
                    </View>
                </View>

                <View flexDirection={'column'} centerH bold>
                    <Text subHeading>Afternoon</Text>
                    <View>
                        {_.map(daysMid, day => (
                            <View marginT-s3 centerH>
                                <Button fullWidth={false} size={Button.sizes.small} onPress={() => handlePressMid(day)} backgroundColor={selectedMid.includes(day) ? '#C4C4C4' : '#F4F4F4'} outlineColor={'black'}>
                                    <Text key={day.value}>{day}</Text>
                                </Button>
                            </View>
                        ))}
                    </View>
                </View>

                <View flexDirection={'column'} centerH bold>
                    <Text subHeading>Evening</Text>
                    <View>
                        {_.map(daysRight, day => (
                            <View marginT-s3 centerH>
                                <Button fullWidth={false} size={Button.sizes.small} onPress={() => handlePressRight(day)} backgroundColor={selectedRight.includes(day) ? '#C4C4C4' : '#F4F4F4'} outlineColor={'black'}>
                                    <Text key={day.value}>{day}</Text>
                                </Button>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            <View flex right bottom>
                {selectedLeft.length > 0 || selectedMid.length > 0 || selectedRight.length > 0 ?
                    <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"➔"} onPress={() => navigation.navigate('MatchingAlgorithm', {
                        rematch: false
                    })} /> :
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
                message={'Please select at least one time'}
                centerMessage={true}
                onDismiss={() => setToast(false)}
            />


        </View >
    );
}

const Flex = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15
    },
    col: {
        flex: 1
    }
});

export default ProfileAvailability;
