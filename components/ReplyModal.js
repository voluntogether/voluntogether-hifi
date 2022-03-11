import React from "react";
import { Modal, TextField, Text } from "react-native-ui-lib"
import ProfilePic from "./ProfilePic";

let ReplyModal = ({ message, openReplyModal, onChangeText, onDone, onCancel }) => {


    return (
        <Modal visible={openReplyModal}>
            <Modal.TopBar
                title="New Reply"
                onCancel={onCancel}
                onDone={onDone}
                cancelIcon={null}
                cancelLabel="Back"
            />
            <Text>{message.message.body}</Text>
            <ProfilePic id={message.message.user} />
            <TextField
                placeholder={'Enter your response'}
                floatingPlaceholder
                onChangeText={(message) => onChangeText(message)}

            />
        </Modal>

    )
}


export default ReplyModal