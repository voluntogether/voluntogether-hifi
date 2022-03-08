import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import { TextInput, Keyboard, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Styles from "../../Style.js";
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import DismissKeyboardView from "../../components/DismissKeyboardView.js";
import BackArrow from "../../components/BackArrow.js";


let CreateThread = ({ navigation, route }) => {

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
                text: `Hey, let's volunteer at ${organization} soon. You down?`,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: name,
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])
    const { name, organization } = route.params;
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View flex padding-page>
                    <BackArrow navigation={navigation} />

                    <View centerH>
                        <View>
                            <Text style={[Styles.spacer]}></Text>
                        </View>

                        <Text heading center nonBlackBlack marginB-s4>Chat with {name}</Text>

                        <Text center italic fadedSubtext marginB-s8 >We recommend that you and {name} volunteer at {organization}. However, if you feel strongly, you can also discuss
                            and select another organization yourselves.</Text>

                        <Button label={'Skip chat'} style={[Styles.smallGreenButton, Styles.boxShadow]} onPress={() => navigation.navigate('MatchingComplete')} />
                    </View>

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
            />
        </>


    );
}

export default CreateThread

