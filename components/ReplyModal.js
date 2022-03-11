import React from "react";
import { Alert } from "react-native";
import { Modal, TextField, Text, View } from "react-native-ui-lib"
import ProfilePic from "./ProfilePic";
import Styles from "../Style.js";


let ReplyModal = ({ message, openReplyModal, onChangeText, onDone, onCancel }) => {

    const confirmSendResponse = () =>
        Alert.alert(
            "Send Response?",
            "Once a response is posted it cannot be deleted.",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Send Response", onPress: () => onDone() }
            ]
        );

    const confirmExitResponse = () =>
        Alert.alert(
            "Discard Response?",
            "Your response will not be saved.",
            [
                {
                    text: "Discard Response",
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
        <Modal visible={openReplyModal}>
            <Modal.TopBar
                title="New Reply"
                onCancel={confirmExitResponse}
                onDone={confirmSendResponse}
                cancelIcon={null}
                cancelLabel="Back"
<<<<<<< HEAD
=======
    
            />
            <View marginT-s10 marginH-s8 > 
            <View style={[Styles.alignProfilePicsRow]} centerH>
                <ProfilePic marginR-s4 id={message.message.user}/>
                <Text marginL-s2 marginH-s8>{message.message.body}</Text>
                
            </View> 
>>>>>>> 4aeea367efad57468af6f1d305da138c27f02e4d

            />
            <View marginT-s10 marginH-s8 >
                <View style={[Styles.alignRow]}>
                    <ProfilePic marginR-s4 id={message.message.user} />
                    <Text marginL-s2 marginH-s8>{message.message.body}</Text>

                </View>

                <TextField
                    placeholder={'Enter your response'}
                    floatingPlaceholder
                    onChangeText={(message) => onChangeText(message)}
                />


            </View>
        </Modal>

    )
}


export default ReplyModal