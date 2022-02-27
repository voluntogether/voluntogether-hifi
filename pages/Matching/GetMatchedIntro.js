import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";



let GetMatchedIntro = ({ navigation }) => {
    return (
        <View>
            <Text> Get Matched</Text>
            <Text> To be matched with another volunteer, first create a profile so our algorithm can work its magic ✨ </Text>
            <Button label={'Complete profile'} onPress={() => navigation.navigate('ProfileVolunteerAreas')} />
        </View>
    );
}

export default GetMatchedIntro