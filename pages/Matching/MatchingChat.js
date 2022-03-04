import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import { TextInput, Keyboard, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Styles from "../../Style.js";
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import DismissKeyboardView from "../../components/DismissKeyboardView.js";


let MatchingChat = ({ navigation, route }) => {


    const [messages, setMessages] = useState([]);

    const styles = StyleSheet.create({
        toolbar: {
            // borderRadius: 15,
            // marginLeft: 8,
            // marginRight: 8,
            // backgroundColor: '#f4f4f4',
            // borderColor: '#10123d',
            // borderWidth: 1.5,
            // borderTopWidth: 1.5,
            // borderTopColor: '#10123d'
            // paddingTop: 10,
            // paddingBottom: 2
        }
    })


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    function renderInputToolbar(props) {
        return (
            <InputToolbar {...props} primaryStyle={styles.toolbar} containerStyle={{
                backgroundColor: "#f4f4f4",
            }} accessoryStyle={{}} />
        )
    }

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])
    const { name, organization } = route.params;
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View flex padding-page centerH>


                    <Text heading center nonBlackBlack marginB-s4>Chat with {name}</Text>

                    <Text italic fadedSubtext>We recommend that you and {name} volunteer at {organization}. However, if you feel strongly, you can also discuss
                        and select another organization yourselves.</Text>
                    <View>
                        <Text> {name} </Text>
                    </View>
                    <Text> Hey, let's volunteer at {organization} soon. You down? </Text>

                    <Button label={'next (temp)'} onPress={() => navigation.navigate('MatchingComplete')} />


                    {/* </DismissKeyboardView> */}


                </View>
            </TouchableWithoutFeedback>

            <GiftedChat
                renderInputToolbar={renderInputToolbar}
                messages={messages}
                onSend={messages => {
                    Keyboard.dismiss();
                    navigation.navigate('MatchingComplete');
                }}
                user={{
                    _id: 1,
                }}
            // bottomOffset={120}
            />


        </>


    );
}

export default MatchingChat
