import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View, Image } from "react-native-ui-lib";
import _ from "underscore";
import ProfilePic from "./ProfilePic";
import Styles from "../Style.js";
import { userLookup } from "../util/util";
import { useSelector } from "react-redux";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImageModal from 'react-native-image-modal';


let Journal = ({ journal, index, openModal, imageModalCallback }) => {

  let users = useSelector(state => state.user);

  return (
    _.map(journal.prompts[index].responses, (message, index) => {
      return (
        <Pressable onPress={() => openModal(index)}>
          <View style={StylesExpand.container} marginH-s4>
            <View style={[StylesExpand.threadCard, Styles.noHorizontalPadding]} >
              <View left>
                <View style={[Styles.alignRow]} centerH paddingB-s6>
                  <ProfilePic id={message.message.user} />
                  <Text bold smallBody> {userLookup(message.message.user, users).name + "'s journal entry"} </Text>
                  {_.map(message.message.images, (image) => {
                    return (
                      <Pressable onPress={() => {

                        imageModalCallback(image)
                      }}><ImageModal
                          resizeMode="contain"
                          imageBackgroundColor="#000000"
                          style={{
                            width: 50,
                            height: 50,
                          }}
                          source={{
                            uri: image.uri,
                          }}
                        /></Pressable>)
                  })}
                </View>
                <Text marginB-s4>{message.message.body}</Text>

                {/* REPLY */}
                {_.map(message.replies, (reply) => {
                  return (
                    <Pressable  >
                      {/* <View> */}
                      <View style={[StylesExpand.replyLine]}>
                        <Text marginH-s6>{userLookup(reply.message.user, users).name + ": " + reply.message.body}</Text>
                      </View>
                    </Pressable>)
                })
                }

              </View>
            </View>
            <FontAwesome5 style={{marginLeft: 300}} name={'reply'} size={20} color={"#000"} />

          </View>
        </Pressable>
      )
    })
  );
}
const StylesExpand = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#10123D"
  },
  threadCard: {
    width: "100%",
    paddingTop: 10,
    marginBottom: 30,
  },
  replyLine: {
    marginLeft: 20,
    borderLeftWidth: 1,
    borderLeftColor: "#818181",
    borderTopLeftRadius: 0,

  }
});
export default Journal;
