import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import Styles from "../../Style.js";


let GetMatched = ({ navigation, name }) => {
    return (
        <View centerH>
            <Text> Chat with {navigation, name, organziation} </Text>
            <Text> We recommend that you and {name} volunteer at {organization}. However, if you feel strongly, you can also discuss
             and select another organization yourselves. </Text>
             <View>
                 {/* <image> </image> */}
                 <Text> {name} </Text>
             </View>
             <Text> Hey, let's volunteer at {organization} soon. You down? </Text>
        </View>
    );
}

export default GetMatched
