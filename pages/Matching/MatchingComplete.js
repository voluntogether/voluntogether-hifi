import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import Styles from "../../Style.js";



let MatchingComplete = ({ navigation }) => {
    return (
        <View flex padding-page centerH>
            <Text heading center nonBlackBlack marginB-s4>Have fun volunteering!</Text>
            <Text body fadedSubtext marginB-s8>
                Congratulations on matching with a partner and organization!
                For this prototype, please imagine you coordinated, met up, and volunteered together. After this, you would re-open voluntogether.
            </Text>
            {/* <Image source={require('/assets/blobs/match-11-blob.svg')}/> */}
            <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Back to homepage'} onPress={() => navigation.navigate('GetMatchedIntro')} />
        </View>
    );
}

export default MatchingComplete;

// blob, white text, yellow button
