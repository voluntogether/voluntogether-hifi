import React from "react";
import { View, Text, Button, Incubator } from "react-native-ui-lib";
// import { View, Text } from 'react-native-ui-lib';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux'
import { rename, toggleOnboarding } from "../state/userSlice";

let TextField = Incubator.TextField;

let Home = ({ navigation }) => {


    let userName = useSelector(state => state.user.name);
    let dispatch = useDispatch();

    return (
        <View>
            <Text>Home</Text>
            <FontAwesome5 name={'check'}
                size={30}
                color={"#000"} />
            <Button onPress={() => navigation.navigate('Matching')} label="Go to Matching Intro" />
            <TextField
                placeholder={'Placeholder'}
                floatingPlaceholder
                onChangeText={(text) => dispatch(rename(text))}
                enableErrors
                showCharCounter
                maxLength={30}
            />
            <Text>{userName}</Text>
            <Button label="reonboard" onPress={() => dispatch(toggleOnboarding())} />


        </View>
    )
};


export default Home