import React, { useState } from "react";
import { Pressable } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Button, Image, Modal, Text, TextField, View } from "react-native-ui-lib";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from "react-redux";
import _ from "underscore";
import BackArrow from "../../components/BackArrow";
import Journal from "../../components/Journal";
import { addMessage, addReply } from "../../state/journalingSlice.js";
import Styles from "../../Style.js";



let ExpandThread = ({ navigation, route }) => {




  const { id, index } = route.params;
  const journal = useSelector(state => state.journaling.journals.find(j => j.id === id));

  let [openReplyModal, setOpenReplyModal] = useState(false);
  let [openMessageModal, setOpenMessageModal] = useState(false);

  let [modifiedMessageIndex, setModifiedMessageIndex] = useState(null);
  let [response, setResponse] = useState("");
  let [images, setImages] = useState([]);
  const dispatch = useDispatch();


  const createReply = (message, promptIndex, messageIndex) => {

    let newReply = {
      message: {
        body: message,
        user: 1,
      }
    }

    console.log(message, promptIndex, messageIndex)
    dispatch(addReply({ reply: newReply, promptIndex, messageIndex, id }));
  }

  const createMessage = (message) => {

    let newMessage = {
      message: {
        body: message,
        user: 1,
      },
      replies: []
    }


    dispatch(addMessage({ message: newMessage, promptIndex: index, id }));


  }


  return (
    <View flex padding-page >
      <View marginB-70 />
      <BackArrow navigation={navigation} />
      <Text heading center nonBlackBlack marginB-s4>Expand Thread</Text>
      <Text center body fadedSubtext marginB-s8>

      </Text>

      <Journal navigation={navigation} openModal={(messageIndex) => {

        setOpenReplyModal(true);
        setModifiedMessageIndex(messageIndex);



      }} index={index} journal={journal} />

      <Modal visible={openReplyModal} onBackgroundPress={() => console.log('background pressed')}>
        <Modal.TopBar
          title="New Reply"
          onCancel={() => setOpenReplyModal(false)}
          onDone={() => {
            createReply(response, index, modifiedMessageIndex)
            setOpenReplyModal(false);
          }
          }
          cancelIcon={null}
          cancelLabel="back"
        />
        <TextField
          placeholder={'Enter your response'}
          floatingPlaceholder
          onChangeText={(message) => setResponse(message)}

        />
      </Modal>

      <Modal visible={openMessageModal} onBackgroundPress={() => console.log('background pressed')}>
        <Modal.TopBar
          title="New Message"
          onCancel={() => setOpenMessageModal(false)}
          onDone={() => {
            createMessage(response)
            setOpenMessageModal(false);
          }
          }
          cancelIcon={null}
          cancelLabel="back"
        />
        <TextField
          placeholder={'Enter your new message'}
          floatingPlaceholder
          onChangeText={(message) => setResponse(message)}

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

      <View flex right bottom>
        <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"+"} onPress={() => setOpenMessageModal(true)} />
      </View>
    </View>
  );
}

export default ExpandThread;
