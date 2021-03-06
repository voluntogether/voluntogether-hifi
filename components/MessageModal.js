import React, { useState } from "react";
import { Pressable, Alert } from "react-native";
import { Modal, TextField, Image, Text, Card, View } from "react-native-ui-lib"
import { launchImageLibrary } from "react-native-image-picker";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Styles from "../Style.js";
import _ from "underscore"
let MessageModal = ({ prompt, openMessageModal, onChangeText, onDone, onCancel, images, imageCallback }) => {

    const confirmSendReflection = () =>
        Alert.alert(
            "Send Reflection?",
            "Once a reflection is posted it cannot be deleted.",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Send Response", onPress: () => onDone() }
            ]
        );

    const confirmExitReflection = () =>
        Alert.alert(
            "Discard Reflection?",
            "Your reflection will not be saved.",
            [
                {
                    text: "Discard Reflection",
                    onPress: () => onCancel(),
                    style: "cancel"
                },
                {
                    text: "Cancel", onPress: () => console.log("OK Pressed"),
                    style: "cancel"
                }
            ]
        );


    return (
        <Modal visible={openMessageModal} onBackgroundPress={() => console.log('background pressed')}>
            <Modal.TopBar
                title="New Message"
                onCancel={confirmExitReflection}
                onDone={confirmSendReflection}
                cancelIcon={null}
                cancelLabel="Back"
            />

            <View centerH>
                <Card marginT-s8 style={[Styles.blueCardThreadPrompt]} centerH>
                    <View centerH>
                        <FontAwesome5 name={prompt.icon} size={30} color={"#ffffff"} />
                        <Text center bigBody marginT-s4>Prompt: {prompt.prompt}</Text>
                    </View>
                </Card>
            </View>

            <FontAwesome5 name={prompt.icon} size={20} color={"white"} />

            <View marginT-s4 marginH-s8>
                <Pressable onPress={() => {
                    launchImageLibrary({
                        mediaType: 'photo',

                    }, ({ didCancel, errorCode, errorMessage, assets }) => {
                        console.log(didCancel, errorCode, errorMessage, assets)
                        if (!didCancel) {
                            imageCallback(assets)
                        }
                    })
                }}>

                    <View >
                        <FontAwesome5 name={'image'} size={20} />
                        {_.map(images, (image) => {
                            return <Image source={{ uri: image.uri }} style={{ width: 50, height: 50 }} />
                        })}

                        <TextField
                            placeholder={'Enter your new message'}
                            floatingPlaceholder
                            onChangeText={onChangeText}

                        />
                    </View>


                </Pressable>
            </View>

        </Modal>

    )
}


export default MessageModal