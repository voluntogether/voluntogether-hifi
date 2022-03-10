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

          <View style={[StylesExpand.threadCard, Styles.noHorizontalPadding]} > 
          <View  backgroundColor="D4D4D4" left>
            <View style={[Styles.alignRow]} centerH> 
              <ProfilePic id={message.message.user} />
              <Text> {'Answered by ' + message.message.user} </Text>
            </View>
            


            <Text>{message.message.body}</Text>
            {_.map(message.replies, (reply) => {
              return (
                <Pressable>
                  <View>
                    <Text>{reply.message.body}</Text>
                    <Text> {'By ' + reply.message.user} </Text>

                  </View>
                </Pressable>)
                
            })


            }

          </View>
          
          </View> 
          
        </Pressable>)
    })

  );

}

const StylesExpand = StyleSheet.create({
  threadCard: {
    backgroundColor: "D4D4D4",
    height: 100,
    width: "100%",
    paddingTop: 10,
    marginBottom: 30,
  },
});

export default Journal; 