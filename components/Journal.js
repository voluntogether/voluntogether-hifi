import React from "react";
import { Pressable , StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import _ from "underscore";
import ProfilePic from "./ProfilePic";
import Styles from "../Style.js";
let Journal = ({ journal, index, openModal }) => {
  return (
    _.map(journal.prompts[index].responses, (message, index) => {
      return (
        <Pressable onPress={() => openModal(index)}>
          <View style={StylesExpand.container}> 

          <View style={[StylesExpand.threadCard, Styles.noHorizontalPadding]} >
          <View  backgroundColor="D4D4D4" left>
            <View style={[Styles.alignRow]} centerH paddingB-s6>
              <ProfilePic id={message.message.user} />
              <Text bold smallBody> {'Answered by ' + message.message.user} </Text>
            </View>
            <Text>{message.message.body}</Text>

            {/* REPLY */}
            {_.map(message.replies, (reply) => {
              return (
                <Pressable style={[StylesExpand.verticalLine]}s>
                  {/* <View> */}
                  <View tyle={[StylesExpand.replyLine]}>
                    <Text marginH-s6>{reply.message.body}</Text>
                    <Text> {'By ' + reply.message.user} </Text>
                  </View>
                </Pressable>)
            })
            }
          </View>
          </View>

          </View>
        </Pressable>)
    })
  );
}
const StylesExpand = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  threadCard: {
    backgroundColor: "#DBDBDB",
    height: 150,
    width: "100%",
    paddingTop: 10,
    marginBottom: 30,
  },
  verticalLine: {
    height: '100%',
    width:5,
    backgroundColor: "#818181",
    //marginLeft: 10,
  },
  replyLine: {
    borderLeftWidth: 1, 
    borderLeftColor: "#818181",
  }
});
export default Journal;