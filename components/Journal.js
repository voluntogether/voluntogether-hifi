import React from "react";
import { Pressable } from "react-native";
import { Text, View } from "react-native-ui-lib";
import _ from "underscore";
import ProfilePic from "./ProfilePic";


let Journal = ({ journal, index, openModal }) => {

  return (

    _.map(journal.prompts[index].responses, (message, index) => {
      return (

        <Pressable onPress={() => openModal(index)}>
          <View>
            <Text>{message.message.body}</Text>
            {/* <Text> {'By ' + message.message.user} </Text> */}
            <ProfilePic id={message.message.user} />
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
        </Pressable>)
    })

  );

}

export default Journal; 