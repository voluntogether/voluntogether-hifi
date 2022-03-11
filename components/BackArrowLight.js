import React from "react";
import { View } from "react-native-ui-lib";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
let BackArrowLight = ({ navigation }) => {
    return (
        <>
            <View marginB-20 />
            <View marginT-30 marginL-5 left top>
                <FontAwesome5 name="arrow-left" size={20} color="#F7FDF8" onPress={() => navigation.goBack()} />
            </View>
        </>
    );
}

export default BackArrowLight;
