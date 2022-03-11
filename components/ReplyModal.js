import React from "react";
import { Modal, TextField } from "react-native-ui-lib"

let ReplyModal = ({ openReplyModal, onChangeText, onDone, onCancel }) => {


    return (
        <Modal visible={openReplyModal}>
            <Modal.TopBar
                title="New Reply"
                onCancel={onCancel}
                onDone={onDone}
                cancelIcon={null}
                cancelLabel="Back"
            />
            <TextField
                placeholder={'Enter your response'}
                floatingPlaceholder
                onChangeText={(message) => onChangeText(message)}

            />
        </Modal>

    )
}


export default ReplyModal