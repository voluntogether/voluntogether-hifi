import React from "react";
import { View, Text, Image, Button, Card, StyleSheet } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";


let MatchingIntro = ({ navigation }) => {
    return (
        <View flex padding-page>
            <Text heading center nonBlackBlack marginB-s4>Connect</Text>
            <Text body fadedSubtext marginB-s4 center>
                There are two ways to connect with other people on voluntogether. You can either invite a friend or match with a stranger who is already on the app.
            </Text>

            <View style={{ marginHorizontal: 15, alignContent:'space-between'}}>
                <Card height={300} center padding-card marginB-s4>
                    <Text heading center todo> ADD BLOB HERE!!!! </Text>
                </Card>

                {/* FIGURE OUT SHADOWS FOR BUTTONS  */}
                <Button backgroundColor={'#9DB865'} label={'Get matched'} onPress={() => navigation.navigate('GetMatchedIntro')} marginB-s4 />
                <Button backgroundColor={'#9DB865'} label={'Invite a friend'} marginB-s4 />
            </View>
            { /* <Text>{useSelector((state) => state.user.name)}</Text> */ }
        </View>
    );
}

export default MatchingIntro;
