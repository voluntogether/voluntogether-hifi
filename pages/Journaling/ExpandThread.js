import React, { useState } from "react";
import { View, Text, Image, Button, Card, Modal, TextField } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import Styles from "../../Style.js";
import { StyleSheet, Pressable } from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";
import BackArrow from "../../components/BackArrow";
import Journal from "../../components/Journal";

import { addMessage, addReply } from "../../state/journalingSlice.js";

import _ from "underscore"

let ExpandThread = ({ navigation, route }) => {




  const { id, index } = route.params;
  const journal = useSelector(state => state.journaling.journals.find(j => j.id === id));

  let [openReplyModal, setOpenReplyModal] = useState(false);
  let [openMessageModal, setOpenMessageModal] = useState(false);

  let [modifiedMessageIndex, setModifiedMessageIndex] = useState(null);
  let [response, setResponse] = useState("");
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
      </Modal>

      <View flex right bottom>
        <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"+"} onPress={() => setOpenMessageModal(true)} />
      </View>
    </View>
  );
}

export default ExpandThread;
