import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import { TextInput, Keyboard, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Styles from "../../Style.js";
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import DismissKeyboardView from "../../components/DismissKeyboardView.js";
import BackArrow from "../../components/BackArrow.js";
import { useSelector, useDispatch } from 'react-redux';
import { updateJournal } from "../../state/journalingSlice";


let CreateThread = ({ navigation, route }) => {

    const { prompt, journal } = route.params;

    const dispatch = useDispatch();

    const [messages, setMessages] = useState([]);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    function renderInputToolbar(props) {
        return (
            <InputToolbar {...props} containerStyle={{
                backgroundColor: "#f4f4f4",
            }} accessoryStyle={{}} />
        )
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View flex padding-page>
                    <BackArrow navigation={navigation} />

                    <View centerH>
                        <View>
                            <Text style={[Styles.spacer]}> </Text>
                        </View>

                        <Text heading center nonBlackBlack marginB-s4>New Entry</Text>

                        <Text center italic fadedSubtext marginB-s8 > {prompt} </Text>

                        <Button label={'Skip chat'} style={[Styles.smallGreenButton, Styles.boxShadow]} onPress={() => navigation.navigate('MatchingComplete')} />
                    </View>

                </View>
            </TouchableWithoutFeedback>

            <GiftedChat
                renderInputToolbar={renderInputToolbar}
                messages={messages}
                onSend={messages => {
                    Keyboard.dismiss();
                    console.log(messages);
                    let journalClone = journal;
                    journalClone.prompts.push(
                        {
                            prompt: prompt,
                            icon: "arrow-left",
                            responses: [{
                                message: {
                                    
                                        user: 1,
                                        body: messages[0].text
                                },
                                replies: []
                            }]
                        }
                    )

                    dispatch(updateJournal(journalClone))
                    navigation.navigate('ViewThreads', {
                        journal: journalClone
                    });
                }}
                user={{
                    _id: 1,
                }}
            />
        </>


    );
}

export default CreateThread

