import React from "react";
import { Modal, TextField, Text } from "react-native-ui-lib"
import ProfilePic from "./ProfilePic";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

let SettingsModal = ({ visible, onDone, onCancel }) => {



    return (
        <Modal visible={visible}>
            <Modal.TopBar
                title="Settings"
                onCancel={onCancel}
                onDone={onDone}
                // cancelIcon={<FontAwesome5 name="x" />}
                cancelLabel="Exit"
            />

            <TextField
                placeholder={'Enter your response'}
                floatingPlaceholder
                // onChangeText={(message) => onChangeText(message)}

            />
        </Modal>

    )
}


export default SettingsModal