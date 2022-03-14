import React, { useState } from "react";
import { Pressable, ScrollView } from "react-native";
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

import ImageModal from 'react-native-image-modal';


let ExpandThread = ({ navigation, route }) => {

  const { id, index } = route.params;
  const journal = useSelector(state => state.journaling.journals.find(j => j.id === id));
  let prompt = journal.prompts[index];
  let [openReplyModal, setOpenReplyModal] = useState(false);
  let [openMessageModal, setOpenMessageModal] = useState(false);
  let [images, setImages] = useState([]);
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

  const createMessage = (message, images) => {

    let newMessage = {
      message: {
        body: message,
        user: 1,
        images: images
      },
      replies: []
    }


    dispatch(addMessage({ message: newMessage, promptIndex: index, id }));


  }

  const messageLookup = (journal, promptIndex, messageIndex) => {

    console.log(journal, promptIndex, messageIndex)
    let prompt = journal.prompts[promptIndex];
    let message = prompt.responses[messageIndex];

    return message;
  }


  return (

    <View padding-page style={[Styles.noHorizontalPadding]}>

    <ScrollView contentContainerStyle={{flexGrow: 1}}>

        <View style={[Styles.backArrowContainerForPageWithoutPadding]}>
          <BackArrow navigation={navigation} />
        </View>
        <Text heading center nonBlackBlack marginB-s4>Journal Responses</Text>

        <Journal imageModalCallback={(image) => {
          setImageModalImage(image);
          setImageModalOpen(true);
        }}
        
          navigation={navigation} openModal={(messageIndex) => {

            setOpenReplyModal(true);
            setModifiedMessageIndex(messageIndex);

          }} index={index} journal={journal} />

        {modifiedMessageIndex !== null && <ReplyModal message={messageLookup(journal, index, modifiedMessageIndex)} openReplyModal={openReplyModal} onCancel={() => setOpenReplyModal(false)}
          onDone={() => {
            createReply(response, index, modifiedMessageIndex)
            setOpenReplyModal(false);
          }}
          onChangeText={(message) => {
            setResponse(message);
          }}
        />}

        <MessageModal prompt={prompt} images={images} imageCallback={(assets) => setImages(images.concat(assets))} openMessageModal={openMessageModal} onCancel={() => setOpenMessageModal(false)}
          onChangeText={(message) => setResponse(message)} onDone={() => {
            createMessage(response, images)
            setOpenMessageModal(false);
          }}
        />
      </ScrollView>

      <View position={'absolute'} style={{ marginTop: 690, marginLeft: 310 }} marginR-s4 flex right bottom>
        
        <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"+"} onPress={() => setOpenMessageModal(true)} />
      </View>
    </View>
  );
}

export default ExpandThread;
