import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";



let MatchingComplete = ({ navigation }) => {
    return (
        <View centerH>
            <Text> Have fun volunteering! </Text>
            <Text>
                Congratulations on matching with a partner and organization!
                For this prototype, please imagine you coordinated, met up, and volunteered together. After this, you would re-open voluntogether.
            </Text>
            {/* <Image source={require('/assets/blobs/match-11-blob.svg')}/> */}
            <Button label={'Back to homepage'} onPress={() => navigation.navigate('GetMatchedIntro')} />
        </View>
    );
}

export default MatchingComplete;
