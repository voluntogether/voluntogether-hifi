import React from "react";
import { Modal, TextField, Text, View } from "react-native-ui-lib"
import ProfilePic from "./ProfilePic";
import Styles from "../Style.js";


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
            <View marginT-s10 marginH-s8 > 
            <View style={[Styles.alignRow]}>
                <ProfilePic marginR-s4 id={message.message.user}/>
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