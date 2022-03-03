import React from "react";
import _, { map } from "underscore";
import { View, Text, Image, Button, Picker, TouchableOpacity } from "react-native-ui-lib";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';


let ProfileVolunteerAreas = ({ navigation }) => {

    const options = [
        { label: 'JavaScript', value: 'js', disabled: false },
        { label: 'Java', value: 'java', disabled: false },
        { label: 'Python', value: 'python' },
        { label: 'C++', value: 'c++', disabled: true },
        { label: 'Perl', value: 'perl' }
    ];

    let times = [
        'Mon morning',
        'Tue morning',
        'Wed morning',
        'Thu morning',
        'Fri morning',
        'Sat morning',
        'Sun morning',
        'Mon afternoon',
        'Tue afternoon',
        'Wed afternoon',
        'Thu afternoon',
        'Fri afternoon',
        'Sat afternoon',
        'Sun afternoon']



        const [selected, setSelected] = React.useState([]);
        const handlePress = time =>
        selected.includes(time) ? setSelected(selected.filter(s => s !== time)) : setSelected([...selected, time]);


    return (
        <View flex padding-page>
            <Text heading center nonBlackBlack marginB-s4> Make Your Profile </Text>
            <Text center={true} body fadedSubtext marginB-s4  marginT-s6> Tap to select the times that you are generally free.</Text>

        <View center marginB-s4>
            <Svg width="339" height="154" viewBox="0 0 339 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G filter="url(#filter0_d_192_7040)">
            <Rect x="4" width="331" height="146" rx="12" fill="#A4C1E3"/>
            </G>
            <Circle cx="74.5" cy="75.5" r="33.5" fill="#C1E3A4"/>
            <Circle cx="266.5" cy="75.5" r="33.5" fill="#A4E3C6"/>
            <Circle cx="170.5" cy="75.5" r="33.5" fill="#EAF3D7"/>
            </Svg>
        </View>

        <Button label={'next (temp)'} onPress={() => navigation.navigate('MatchingAlgorithm', {
            rematch: false
        })}/>
            
            {_.map(times, time => (
                <View marginT-s3>
                    <Button fullWidth={false} size={Button.sizes.xSmall} onPress={() => handlePress(time)} backgroundColor={selected.includes(time) ? 'gray' : 'white'} outlineColor={'black'}>
                        <Text key={time.value}>{time}</Text>
                    </Button>
                </View>
                ))}     


        </View >
    );
}

export default ProfileVolunteerAreas;