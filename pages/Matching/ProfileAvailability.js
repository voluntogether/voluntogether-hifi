import React from "react";
import _ from "underscore";
import { View, Text, Image, Button, Picker } from "react-native-ui-lib";



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

    return (
        <View>
            <Text> Make Your Profile </Text>
            <Text> Tap to select the times that you are generally free.</Text>
            {/* <Image source={require('/assets/blobs/match-3-blob.svg')}/> */}


            {/* <Picker
                placeholder={'Placeholder'}
                onChange={() => console.log('changed')}>
                {
                    times.map((item, index) => <Picker.Item index={index} value={item} />)}
            </Picker> */}

            {_.map(times, time => (
                <Text key={time.value}>{time}</Text>
            ))}

            <Picker
                marginT-20
                placeholder="Favorite Languages (up to 3)"
                value={"abc"}
                onChange={items => this.setState({ languages: items })}
                mode={Picker.modes.MULTI}
                selectionLimit={3}
            >
                {_.map(options, option => (
                    <Picker.Item key={option.value} value={option} disabled={option.disabled} />
                ))}
            </Picker>
        </View >
    );
}

export default ProfileVolunteerAreas;