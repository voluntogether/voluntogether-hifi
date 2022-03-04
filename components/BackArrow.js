import React from "react";
import { View, Text, Button, Incubator } from "react-native-ui-lib";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
let BackArrow = ({ navigation }) => {
    return (
        <>
            <View marginB-20 />
            <View marginT-30 marginL-5 left top>
                <FontAwesome5 name="arrow-left" size={20} color="black" onPress={() => navigation.goBack()} />
            </View>
        </>
    );
}

export default BackArrow;