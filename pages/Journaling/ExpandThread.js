import React, { useState } from "react";
import { Pressable } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Button, Image, Modal, Text, TextField, View } from "react-native-ui-lib";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from "react-redux";
import _ from "underscore";
import BackArrow from "../../components/BackArrow";
import Journal from "../../components/Journal";
import ReplyModal from "../../components/ReplyModal";
import MessageModal from "../../components/MessageModal";

import { addMessage, addReply } from "../../state/journalingSlice.js";
import Styles from "../../Style.js";



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
      <BackArrow navigation={navigation} />
      <Text heading center nonBlackBlack marginB-s4>Journal Responses</Text>

      <Journal navigation={navigation} openModal={(messageIndex) => {

        setOpenReplyModal(true);
        setModifiedMessageIndex(messageIndex);



      }} index={index} journal={journal} />


      <ReplyModal openReplyModal={openReplyModal} onCancel={() => setOpenReplyModal(false)}
        onDone={() => {
          createReply(response, index, modifiedMessageIndex)
          setOpenReplyModal(false);
        }}
        onChangeText={(message) => {
          setResponse(message);
        }}
      />


      <MessageModal openMessageModal={openMessageModal} onCancel={() => setOpenMessageModal(false)}
        onChangeText={(message) => setResponse(message)} onDone={() => {
          createMessage(response)
          setOpenMessageModal(false);
        }}
      />





      <View flex right bottom>
        <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"+"} onPress={() => setOpenMessageModal(true)} />
      </View>
    </View>
  );
}

export default ExpandThread;
