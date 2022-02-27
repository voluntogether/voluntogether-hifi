import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
// import { View, Text } from 'react-native-ui-lib';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



let Home = ({ navigation }) => {



    return (
        <View>
            <Text>Home</Text>
            <FontAwesome5 name={'check'}
                size={30}
                color={"#000"} />
            <Button onPress={() => navigation.navigate('Matching')} title="Go to Matching Intro" />



        </View>
    )
};


export default Home