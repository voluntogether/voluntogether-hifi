import React, { useCallback, useState } from "react";
import { Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { Button, Card, Text, View } from "react-native-ui-lib";
import { useDispatch } from 'react-redux';
import BackArrow from "../../components/BackArrow.js";
import { addJournalPrompt } from "../../state/journalingSlice";
import Styles from "../../Style.js";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



let CreateThread = ({ navigation, route }) => {

    const { prompt, id, category, icon } = route.params;

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

    const threadCreatedAlert = () =>
    Alert.alert(
        [
      "Entry Created!",
      "An entry with the prompt \'" + {prompt} + "\' has been created",
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Go to entry!", onPress: () => console.log('Lol')}
      ]
    );

    const leaveChallengeAlert = () =>
    Alert.alert(
      "Entry Created!",
      "An entry with the prompt \'" + prompt + "\' has been created",
      [
        { text: "OK", onPress: () => console.log("OK Pressed")}
      ]
    );

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
                        <Text center nonBlackBlack marginB-s4>Reflect on your volunteering experience and answer the prompt below.</Text>

                        <Card marginT-s6 style={[Styles.blueCardPrompt, Styles.boxShadow]} centerH>
                            <View centerH>
                            {category === 'Hardships' && <FontAwesome5 name={'dumbbell'} size={30} color={"white"}/>}
                            {category === 'Lessons' && <FontAwesome5 name={'chalkboard-teacher'} size={30} color={"white"}/>}
                            {category === 'Goals' && <FontAwesome5 name={'medal'} size={30} color={"white"}/>}
                            {category === 'Inspirations' && <FontAwesome5 name={'lightbulb'} size={30} color={"white"}/>}




                            <Text center bigBody marginT-s4>Prompt: {prompt}</Text>
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
                            icon: icon,
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
                    leaveChallengeAlert();
                }}
                user={{
                    _id: 1,
                }}
            />
        </>


    );
}

export default CreateThread
