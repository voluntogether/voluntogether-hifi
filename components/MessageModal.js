import React, { useState } from "react";
import { Pressable } from "react-native";
import { Modal, TextField, Image } from "react-native-ui-lib"
import { launchImageLibrary } from "react-native-image-picker";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import _ from "underscore"
let MessageModal = ({ openMessageModal, onChangeText, onDone, onCancel }) => {
    let [images, setImages] = useState([]);


    return (
        <Modal visible={openMessageModal} onBackgroundPress={() => console.log('background pressed')}>
            <Modal.TopBar
                title="New Message"
                onCancel={onCancel}
                onDone={onDone}
                cancelIcon={null}
                cancelLabel="Back"
            />
            
            <TextField
                placeholder={'Enter your new message'}
                floatingPlaceholder
                onChangeText={onChangeText}

            />
            <Pressable onPress={() => {
                launchImageLibrary({
                    mediaType: 'photo',

                }, ({ didCancel, errorCode, errorMessage, assets }) => {
                    console.log(didCancel, errorCode, errorMessage, assets)
                    if (!didCancel) {
                        setImages(images.concat(assets))
                    }
                })
            }}>
                <FontAwesome5 name={'image'} size={20} />
                {_.map(images, (image) => {
                    return <Image source={{ uri: image.uri }} style={{ width: 50, height: 50 }} />
                })}
            </Pressable>

        </Modal>

    )
}


export default MessageModal