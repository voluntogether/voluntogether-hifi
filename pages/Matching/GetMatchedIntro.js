import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
// import wording from 'assets/wording';
// let pageWording = wording.matched.getMatchedIntro;


let GetMatchedIntro = ({ navigation }) => {
    return (
        <View flex padding-page>
            <Text heading center nonBlackBlack marginB-s4> Get Matched </Text>
            <Text body fadedSubtext marginB-s4 center> 
                    To be matched with another volunteer, first create a profile so our algorithm can work its magic ✨ 
            </Text>

            <View style={{ marginHorizontal: 15, alignContent:'space-between'}}>
                <Card height={300} center padding-card marginB-s4> 
                    <Text heading center todo> ADD BLOB HERE!!!! </Text>
                </Card> 
                <Button backgroundColor={'#9DB865'} label={'Complete profile'} onPress={() => navigation.navigate('ProfileVolunteerAreas')} />
             </View>

        </View>
    );
}

export default GetMatchedIntro