import React, { useState, useEffect } from "react";
import { View, Text, Button, Incubator } from "react-native-ui-lib";
// import { View, Text } from 'react-native-ui-lib';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux'
import { rename, toggleOnboarding } from "../state/userSlice";
import { Keyboard, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import DismissKeyboardView from '../components/DismissKeyboardView'


let TextField = Incubator.TextField;

let Home = ({ navigation }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        inner: {
            padding: 24,
            flex: 1,
            justifyContent: "space-around"
        },
        header: {
            fontSize: 36,
            marginBottom: 48
        },
        textInput: {
            height: 40,
            borderColor: "#000000",
            borderBottomWidth: 1,
            marginBottom: 36
        },
        btnContainer: {
            backgroundColor: "white",
            marginTop: 12
        }
    });


    let userName = useSelector(state => state.user.name);
    let dispatch = useDispatch();


    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  

    useEffect(() => {
       
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus("Keyboard Shown");
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus("Keyboard Hidden");
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);


    return (
        <DismissKeyboardView>

            <View>
                <Text>Home</Text>
                <FontAwesome5 name={'check'}
                    size={30}
                    color={"#000"} />
                <Button onPress={() => navigation.navigate('MatchingIntro')} label="Go to Matching Intro" />
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
                <Text>{"Hi"}</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View >
                        <View>
                            <TextInput
                                placeholder='Click here…'
                                onSubmitEditing={Keyboard.dismiss}
                            // keyboardType="numeric"
                            />
                        </View>
                    </View>

                </KeyboardAvoidingView>
                <Text>{keyboardStatus}</Text>

            </View >
        </DismissKeyboardView >

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12
    }
});


export default Home
