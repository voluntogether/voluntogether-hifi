import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import wording from 'assets/wording';

let pageWording = wording.matched.getMatched;
let GetMatched = ({ navigation, name }) => {
    return (
        <View>
            <Text> {pageWording.header} </Text>
            <Text> {(name == 'Emily' ? pageWording.bodyEmily : pageWording.bodyNathan)} </Text>
            {/* add a blue box behind the image  */}
            {(name == 'Emily' ? <Image source={require('./assets/images/emily.svg')}/> : <Image source={require('./assets/images/nathan.svg')}/>)}
            <Button label={pageWording.buttonAccept} onPress={() => navigation.navigate('ProfileVolunteerAreas')} />
            <Button label={pageWording.buttonReject} onPress={() => navigation.navigate('ProfileVolunteerAreas')} />
        </View>
    );
}

export default GetMatched