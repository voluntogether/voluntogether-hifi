import React, { useState } from "react";
import { Pressable } from "react-native"
import { Modal, Incubator, Text, View, Button, Colors } from "react-native-ui-lib"
import ProfilePic from "./ProfilePic";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { launchImageLibrary } from "react-native-image-picker";

import { useDispatch, useSelector } from "react-redux";
import { rename, setProfilePic, toggleOnboarding, setEmail } from "../state/userSlice";
import Styles from "../Style.js";
let TextField = Incubator.TextField;

let SettingsModal = ({ visible, onDone, onCancel }) => {


    let dispatch = useDispatch();
    let user = useSelector(state => state.user);
    let [name, setName] = useState(user.name);
    let [localEmail, setLocalEmail] = useState(user.email);

    return (
        <Modal visible={visible}>
            <Modal.TopBar
                title="Settings"
                onCancel={() => {
                    setName(user.name);
                    setLocalEmail(user.email);
                    onCancel();
                }}
                onDone={() => {

                    dispatch(rename(name));
                    dispatch(setEmail(localEmail));
                    onDone()
                }}
                doneButtonProps={{ color: "#000" }}
                cancelButtonProps={{ iconStyle: { tintColor: "#000" } }}
                cancelLabel={<Text color="#000">abcd</Text>}
            />

            <Pressable onPress={() => {
                // handle profile pic change
                launchImageLibrary({
                    mediaType: 'photo',

                }, ({ didCancel, errorCode, errorMessage, assets }) => {
                    console.log(didCancel, errorCode, errorMessage, assets)
                    if (!didCancel) {
                        dispatch(setProfilePic(assets[0].uri))

                    }
                })

            }}>
                <View centerH>
                    <ProfilePic id={1} />
                    <Text>Change Picture</Text>
                </View>
            </Pressable>


            <TextField
                placeholder={'Name'}
                floatingPlaceholder
                onChangeText={(text) => setName(text)}

            />
            <TextField
                placeholder={'email'}
                floatingPlaceholder
                onChangeText={(text) => setLocalEmail(text)}

            />
            <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Re-onboard'} onPress={() => dispatch(toggleOnboarding())} />

            <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Reset state'} onPress={() => dispatch(resetJournals())} />


        </Modal>

    )
}


export default SettingsModal