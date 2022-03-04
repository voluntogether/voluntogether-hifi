import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import Styles from "../../Style.js";


let MatchingChat = ({ navigation, route }) => {
    const { name, organization } = route.params;
    return (
        <View flex padding-page centerH>
            <Text heading center nonBlackBlack marginB-s4>Chat with {name}</Text>

            <Text italic fadedSubtext>We recommend that you and {name} volunteer at {organization}. However, if you feel strongly, you can also discuss
             and select another organization yourselves.</Text>
             <View>
                 <Text> {name} </Text>
             </View>
             <Text> Hey, let's volunteer at {organization} soon. You down? </Text>

             <Button label={'next (temp)'} onPress={() => navigation.navigate('MatchingComplete')} />

            {/* <Button label={'next (temp)'} onPress={() => navigation.navigate('MatchingComplete')}/> */}
        </View>
    );
}

export default MatchingChat
