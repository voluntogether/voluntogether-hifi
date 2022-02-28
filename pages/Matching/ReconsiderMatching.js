import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";


let ReconsiderMatching = ({ navigation }) => {
    return (
        <View>
            <Text> Get Matched </Text>
            <Text> Picky, aren’t you? Unfortunately our prototype has a limited number of partners for you to match with. Why don’t you reconsider Emily? </Text>
            <Image source={require('./assets/blobs/match-8-blob.svg')}/>
        </View>
    );
}

export default ReconsiderMatching