import React, { useCallback, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { Button, Card, Text, View } from "react-native-ui-lib";
import { useDispatch } from 'react-redux';
import BackArrow from "../../components/BackArrow.js";
import { addJournalPrompt } from "../../state/journalingSlice";
import Styles from "../../Style.js";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



let CreateThread = ({ navigation, route }) => {

    const { prompt, id } = route.params;

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

                        <Card marginT-s6 style={[Styles.blueCardPrompt, Styles.boxShadow]} centerH>
                            <View centerH>
                            <FontAwesome5 name={'dumbbell'} size={30} color={"#FFFFFF"}/>
                            <Text center bigBody marginT-s4>{prompt}</Text>
                            {/* <Text bigBody marginT-s4>Prompt: {prompt.prompt}</Text> */}
                            </View>
                        </Card>

                        {/* <Button label={'Skip chat'} style={[Styles.smallGreenButton, Styles.boxShadow]} onPress={() => navigation.navigate('MatchingComplete')} /> */}
                    </View>

                </View>
            </TouchableWithoutFeedback>

            <GiftedChat
                renderInputToolbar={renderInputToolbar}
                messages={messages}
                onSend={messages => {
                    Keyboard.dismiss();
                    dispatch(addJournalPrompt({
                        id: id,
                        prompt: {
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
                    }

                    ))
                    navigation.navigate('ViewThreads', {
                        id: id
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
