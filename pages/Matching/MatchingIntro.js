import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";


let MatchingIntro = ({ navigation }) => {
    return (
        <View>
            <Text> Connect </Text>
            <Text> There are two ways to connect with other people on voluntogether. You can either invite a friend
                nor match with a stranger who is already on the app.</Text>
            <Button label={'Get matched'} onPress={() => navigation.navigate('GetMatchedIntro')} />
            <Button label={'Invite a friend'} />
            <Text>{useSelector((state) => state.user.name)}</Text>
        </View>
    );
}

export default MatchingIntro;